<?php

namespace App\Http\Controllers;

use App\Akcijos;
use App\Likutis;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

        //reikia pasiziuret kuriose valstybese yra
        //sutraukti musu gamybos, jei tik nori 

        //Kai itraukiam akcija kodui, ir ieskom maziausia kaina, reikia ziureti ar turi konkretu sandseli, jei turi isskirti atskirai


        $group = array();

        /*$group = DB::table('akcijos')
        ->join('likutis', function ($q) use($pa) {
            $q->on('akcijos.preke', '=', 'likutis.preke')
            ->where('akcijos.preke', 'like', $pa);
        })
	    ->select('akcijos.*', 'likutis.kaina as pradine')
        ->get();*/
        $directory  = "app/CSV_DATA/";
        $failas = $directory."likutis.csv";
        
        if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                $duomenys = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
                $r[] = $duomenys[0];
                $rr[$duomenys[0]] = array();
            }
            fclose($handle);
        }

        $query_p = Akcijos::query();
        $query_p->whereIn('preke', $r);
        //$query_p->where('preke', $r[$i]);
        $re = $query_p->get();

        foreach ( $re as $value ) {
            if(strtotime($value['galioja_iki']) > strtotime(date("Y-m-d H:i:s"))){
            if (!array_key_exists($value['preke'], $group)){
                $group[$value['preke']] = $value;
            }else{
               if(floatval($value['kaina']) < floatval($group[$value['preke']]['kaina'])){
                   if($value['sandelis'] == ""){
                    $group[$value['preke']] = $value;
                   }else{
                    $group[$value['preke']."-||SAND"] = $value;  
                   }
                }
            }
        }
        }

        $group = array_merge($rr, $group);

         //Sudedam norimus likucius
         $query = Likutis::query();
         $query->whereIn('preke', $r);
         $re = $query->get();

         foreach ( $re as $value ) {
            if (array_key_exists($value['preke'], $group)){
                if (!array_key_exists('pradine', $group[$value['preke']])){
                    $group[$value['preke']]['pradine'] = $value['kaina'];
                }
                if (!array_key_exists('preke', $group[$value['preke']])){
                    $group[$value['preke']]['preke'] = $value['preke'];
                }
        }else{
            if (!array_key_exists($value['preke'], $group)){
                $group[$value['preke']]['kaina'] = 'NĖRA';
                $group[$value['preke']]['preke'] = $value['preke'];
                $group[$value['preke']]['pradine'] = $value['kaina'];
            }
            //$group[$value['preke']] = $value;
        }
        }

        ksort($group);
        $group = array_values($group);
    
        return response()->json([
            'status' => true,
            'paieska' => $keyword,
            'data' => $group,
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
