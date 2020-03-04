<?php

namespace App\Http\Controllers;

use App\Pardavimai;
use App\Likutis;
use App\Akcijos;
use App\Kelione;
use App\Atsargos;

use App\File;
use App\Http\Requests\FileUploadRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class CSVController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }
    
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
                $flag = true;
                if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
                while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                    //praleidziam pirma eilute
                    if($flag) { $flag = false; continue; }
                    $duomenys = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
                    $kiek = explode(",", $duomenys[6]);
                    $kiek = $kiek[0];

                    $q = new Pardavimai;
                    $q->preke = $duomenys[2];
                    $q->pavadinimas = $duomenys[3];
                    $q->barkodas = $duomenys[1];
                    $q->grupe = $duomenys[3];
                    $q->sandelis = $duomenys[0];
                    $q->kiekis = $kiek;
                    $q->pardavimo_kaina = $duomenys[7];
                    $q->pardavimo_suma = $duomenys[7];
                    $q->pvm = $duomenys[8];
                    $q->pvm_suma = $duomenys[9];
                    $q->suma = $duomenys[10];
                    $q->grupes_pavadinimas = $duomenys[3];
                    $q->registras = $duomenys[4];
                    $q->salis = $valstybe;
                    $q->save();
                }
                fclose($handle);
                }
                
            }
            //uzkeliame ESTIJOS pardavimu duomenis
            if($valstybe == 3){
                DB::table('pardavimais')->where('salis', 3)->delete();
                //reikia EST Gamyba irasant pakeisti i GAM, o Pirkimas i PIRK
                if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
                    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                        $duomenys = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
                        if($duomenys[0] == "Gamyba"){
                            $reg = "GAM";
                        }
                        if($duomenys[0] == "Pirk"){
                            $reg = "PIRK";
                        }

                        $q = new Pardavimai;
                        $q->preke = $duomenys[8];
                        $q->pavadinimas = $duomenys[3];
                        $q->barkodas = $duomenys[8];
                        $q->grupe = $duomenys[1];
                        $q->sandelis = $duomenys[2];
                        $q->kiekis = $duomenys[5];
                        $q->pardavimo_kaina = 0;
                        $q->pardavimo_suma = 0;
                        $q->pvm = 0;
                        $q->pvm_suma = 0;
                        $q->suma = 0;
                        $q->grupes_pavadinimas = 0;
                        $q->registras = $reg;
                        $q->salis = $valstybe;
                        $q->save();
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
                $flag = true;
                if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
                while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                    if($flag) { $flag = false; continue; }
                    $duomenys = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
                    $kiek = explode(",", $duomenys[4]);
                    $kiek = $kiek[0];

                    $q = new Likutis;
                    $q->preke = $duomenys[0];
                    $q->pavadinimas = $duomenys[1];
                    $q->kaina = $duomenys[3];
                    $q->kiekis = $kiek;
                    $q->suma = $duomenys[5];
                    $q->sandelis = $duomenys[6];
                    $q->registras = $duomenys[7];
                    $q->salis = $valstybe;
                    $q->save();
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
                        if($duomenys[2] == "Gamyba"){
                            $reg = "GAM";
                        }
                        if($duomenys[2] == "Pirk"){
                            $reg = "PIRK";
                        }
                        
                        $q = new Likutis;
                        $q->preke = $duomenys[6];
                        $q->pavadinimas = $duomenys[1];
                        $q->kaina = 0;
                        $q->kiekis = $duomenys[7];
                        $q->suma = $duomenys[8];
                        $q->sandelis = $duomenys[5];
                        $q->registras = $reg;
                        $q->salis = $valstybe;
                        $q->save();
                    }
                    fclose($handle);
                }
            }
        }

         //daromas AKCIJU uzkelimas
         if($tipas == 3){
            //Uzkelime LIETUVOS ir LATVIJOS duomenis
            if($valstybe == 1 || $valstybe == 2){
                if($valstybe == 1){
                    DB::table('akcijos')->where('salis', 1)->delete();
                }
                if($valstybe == 2){
                    DB::table('akcijos')->where('salis', 2)->delete();
                }
                $flag = true;
                if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
                while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                    if($flag) { $flag = false; continue; }
                    $duomenys = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
                    if(strtotime($duomenys[2]) > strtotime(date("Y-m-d H:i:s"))){

                    $q = new Akcijos;
                    $q->akcija = $duomenys[0];
                    $q->galioja_nuo = $duomenys[1];
                    $q->galioja_iki = $duomenys[2];
                    $q->pavadinimas = $duomenys[4];
                    $q->preke = $duomenys[3];
                    $q->sandelis = $duomenys[8];
                    $q->kaina = $duomenys[5];
                    $q->salis = $valstybe;
                    $q->save();
                    }
                }
                fclose($handle);
                }
            }
        }

        //daromas KELIONES LAPŲ uzkelimas
        if($tipas == 4){
            //Uzkelime LIETUVOS ir LATVIJOS duomenis
            if($valstybe == 1 || $valstybe == 2){
                if($valstybe == 1){
                    DB::table('keliones')->where('salis', 1)->delete();
                }
                if($valstybe == 2){
                    DB::table('keliones')->where('salis', 2)->delete();
                }
                $flag = true;
                if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
                while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                    if($flag) { $flag = false; continue; }
                    $duomenys = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");

                    $q = new Kelione;
                    $q->data = $duomenys[0];
                    $q->doc_nr = $duomenys[2];
                    $q->blanko_nr = $duomenys[3];
                    $q->sandelis_is = $duomenys[4];
                    $q->sandelis_i = $duomenys[5];
                    $q->preke = $duomenys[6];
                    $q->kiekis = $duomenys[7];
                    $q->kaina = $duomenys[8];
                    $q->grupe = $duomenys[9];
                    $q->pavadinimas = $duomenys[10];
                    $q->salis = $valstybe;
                    $q->save();
                }
                fclose($handle);
                }
            }
        }

        //daromas KELIONES LAPŲ uzkelimas
        if($tipas == 5){
            //Uzkelime LIETUVOS ir LATVIJOS duomenis
            if($valstybe == 1 || $valstybe == 2){
                if($valstybe == 1){
                    DB::table('atsargos')->where('salis', 1)->delete();
                }
                if($valstybe == 2){
                    DB::table('atsargos')->where('salis', 2)->delete();
                }
                //reikia duomenu pildyma toliau
                //su naujais irasais

                $flag = true;
                if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
                while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                    if($flag) { $flag = false; continue; }
                    $duomenys = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");

                    $q = new Atsargos;
                    $q->data = $duomenys[0];
                    $q->doc_nr = $duomenys[2];
                    $q->blanko_nr = $duomenys[3];
                    $q->sandelis_is = $duomenys[4];
                    $q->sandelis_i = $duomenys[5];
                    $q->preke = $duomenys[6];
                    $q->kiekis = $duomenys[7];
                    $q->kaina = $duomenys[8];
                    $q->grupe = $duomenys[9];
                    $q->pavadinimas = $duomenys[10];
                    $q->salis = $valstybe;
                    $q->save();
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
