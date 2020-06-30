<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Vaztarasciai;
use App\Atsargos;

class VaztarasciaiController extends Controller
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

        $parduotuves = array(
            //LIETUVA
            "TELS" => "Telšiai, Plungės g. 4", 
            "MAXI" => "Kaunas, Pramonės pr. 29",
            "NORF" => "Kaunas, Šiaurės pr. 44",
            "KREV" => "Kaunas, Krėvės pr. 57",
            "MOLA" => "Kaunas, K. Baršausko 66a",
            "TAUB" => "Kaunas, Jotvingių g. 15",
            "SAUL" => "Šiauliai, Tilžės g. 109",
            "AREN" => "Šiauliai, Gegužių g. 30",
            "MAZE" => "Mažeikiai, Daukšos g. 26",
            "MANT" => "Klaipėda, H.Manto g. 31",  
            "TAIK" => "Klaipėda, Taikos pr. 64",
            "BIGA" => "Klaipėda, Taikos pr. 139",
            "MARI" => "Marijampolė, Vytauto g. 48A-3",     
            "KEDA" => "Kėdainiai, Tilto g. 2",            
            "VISA" => "Visaginas,  Veteranų g. 2", 
            "UTEN" => "Utena, J.Basanavičiaus g. 60",             
            "MADA" => "Vilnius, Viršuliškių g. 40",
            "MINS" => "Vilnius, Liepkalnio g. 112",
            "UKME" => "Vilnius, Ukmergės 369",
            "BABI" => "Panevėžys, Klaipėdos g. 143A",
            "PANE" => "Panevėžys, Ukmergės g. 23",
            "TELSIAI" => "Telšiai, Kęstučio 20-1",
            "BROK" => "Telšiai, Kęstučio 20-1",
            "SAND" => "Telšiai, Kęstučio 20-1",
            "99EE" => "Telšiai, Kęstučio 20-1",
            "99LV" => "Telšiai, Kęstučio 20-1",
            "99LT" => "Telšiai, Kęstučio 20-1",
            "PIGU" => "Telšiai, Kęstučio 20-1",
            "GALA" => "Telšiai, Kęstučio 20-1",
            "ESTI" => "Telšiai, Kęstučio 20-1",
            "3333" => "Telšiai, Kęstučio 20-1",
			"ZILT" => "Telšiai, Kęstučio 20-1",
            //LATVIJA
            "LIEP" => "LIEPĀJA, Rakstvežu iela 8",
            "VENT" => "VENTSPILIS, Lauku iela 4-1",
            "KULD" => "KULDĪGA, Smilšu iela 24", 
            "SALD" => "SALDUS,  Striķu iela 12",
            "TAL2" => "Rīgas iela 8, Talsi", 
            "TUKU" => "TUKUMS,  Kurzemes iela 36",
            "DOBE" => "DOBELE,  Tirgus laukums iela 5",
            "SIGU" => "SIGULDA, KR. Valdemāra iela 1",
            "ALUK" => "ALUKSNE,  Pils iela 9B",
            "VALM" => "VALMIERA, Rīgas iela 28",
            "CESI" => "CĒSIS, Pļavas iela 5", 
            "BALV" => "BALVI, Brīvības iela 57",
            "LIMB" => "LIMBAŽI, Torŋu iela 1",
            "MADO" => "Madona, Saules iela 23B", 
            "VALD" => "Jelgava, Rīgas iela 11A",
            "MELN" => "RīGA, Melnsila iela 10",
            "MATI" => "RīGA, Matīsa iela 25",
            "DOLE" => "RīGA, Maskavas iela 357",
            "BRIV" => "RīGA, Brīvības iela 49/53", 
            "GOBA" => "RīGA, Gobas iela 10A",
            "DAUG" => "DAUGAVPILS , Viestura iela 80",
            "DITO" => "DAUGAVPILS , Cietokšņa iela 60", 
            "JEKA" => "JĒKABPILS , Viestura iela 5",
            "AIZK" => "AIZKRAUKLE, Druvas iela 2, T/C Beta",
            "OGRE" => "OGRE, Rīgas iela 23",
            //lietuva ir latvija reikia skirtingu adresu
            "INTE" => array("Telšiai, Kęstučio 20-1","RīGA, Matīsa iela 25"),
            "5555" => "RīGA, Matīsa iela 25",
            "4444" => "",
            "NOLI" => ""
            //eSTIIJA
        );

        $sandeliai = array(
            "LT" => array('TELSIAI', 'BROK', 'SAND', '99EE', '99LV', 'ESTI', '3333', 'ZILT'),
            "LV" => array(),
            'EE' => array()
        );

        $failas = "vaztarasciai.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $myfile = fopen(storage_path($failas), "r");
        $key = fread($myfile,filesize(storage_path($failas)));
        fclose($myfile);

        $key = explode("||", $key);
        $metai = $key[0];
        $menesis = $key[1];
        $papildomai = $key[2];
        $valstybe = $key[3];

        if($valstybe == 1){
            $v = "LT";
        }else if($valstybe == 2){
            $v = "LV";
        }else{
            $v = "EE";
        }

        $atsargos = array();
        $ats = array();
        $qu = Atsargos::query();
        $qu->where('salis', '=', $valstybe);
        //rodom tik musu israsytus
        if($valstybe == 2){
            $qu->where('sandelis_is', '=', "5555");
        }
		if($valstybe == 1){
            $qu->where('sandelis_is', '!=', "7777");
        }
        $qu->whereMonth('data', '=', $menesis);
        $atsargos = $qu->get();
        //reik leisti paimti duomenis tiks tiems sandeliams i kuriuos isveza.
        //reiks masyva isikelti is statistikos
        foreach ( $atsargos as $value ) {
            //ismetam sandelius, kai perkelimai buna viduje 
            if(!in_array($value['sandelis_is'], $sandeliai[$v]) || !in_array($value['sandelis_i'], $sandeliai[$v])){
                $ats[$value['blanko_nr']]['list'][] = $value;
                $ats[$value['blanko_nr']]['numeris'] = $value['blanko_nr'];
                $ats[$value['blanko_nr']]['data'] = $value['data'];
                $ats[$value['blanko_nr']]["sandelis_is"] = $value['sandelis_is'];
                $ats[$value['blanko_nr']]["sandelis_i"] = $value['sandelis_i'];
                if($value['sandelis_i'] == 'INTE'){
                    $ats[$value['blanko_nr']]["adresas"] = $parduotuves[$value['sandelis_i']][$valstybe-1];
                }else{
                    $ats[$value['blanko_nr']]["adresas"] = $parduotuves[$value['sandelis_i']];
                }
            }
        }
        if($papildomai > 0){
            for($i =0; $i< $papildomai; $i++){
                $ats['xxx'.$i]['list'][] = array();
                $ats['xxx'.$i]['numeris'] = "";
                $ats['xxx'.$i]['data'] = '';
                $ats['xxx'.$i]["sandelis_is"] = "";
                $ats['xxx'.$i]["sandelis_i"] = "";
                $ats['xxx'.$i]["adresas"] = "";
            }
        }
        //sort($ats);
        $ats = array_values($ats);

        return response()->json([
            'status' => true,
            'sarasas' => $ats,
            'menesis' => $menesis,
            'metai' => $metai,
            'papildomai' => $papildomai,
            'valstybe' => $valstybe
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
        $metai = $data['metai'];
        $menesis = $data['menesis'];
        $papildomai = $data['papildomai'];
        $valstybe = $data['valstybe'];
    
        $failas = "vaztarasciai.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $eilute = $metai."||".$menesis."||".$papildomai."||".$valstybe;

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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
