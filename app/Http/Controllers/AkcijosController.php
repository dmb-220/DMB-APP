<?php

namespace App\Http\Controllers;

use App\Akcijos;
use App\Likutis;
use Illuminate\Http\Request;

use App\File;
use App\Http\Requests\FileUploadRequest;
use Illuminate\Support\Facades\Storage;
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
        $sandelis = $key[0];
        $failas_csv = $key[1];

        //paieska, paprasta, isplestine
        /*if($key[1]){
            $pa = "%{$keyword}%";
        }else{
            $pa = "{$keyword}%";
        }*/

        $group = array();
        //nuskaitom failą su kodais, kuriems reikia akciju
        $directory  = "app/Akcijos/";
        $failas = $directory.$failas_csv;
        $flag = true;
        if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                //praleidziam pirma eilute
                if($flag) { $flag = false; continue; }
                $duomenys = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
                //sudedam duomenis i masyva
                $r[] = $duomenys[0];
                //padidinam raides, irasom prekes koda, jei kartais nebutu nei akcijose nei likutyje
                $rr[strtoupper($duomenys[0])] = array("preke" => strtoupper($duomenys[0]));
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

        //suskaiciuojam kiek is viso likuciu
        $bendras = 0;

         //Istraukiam likucius, pagal ieskoma sarasa
        $re = Likutis::query()->where('salis', 1)->where('sandelis', '!=', 'TELSIAI')->whereIn('preke', $r)->get();
         //sudedam papildomus duomenis i masyva
         foreach ( $re as $value ) {
            $value = $value->toArray();
            //Uzdedam pradine kaina
            //jei neegzistuoja pradine kaina
            if(!array_key_exists($value['preke'], $group)){
                $group[$value['preke']]['preke'] = $value['preke'];
            }else{
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
        }

            //surandam kokiuose sandeliuose yra likuciu, ir kiekis
            //reik suskirstyti pagal valstybe
            //kad galetume parodyti
            $group[$value['preke']]['sandeliai'][$value['sandelis']]['name'] = $value['sandelis'];
            $group[$value['preke']]['sandeliai'][$value['sandelis']]['likutis'] = $value['kiekis'];

            //suskaiciuojam likucius
            //reiketu suskirtyti pagal valstybes jei nera nurodytas sandelis
            if(!$sandelis){
                if (!array_key_exists('likutis', $group[$value['preke']])){
                    $group[$value['preke']]['likutis'] = $value['kiekis'];
                }else{
                    $group[$value['preke']]['likutis'] = $group[$value['preke']]['likutis'] + $value['kiekis'];
                }
                $bendras += $value['kiekis'];
            }else{
                if($value['sandelis'] == $sandelis){
                    if (!array_key_exists('likutis', $group[$value['preke']])){
                        $group[$value['preke']]['likutis'] = $value['kiekis'];
                    }else{
                        $group[$value['preke']]['likutis'] = $group[$value['preke']]['likutis'] + $value['kiekis'];
                    }
                    $bendras += $value['kiekis'];
                }
            }

            $group[$value['preke']]['sandeliai'] = array_values($group[$value['preke']]['sandeliai']);
        }
        
        ksort($group);
        $group = array_values($group);
    
        return response()->json([
            'status' => true,
            'sandelis' => $sandelis,
            'data' => $group,
            'likutis' => $bendras,
            'failas' => $failas_csv,
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

    public function store_akcija(Request $request){
        $uploadedFile = $request->file('file');

        if (!$uploadedFile->isValid()) {
            abort( 422 );}

        $storePath = $uploadedFile->storeAs('Akcijos', $uploadedFile->getClientOriginalName());
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $sandelis = $data['sandelis'];
        $fail = $data['failas'];

        $failas = "akcijos.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $eilute = strtoupper($sandelis)."||".$fail;

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
