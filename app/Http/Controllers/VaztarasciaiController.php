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
            "TELS" => "Telšiai, Plungės g.4", 
            "MAXI" => "Kaunas, Pramonės pr.29",
            "NORF" => "Kaunas, Šiaurės pr.44",
            "KREV" => "Kaunas, Krėvės pr.57",
            "MOLA" => "Kaunas, K. Baršausko 66a",
            "TAUB" => "Kaunas, Jotvingių g. 15",
            "SAUL" => "Šiauliai, Tilžės g.109",
            "AREN" => "Šiauliai, Gegužių g.30",
            "MAZE" => "Mažeikiai, Daukšos g.26",
            "MANT" => "Klaipėda, H.Manto g.31",  
            "TAIK" => "Klaipėda, Taikos pr.64",
            "BIGA" => "Klaipėda, Taikos pr.139",
            "MARI" => "Marijampolė, Vytauto g.48A-3",     
            "KEDA" => "Kėdainiai, Tilto g.2",            
            "VISA" => "Visaginas,  Veteranų g.2", 
            "UTEN" => "Utena, J.Basanavičiaus g.60",             
            "MADA" => "Vilnius, Viršuliškių g.40",
            "MINS" => "Vilnius, Liepkalnio g.112",
            "UKME" => "Vilnius, Ukmergės 369",
            "BABI" => "Panevėžys, Klaipėdos g.143A",
            "PANE" => "Panevėžys, Ukmergės g. 23",
            "INTE" => "Telšiai, Kęstučio 20-1",
            "TELSIAI" => "Telšiai, Kęstučio 20-1",
            "BROK" => "Telšiai, Kęstučio 20-1",
            "SAND" => "Telšiai, Kęstučio 20-1",
            "99EE" => "Telšiai, Kęstučio 20-1",
            "99LV" => "Telšiai, Kęstučio 20-1",
            "ESTI" => "Telšiai, Kęstučio 20-1",
            "3333" => "Telšiai, Kęstučio 20-1"
        );

        $atsargos = array();
        $ats = array();
        $qu = Atsargos::query();
        $qu->where('salis', '=', '1');
        $qu->whereMonth('data', '=', '02');
        $atsargos = $qu->get();
        //reik leisti paimti duomenis tiks tiems sandeliams i kuriuos isveza.
        //reiks masyva isikelti is statistikos
        foreach ( $atsargos as $value ) {
            //if($value['sandelis_i'] != "ESTI"){
                $ats[$value['blanko_nr']]['list'][] = $value;
                $ats[$value['blanko_nr']]['numeris'] = $value['blanko_nr'];
                $ats[$value['blanko_nr']]['data'] = $value['data'];
                $ats[$value['blanko_nr']]["sandelis_is"] = $value['sandelis_is'];
                $ats[$value['blanko_nr']]["sandelis_i"] = $value['sandelis_i'];
                $ats[$value['blanko_nr']]["adresas"] = $parduotuves[$value['sandelis_i']];
            //}
        }
        sort($ats);
        $ats = array_values($ats);

        return response()->json([
            'status' => true,
            'sarasas' => $ats
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
    
        $failas = "vaztarastis.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $eilute = strtoupper($ieskoti);

        $myfile = fopen(storage_path($failas), "w");
        fwrite($myfile, $eilute);
        fclose($myfile);

        return response()->json([
            'status' => true,
            'data' => $ieskoti,
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
