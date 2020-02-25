<?php

namespace App\Http\Controllers;

use App\Akcijos;
use App\Likutis;
use Illuminate\Http\Request;
//use Illuminate\Support\Facades\DB;

class AkcijosController extends Controller
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

        $failas = "akcijos.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $myfile = fopen(storage_path($failas), "r");
        $key = fread($myfile,filesize(storage_path($failas)));
        fclose($myfile);

        $key = explode("||", $key);
        $keyword = $key[0];

        //paieska, paprasta, isplestine
        if($key[1]){
            $pa = "%{$keyword}%";
        }else{
            $pa = "{$keyword}%";
        }

        $group = array();
        //nuskaitom failą su kodais, kuriems reikia akciju
        $directory  = "app/Akcijos/";
        $failas = $directory."likutis.csv";
        $flag = true;
        if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                //praleidziam pirma eilute
                if($flag) { $flag = false; continue; }
                $duomenys = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
                //sudedam duomenis i masyva
                $r[] = $duomenys[0];
                $rr[$duomenys[0]] = array();
            }
            fclose($handle);
        }

        //pagal turima sarasa, ustraukiam AKCIJAS
        $re = Akcijos::query()->whereIn('preke', $r)->get();

        //susigropuojam akcijas pagal prekes koda
        //susirandam maziausia akcijine kaina
        //
        foreach ( $re as $value ) {
            $value = $value->toArray();
            if(strtotime($value['galioja_iki']) > strtotime(date("Y-m-d H:i:s"))){
                $group[$value['preke']]['preke'] = $value['preke'];
                //$group[$value['preke']]['pavadinimas'] = $value['pavadinimas'];
                if($value['salis'] == 1){
                    if (array_key_exists('LT', $group[$value['preke']])){
                        //reik sita sutvarkyti
                        if($value['sandelis'] == ""){
                            if(floatval($value['kaina']) < floatval($group[$value['preke']]['LT']['kaina'])){
                                $group[$value['preke']]['LT'] = $value;
                            }
                            }else{
                                //sudedam informacija, jei preke nurodyta i konkretu sandeli
                                $group[$value['preke']]['sandelis'][$value['sandelis']]['pavadinimas']= $value['sandelis']; 
                                $group[$value['preke']]['sandelis'][$value['sandelis']]['kaina']= $value['kaina'];  
                        }
                    }else{
                        if($value['sandelis'] == ""){
                            $group[$value['preke']]['LT'] = $value;
                           }else{
                               //sudedam informacija, jei preke nurodyta i konkretu sandeli
                               $group[$value['preke']]['sandelis'][$value['sandelis']]['pavadinimas']= $value['sandelis']; 
                               $group[$value['preke']]['sandelis'][$value['sandelis']]['kaina']= $value['kaina'];  
                        }
                        //cia susideda ir akcijos kurios yra konkreciam sandeliui
                        //$group[$value['preke']]['LT'] = $value;
                    }
                }
                if($value['salis'] == 2){
                    if (array_key_exists('LV', $group[$value['preke']])){
                        if($value['sandelis'] == ""){
                            if(floatval($value['kaina']) < floatval($group[$value['preke']]['LV']['kaina'])){
                                $group[$value['preke']]['LV'] = $value;
                            }
                            }else{
                                //sudedam informacija, jei preke nurodyta i konkretu sandeli
                                $group[$value['preke']]['sandelis'][$value['sandelis']]['pavadinimas']= $value['sandelis']; 
                                $group[$value['preke']]['sandelis'][$value['sandelis']]['kaina']= $value['kaina'];   
                        }
                    }else{
                        if($value['sandelis'] == ""){
                            $group[$value['preke']]['LV'] = $value;
                           }else{
                               //sudedam informacija, jei preke nurodyta i konkretu sandeli
                               $group[$value['preke']]['sandelis'][$value['sandelis']]['pavadinimas']= $value['sandelis']; 
                               $group[$value['preke']]['sandelis'][$value['sandelis']]['kaina']= $value['kaina'];   
                        }
                        //$group[$value['preke']]['LV'] = $value;
                    }
                }
            }
            if (array_key_exists('sandelis', $group[$value['preke']])){
                $group[$value['preke']]['sandelis'] = array_values($group[$value['preke']]['sandelis']);
            }
        }
        //sujungiam sarasa su akciju sarasu
        //kad pamatytume kurie is saraso neturi akciju
        $group = array_merge($rr, $group);

         //Istraukiam likucius, pagal ieskoma sarasa
         $re = Likutis::query()->whereIn('preke', $r)->get();
         //sudedam papildomus duomenis i masyva
         foreach ( $re as $value ) {
            $value = $value->toArray();
            //Uzdedam pradine kaina
            if (!array_key_exists('pradine', $group[$value['preke']])){
                $group[$value['preke']]['pradine'] = $value['kaina'];
            }else{
                //jei kaina uzkelta is EST 0, tada jei dar randam be NULIO irasom
                if($group[$value['preke']]['pradine'] == 0){
                    $group[$value['preke']]['pradine'] = $value['kaina'];
                }
            }
            //uzdedam prekiu pavadinimus, kuriems nera akciju
            if (!array_key_exists('preke', $group[$value['preke']])){
                $group[$value['preke']]['preke'] = $value['preke'];
            }

            //surandam kokiuose sandeliuose yra likuciu, ir kiekis
            //reik suskirstyti pagal valstybe
            //kad galetume parodyti
            $group[$value['preke']]['sandeliai'][$value['sandelis']]['name'] = $value['sandelis'];
            $group[$value['preke']]['sandeliai'][$value['sandelis']]['likutis'] = $value['kiekis'];

            //suskaiciuojam likucius
            if (!array_key_exists('likutis', $group[$value['preke']])){
                $group[$value['preke']]['likutis'] = $value['kiekis'];
            }else{
                $group[$value['preke']]['likutis'] = $group[$value['preke']]['likutis'] + $value['kiekis'];
            }

            $group[$value['preke']]['sandeliai'] = array_values($group[$value['preke']]['sandeliai']);
        }
        
        ksort($group);
        $group = array_values($group);
    
        return response()->json([
            'status' => true,
            'paieska' => $keyword,
            'data' => $group,
            //'likutis' => $re,
            'paieska_big' => $key[1],
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
    public function store(Request $request)
    {
        $data = $request->all();
        $ieskoti = $data['ieskoti'];
        $paieska_big= $data['paieska_big'];

        $failas = "akcijos.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $eilute = strtoupper($ieskoti)."||".$paieska_big;

        $myfile = fopen(storage_path($failas), "w");
        fwrite($myfile, $eilute);
        fclose($myfile);

        return response()->json([
            'status' => true,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Akcijos  $akcijos
     * @return \Illuminate\Http\Response
     */
    public function show(Akcijos $akcijos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Akcijos  $akcijos
     * @return \Illuminate\Http\Response
     */
    public function edit(Akcijos $akcijos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Akcijos  $akcijos
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Akcijos $akcijos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Akcijos  $akcijos
     * @return \Illuminate\Http\Response
     */
    public function destroy(Akcijos $akcijos)
    {
        //
    }
}
