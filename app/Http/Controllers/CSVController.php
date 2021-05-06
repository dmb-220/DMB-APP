<?php

namespace App\Http\Controllers;

use App\Pardavimai;
use App\Likutis;
use App\Akcijos;
use App\Kelione;
use App\Atsargos;
use App\Pirkimai;
use App\Bankas;
use App\Inte;

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
                $da = [];
                if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
                while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                    //praleidziam pirma eilute
                    if($flag) { $flag = false; continue; }
                    $val = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
                    $kiek = explode(",", $val[10]);
                    $kiek = $kiek[0];

                    $da[] = [
                        'preke' => $val[6],
                        'pavadinimas' => $val[7],
                        'barkodas' => $val[5],
                        'grupe' => $val[7],
                        'sandelis' => $val[0],
                        'kiekis' => $kiek,
                        'pardavimo_kaina' => $val[11],
                        'pardavimo_suma' => $val[11],
                        'pvm' => $val[12],
                        'pvm_suma' => $val[13],
                        'suma' => $val[14],
                        'grupes_pavadinimas' => $val[7],
                        'registras' => $val[8],
                        'salis' => $valstybe,
                        'dok_nr' => $val[1],
                        'dok_data' => $val[2],
                        'blanko_nr' => $val[3],
                        'pirkejas' => $val[4],
                    ];
                }
                fclose($handle);
                }
                
                $chunks = array_chunk($da, 300);
                foreach($chunks as $val){
                    Pardavimai::insert($val);
                }
            }
            //uzkeliame ESTIJOS pardavimu duomenis
            if($valstybe == 3){
                DB::table('pardavimais')->where('salis', 3)->delete();
                //reikia EST Gamyba irasant pakeisti i GAM, o Pirkimas i PIRK
                $da = [];
                if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
                    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                        $val = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
                        if($val[0] == "Gamyba"){
                            $reg = "GAM";
                        }
                        if($val[0] == "Pirk"){
                            $reg = "PIRK";
                        }

                        $da[] = [
                            'preke' => $val[8],
                            'pavadinimas' => $val[3],
                            'barkodas' => $val[8],
                            'grupe' => $val[1],
                            'sandelis' => $val[2],
                            'kiekis' => $val[5],
                            'pardavimo_kaina' => 0,
                            'pardavimo_suma' => 0,
                            'pvm' => 0,
                            'pvm_suma' => 0,
                            'suma' => 0,
                            'grupes_pavadinimas' => 0,
                            'registras' => $reg,
                            'salis' => $valstybe,
                            'dok_nr' => " ",
                        'dok_data' => "2020-01-01",
                        'blanko_nr' => " ",
                        'pirkejas' => " ",
                        ];                     
                    }
                    fclose($handle);
                }

                $chunks = array_chunk($da, 3000);
                foreach($chunks as $val){
                    Pardavimai::insert($val);
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
                $da = [];
                if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
                while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                    if($flag) { $flag = false; continue; }
                    $val = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
                    $kiek = explode(",", $val[4]);
                    $kiek = $kiek[0];

                    $da[] = [
                        'preke' => $val[0],
                        'pavadinimas' => $val[1],
                        'kaina' => floatval(str_replace(",", ".", $val[3])),
                        'kiekis' => $kiek,
                        'suma' => floatval(str_replace(",", ".", $val[5])),
                        'sandelis' => $val[6],
                        'registras' => $val[7],
                        'savikaina' => floatval(str_replace(",", ".", $val[8])),
                        'salis' => $valstybe
                    ];
                }
                fclose($handle);
                }

                $chunks = array_chunk($da, 5000);
                foreach($chunks as $val){
                    Likutis::insert($val);
                }
            }
            //uzkeliame ESTIJOS duomenis
            if($valstybe == 3){
                DB::table('likutis')->where('salis', 3)->delete();
                //reikia EST Gamyba irasant pakeisti i GAM, o Pirkimas i PIRK
                if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
                    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                        $val = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
                        if($val[2] == "Gamyba"){
                            $reg = "GAM";
                        }
                        if($val[2] == "Pirk"){
                            $reg = "PIRK";
                        }

                        $da[] = [
                            'preke' => $val[6],
                            'pavadinimas' => $val[1],
                            'kaina' => 0,
                            'kiekis' =>$val[7],
                            'suma' => $val[8],
                            'sandelis' => $val[5],
                            'registras' => $reg,
                            'savikaina' => 0,
                            'salis' => $valstybe
                        ];
                    }
                    fclose($handle);
                }

                $chunks = array_chunk($da, 5000);
                foreach($chunks as $val){
                    Likutis::insert($val);
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
                $da = [];
                if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
                while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                    if($flag) { $flag = false; continue; }
                    $val = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
                    if(strtotime($val[2]) > strtotime(date("Y-m-d H:i:s"))){

                        $da[] = [
                            'akcija' => $val[0],
                            'galioja_nuo' => $val[1],
                            'galioja_iki' => $val[2],
                            'pavadinimas' => $val[4],
                            'preke' => $val[3],
                            'sandelis' => $val[8],
                            'kaina' => $val[5],
                            'salis' => $valstybe
                        ];
                }
            }
            fclose($handle);
            }

            $chunks = array_chunk($da, 5000);
            foreach($chunks as $val){
                Akcijos::insert($val);
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
                $da = [];
                if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
                while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                    if($flag) { $flag = false; continue; }
                    $val = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");

                    $da[] = [
                        'data' => $val[0],
                        'doc_nr' => $val[2],
                        'blanko_nr' => $val[3],
                        'sandelis_is' => $val[4],
                        'sandelis_i' => $val[5],
                        'preke' => $val[6],
                        'kiekis' => $val[7],
                        'kaina' => $val[8],
                        'grupe' => $val[9],
                        'pavadinimas' => $val[10],
                        //'registras' => $val[11],
                        'salis' => $valstybe
                    ];
                }
                fclose($handle);
                }

                $chunks = array_chunk($da, 5000);
                foreach($chunks as $val){
                    Kelione::insert($val);
                }
            }
        }

        //daromas Atsargos uzkelimas
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
                $da = [];
                if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
                while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                    if($flag) { $flag = false; continue; }
                    $val = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
                    $kiek = explode(",", $val[7]);
                    $kiek = $kiek[0];

                    $da[] = [
                        'data' => $val[0],
                        'doc_nr' => $val[2],
                        'blanko_nr' => $val[3],
                        'sandelis_is' => $val[4],
                        'sandelis_i' => $val[5],
                        'preke' => $val[6],
                        'kiekis' => $kiek,
                        'kaina' => $val[8],
                        'grupe' => $val[9],
                        'pavadinimas' => $val[10],
                        'registras' => $val[11],
                        'salis' => $valstybe
                    ];
                }
                fclose($handle);
                }

                $chunks = array_chunk($da, 5000);
                foreach($chunks as $val){
                    Atsargos::insert($val);
                }
            }
        }
        //daromas PIRKIMu uzkelimas
        if($tipas == 6){
            //Uzkelime LIETUVOS ir LATVIJOS duomenis
            if($valstybe == 1 || $valstybe == 2){
                if($valstybe == 1){
                    DB::table('pirkimais')->where('salis', 1)->delete();
                }
                if($valstybe == 2){
                    DB::table('pirkimais')->where('salis', 2)->delete();
                }
                //reikia duomenu pildyma toliau
                //su naujais irasais

                $flag = true;
                $da = [];
                if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
                while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                    if($flag) { $flag = false; continue; }
                    $val = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
                    $da[] = [
                        'data' => $val[0],
                        'doc_nr' => $val[2],
                        'blanko_nr' => $val[3],
                        'sandelis_is' => $val[4],
                        'sandelis_i' => $val[5],
                        'preke' => $val[6],
                        'kiekis' => $val[7],
                        'kaina' => $val[8],
                        'grupe' => $val[9],
                        'pavadinimas' => $val[10],
                        'registras' => $val[11],
                        'pirk_kaina' => $val[12],
                        'salis' => $valstybe
                    ];
                }
                fclose($handle);
                }

                $chunks = array_chunk($da, 3000);
                foreach($chunks as $val){
                    Pirkimai::insert($val);
                }
            }
        }

         //daromas APYVARTA uzkelimas
         if($tipas == 7){
            //Uzkelime LIETUVOS ir LATVIJOS duomenis
            if($valstybe == 1 || $valstybe == 2){
                if($valstybe == 1){
                    DB::table('intes')->where('salis', 1)->delete();
                }
                if($valstybe == 2){
                    DB::table('intes')->where('salis', 2)->delete();
                }
                $flag = true;
                $da = [];
                if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
                while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                    //praleidziam pirma eilute
                    if($flag) { $flag = false; continue; }
                    $val = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
                    $kiek = explode(",", $val[11]);
                    $kiek = $kiek[0];

                    $da[] = [
                        'preke' => $val[6],
                        'pavadinimas' => $val[7],
                        'barkodas' => $val[5],
                        'grupe' => $val[7],
                        'sandelis' => $val[0],
                        'kiekis' => $kiek,
                        'pardavimo_kaina' => floatval(str_replace(",", ".", $val[12])),
                        'pardavimo_suma' => floatval(str_replace(",", ".", $val[12])),
                        'pvm' => floatval(str_replace(",", ".", $val[13])),
                        'pvm_suma' => floatval(str_replace(",", ".", $val[14])),
                        'suma' => floatval(str_replace(",", ".", $val[15])),
                        'grupes_pavadinimas' => $val[7],
                        'registras' => $val[8],
                        'salis' => $valstybe,
                        'dok_nr' => $val[1],
                        'dok_data' => $val[2],
                        'blanko_nr' => $val[3],
                        'pirkejas' => $val[4],
                        'pirkejas2' => preg_replace('/\d/', '', $val[4] ),
                        'aprasymas' => $val[9],
                    ];
                }
                fclose($handle);
                }
                
                $chunks = array_chunk($da, 300);
                foreach($chunks as $val){
                    Inte::insert($val);
                }
            }
        }

        //daromas Banko israsas uzkelimas
        if($tipas == 8){
            //Uzkelime LIETUVOS ir LATVIJOS duomenis
            if($valstybe == 1 || $valstybe == 2){
                if($valstybe == 1){
                    DB::table('bankas')->where('salis', 1)->delete();
                }
                if($valstybe == 2){
                    DB::table('bankas')->where('salis', 2)->delete();
                }
                $flag = true;
                $da = [];
                if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
                while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                    //praleidziam pirma eilute
                    if($flag) { $flag = false; continue; }
                    $val = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");

                    if($val[12] != ""){
                        $da[] = [
                            'data' => $val[1],
                            'suma' => $val[3],
                            'c_d' => $val[5],
                            'paskirtis' => $val[12],
                            'pavadinimas' =>  $val[16],
                            'saskaita' => $val[15],
                            'salis' => $valstybe,
                        ];
                    }
                }
                fclose($handle);
                }
                
                $chunks = array_chunk($da, 300);
                foreach($chunks as $val){
                   Bankas::insert($val);
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
