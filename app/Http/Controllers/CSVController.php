<?php

namespace App\Http\Controllers;

use App\File;
use App\Http\Requests\FileUploadRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class CSVController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = array();
        $directory  = "CSV_DATA";
        $files = Storage::files($directory);
        for($i = 0; $i < count($files); $i++){
            $size = Storage::size($files[$i]);
            $lastModified = Storage::lastModified($files[$i]);
            $file = str_replace($directory."/", "", $files[$i]);
            $data[$i] = array("vardas" => $file, "dydis" => $size,
             "modifikuota" => gmdate("Y-m-d - H:i:s", $lastModified));
        }


        /*$failas = 'pardavimai-estija.csv';
        $valstybe = 3;
        $tipas = 1;

        $directory  = "app/CSV_DATA/";
        $failas = $directory.$failas;*/

            
        //var_dump($records);
        return response()->json([
            'status' => true,
            'data' => $data,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request){
        $uploadedFile = $request->file('file');

        if (!$uploadedFile->isValid()) {
            abort( 422 );}

        $storePath = $uploadedFile->storeAs('CSV_DATA', $uploadedFile->getClientOriginalName());
        $file = new File;

        $file->name = $uploadedFile->getClientOriginalName();
        $file->file = $storePath;
        $file->mime = $uploadedFile->getMimeType();
        $file->size = $uploadedFile->getSize();

        $file->save();

        return response()->json([
            'status' => true,
            'data' => $file,
            'upload' => $uploadedFile
        ]);
    }

    public function CSV_store(Request $request)
    {
        //pranesimai, ivykus klaidai
        $message = array();

        $data = $request->all();
        $failas = $data['failas'];
        $valstybe = $data['valstybe'];
        $tipas = $data['tipas'];

        $directory  = "app/CSV_DATA/";
        $failas = $directory.$failas;

        //patikrinti ar yra tai valstybei ikelti duomenys,
        //jei yra neleisti ikelti, pranesti kad istrintu senus duomenis, 
        //arba pazymeti varnele, kad seni isitrintu
        //perkelti is CIA i pardavimai Controller
        //jei duomenys sukrito i duomenu base
        //pasidaryti to failo istrinima, kad nesimaisytu

        //daromas pardavimu užkėlimas
        if($tipas == 1){
            //Uzkelime LIETUVOS ir LATVIJOS duomenis
            if($valstybe == 1 || $valstybe == 2){
                if($valstybe == 1){
                    DB::table('pardavimais')->where('salis', 1)->delete();
                }
                if($valstybe == 2){
                    DB::table('pardavimais')->where('salis', 2)->delete();
                }
                if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
                while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                    $duomenys = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
                    $kiek = explode(",", $duomenys[6]);
                    $kiek = $kiek[0];
                    DB::table('pardavimais')->insert([
                        'preke' => $duomenys[2],
                        'pavadinimas' => $duomenys[3],
                        'barkodas' => $duomenys[1],
                        'grupe' => $duomenys[3],
                        'sandelis' => $duomenys[0],
                        'kiekis' => $kiek,
                        'pardavimo_kaina' => $duomenys[7],
                        'pardavimo_suma' => $duomenys[7],
                        'pvm' => $duomenys[8],
                        'pvm_suma' => $duomenys[9],
                        'suma' => $duomenys[10],
                        'grupes_pavadinimas' => $duomenys[3],
                        'registras' => $duomenys[4],,
                        'salis' => $valstybe,
                        ]);
                }
                fclose($handle);
                }
                
            }
            //uzkeliame ESTIJOS pardavimusduomenis
            if($valstybe == 3){
                DB::table('pardavimais')->where('salis', 3)->delete();
                //reikia EST Gamyba irasant pakeisti i GAM, o Pirkimas i PIRK
                if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
                    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                        $duomenys = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
                        DB::table('pardavimais')->insert([
                            'preke' => $duomenys[8],
                            'pavadinimas' => $duomenys[3],
                            'barkodas' => $duomenys[8],
                            'grupe' => $duomenys[1],
                            'sandelis' => $duomenys[2],
                            'kiekis' => $duomenys[5],
                            'pardavimo_kaina' => 0,
                            'pardavimo_suma' => 0,
                            'pvm' => 0,
                            'pvm_suma' => 0,
                            'suma' => 0,
                            'grupes_pavadinimas' => 0,
                            'registras' => $duomenys[0],
                            'salis' => $valstybe,
                            ]);
                    }
                    fclose($handle);
                }
            }
        }

        //daromas likuciu uzkelimas
        if($tipas == 2){
            //Uzkelime LIETUVOS ir LATVIJOS duomenis
            if($valstybe == 1 || $valstybe == 2){
                if($valstybe == 1){
                    DB::table('likutis')->where('salis', 1)->delete();
                }
                if($valstybe == 2){
                    DB::table('likutis')->where('salis', 2)->delete();
                }
                if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
                while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                    $duomenys = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
                    $kiek = explode(",", $duomenys[4]);
                    $kiek = $kiek[0];
                    DB::table('likutis')->insert([
                        'preke' => $duomenys[0],
                        'pavadinimas' => $duomenys[1],
                        'kaina' => $duomenys[3],
                        'kiekis' => $kiek,
                        'suma' => $duomenys[5],
                        'sandelis' => $duomenys[6],
                        'registras' => $duomenys[7],
                        'salis' => $valstybe,
                        ]);
                }
                fclose($handle);
                }
            }
            //uzkeliame ESTIJOS duomenis
            if($valstybe == 3){
                DB::table('likutis')->where('salis', 3)->delete();
                //reikia EST Gamyba irasant pakeisti i GAM, o Pirkimas i PIRK
                if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
                    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                        $duomenys = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
                        DB::table('likutis')->insert([
                            'preke' => $duomenys[6],
                            'pavadinimas' => $duomenys[1],
                            'kaina' => 0,
                            'kiekis' => $duomenys[7],
                            'suma' => $duomenys[8],
                            'sandelis' => $duomenys[5],
                            'registras' => $duomenys[2],
                            'salis' => $valstybe,
                            ]);
                    }
                    fclose($handle);
                }
            }
        }

        //$ats = Storage::delete($failas);
        $ats = unlink(storage_path($failas));
        
        return response()->json([
            'status' => true,
            'ats' => $ats,
            'data' => $message
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //$contents = Storage::get('file.jpg');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $directory  = "CSV_DATA/";
        Storage::delete($directory.$id);

        return response()->json([
            'status' => true,
            'data' => $id
        ]);
    }
}
