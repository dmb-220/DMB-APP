<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Pardavimai;
use App\Likutis;
use App\Atsargos;
use App\Pirkimai;

class TestasController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $LT = array("MINS", "TELS", "MADA", "MARI", "MOLA", "NORF", "BIGA", "BABI", "UKME", "MANT", "VISA", "KEDA","AREN", "MAXI", "PANE", "KREV", "MAZE", "TAIK", "SAUL", "TAUB");
        $LV = array("DOLE", "KULD", "BRIV", "DITO", "MATI", /*"OGRE",*/ "TAL2", "TUKU", "VALD", "VENT", "AIZK", "DAUG", "LIMB", "MELN", "SALD", "VALM",  "ALUK", "BALV", "CESI", "DOBE", "GOBA", "JEKA", "LIEP", "SIGU", "MADO");
        $EE = array("Johvi", "Mustamäe", "Narva", "Rakvere", "Sopruse", "Võru 55 Tartu", "Ümera","Eden", "Haapsalu", "Kopli", "Parnu", "Riia Parnu");
    
        $likutis = Likutis::where('salis', '1')->select('pavadinimas','kiekis')->get();
        $pardavimai = Pardavimai::where('salis', '1')->select('pavadinimas','kiekis', 'registras')->get();
        //$likutis["LV"] = Likutis::where('salis', '2')->get()->groupBy('pavadinimas');
        /*$query_p->when(!$gam, function ($q) {
            return $q->where('registras', "GAM");
        });*/
        //$likutis = collect($likutis);
        //$grouped = $likutis->groupBy('pavadinimas');
        //$grouped->toArray();
        $grouped = array();
        foreach($likutis as $val){
            if(array_key_exists($val['pavadinimas'], $grouped)){
            $grouped[$val['pavadinimas']]['likutis'] += $val['kiekis']; 
            }else{
                $grouped[$val['pavadinimas']]['likutis'] = $val['kiekis']; 
                $grouped[$val['pavadinimas']]['pavadinimas'] = $val['pavadinimas']; 
            }
        }
        foreach($pardavimai as $val){
            if($val['registras'] != "PERS" && $val['kiekis'] > 0 && $val['pavadinimas'] != "Siuntimo išlaidos"){
            if(array_key_exists('pardavimas', $grouped[$val['pavadinimas']])){
            $grouped[$val['pavadinimas']]['pardavimas'] += $val['kiekis']; 
            }else{
                $grouped[$val['pavadinimas']]['pardavimas'] = $val['kiekis']; 
            }
        }
    }

    $grouped = array_values($grouped);

        return response()->json([
            'data' => array(
                'pardavimai' => "2020-04-18 --- 2020-05-18", 
                'likutis' => "2020-05-18"
            ),
            'likutis' => $grouped,
            //'pardavimai' => $grouped2,
        ]);
    }

    public function idx(){
        function tofloat($num) {
            $dotPos = strrpos($num, '.');
            $commaPos = strrpos($num, ',');
            $sep = (($dotPos > $commaPos) && $dotPos) ? $dotPos : 
                ((($commaPos > $dotPos) && $commaPos) ? $commaPos : false);
           
            if (!$sep) {
                return floatval(preg_replace("/[^0-9]/", "", $num));
            } 
        
            return floatval(
                preg_replace("/[^0-9]/", "", substr($num, 0, $sep)) . '.' .
                preg_replace("/[^0-9]/", "", substr($num, $sep+1, strlen($num)))
            );
        }

        //$da = array();

        $data = Atsargos::whereIn('blanko_nr', ['AIZK0138', 'ALUK0164', 'CESI0114', 'DAUG0087', 'LIMB0136', 'MADO0170', 'SIGU0131', 'VALM0131'])->get();
        foreach($data as $val){
            $val = $val->toArray();
            $list[$val['preke']] = $val['preke'];

            $da[$val['preke']]['preke'] = $val['preke'];
            $da[$val['preke']]['kaina'] = $val['kaina'];
            $kai = round(tofloat($val['kaina'])*0.5, 4);
            $kai = number_format($kai, 4);
            $da[$val['preke']]['kaina2'] = $kai;
            $da[$val['preke']]['kiek'][] = $val['kiekis'];
            $k = explode(',', $val['kiekis']);
            if(array_key_exists('kiekis', $da[$val['preke']])){
                $da[$val['preke']]['kiekis'] += $k[0];
            }else{
                $da[$val['preke']]['kiekis'] = $k[0];
            }
        }
        
        $list = array_values($list);
        $pirk = Pirkimai::whereIn('preke', $list)->get();
        foreach($pirk as $va){
            $pi[$va['preke']][] = $va;
            $da[$va['preke']]['pirk_kaina'] = $va['pirk_kaina'];
            $da[$va['preke']]['pardavimas'] = $va['data'];
        }

        $da = array_values($da);

        return response()->json([
            'd' => $da,
            'pirk' => $pi
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
        //
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
