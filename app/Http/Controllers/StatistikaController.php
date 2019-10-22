<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pardavimai;
use App\Likutis;

class StatistikaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //pasidaryt kintamuosius is VUE kad pateiktu tik nurodyta valstybe
        //$keyword = 'DMK-';

         //$store = array(
            $LT = array("MINS", "TELS", "MADA", "MARI", "UKME", "MOLA", "NORF", "BIGA", "BABI", "UTEN", "MANT", "VISA", "KEDA","AREN", "MAXI", "PANE", "KREV", "MAZE", "TAIK", "SAUL", "TAUB");
            $LV = array("KULD", "BRIV", "DITO", "MATI", "OGRE", "TAL2", "TUKU", "VALD", "VENT", "AIZK", "DAUG", "LIMB", "MELN","PRUS", "SALD", "VALM",  "ALUK", "BALV", "CESI", "DOBE", "GOBA", "JEKA", "LIEP", "SIGU", "MADO");
            $EE = array("Johvi", "Mustamäe", "Narva", "Rakvere", "Sopruse", "Võru 55 Tartu", "Ümera","Eden", "Haapsalu", "Kohtla Järve", "Kopli", "Parnu", "Riia Parnu");
        //);


        $failas = "paieska.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $myfile = fopen(storage_path($failas), "r");
        $key = fread($myfile,filesize(storage_path($failas)));
        fclose($myfile);

        $key = explode("||", $key);
        $keyword = $key[0];

        //nuo pasirinkimo priklauso ka rodyti.
        if($key[1] && $key[2] && $key[3]){$store = array_merge($LT, $LV, $EE);}
        if(!$key[1] && $key[2] && $key[3]){$store = array_merge($LV, $EE);}
        if(!$key[1] && !$key[2] && $key[3]){$store = $EE;}
        if($key[1] && !$key[2] && !$key[3]){$store = $LT;}
        if(!$key[1] && $key[2] && !$key[3]){$store = $LV;}
        if($key[1] && !$key[2] && $key[3]){$store = array_merge($LT, $EE);}
        if($key[1] && $key[2] && !$key[3]){$store = array_merge($LT, $LV);}

        //Sudedam norimus likucius
        $re = Likutis::query()
        ->where('preke', 'like', "{$keyword}%")->get();

        foreach ( $re as $value ) {
            if($value['sandelis'] != "BROK" && $value['sandelis'] != "ESTI" 
            && $value['sandelis'] != "TELSIAI" && $value['sandelis'] != "4444" && $value['sandelis'] != "1111"){
                $group2[$value['sandelis']][] = $value;
            }
        }

        $lt_viso = 0;
        $lv_viso = 0;
        $ee_viso = 0;

        foreach ( $group2 as $idx => $value ) {


            foreach($value as $val){
                if($key[1] && $val['salis'] == 1){
                    $group[$idx][] = $val;
                    $lt_viso = $lt_viso + $val['kiekis'];
                    $gr[$idx]['likutis'] = $lt_viso;

                    $list[$idx][$val['preke']]['likutis'] = array('preke' => $val['preke'], 'kiekis' => $val['kiekis']);
                    $list[$idx][$val['preke']]['preke'] = $val['preke'];
                }
                if($key[2] && $val['salis'] == 2){
                    $group[$idx][] = $val;
                    $lv_viso = $lv_viso + $val['kiekis'];
                    $gr[$idx]['likutis'] = $lv_viso;

                    $list[$idx][$val['preke']]['likutis'] = array('preke' => $val['preke'], 'kiekis' => $val['kiekis']);
                    $list[$idx][$val['preke']]['preke'] = $val['preke'];
                }
                if($key[3] && $val['salis'] == 3){
                    $group[$idx][] = $val;
                    $ee_viso = $ee_viso + $val['kiekis'];
                    $gr[$idx]['likutis'] = $ee_viso;

                    $list[$idx][$val['preke']]['likutis'] = array('preke' => $val['preke'], 'kiekis' => $val['kiekis']);
                    $list[$idx][$val['preke']]['preke'] = $val['preke'];
                }
            }

            $lt_viso = 0;
            $lv_viso = 0;
            $ee_viso = 0;
        }

        //Sudedam norimus pardavimus 
        $res = Pardavimai::query()
        ->where('preke', 'like', "{$keyword}%")->get();

        foreach ( $res as $value ) {
            if($value['sandelis'] != "TELSIAI"){
                $pard[$value['sandelis']][] = $value;
            }
        }

        $lt_viso = 0;
        $lv_viso = 0;
        $ee_viso = 0;
        foreach ( $pard as $idx => $value ) {

            foreach($value as $val){
                if($key[1] && $val['salis'] == 1){
                    $pardavimai[$idx][] = $val;
                    $lt_viso = $lt_viso + $val['kiekis'];
                    $par[$idx]['pardavimai'] = $lt_viso;

                    $list[$idx][$val['preke']]['pardavimai'] = array('preke' => $val['preke'], 'kiekis' => $val['kiekis']);
                    $list[$idx][$val['preke']]['preke'] = $val['preke'];
                }
                }
                if($key[2] && $val['salis'] == 2){
                    $pardavimai[$idx][] = $val;
                    $lv_viso = $lv_viso + $val['kiekis'];
                    $par[$idx]['pardavimai'] = $lv_viso;

                    $list[$idx][$val['preke']]['pardavimai'] = array('preke' => $val['preke'], 'kiekis' => $val['kiekis']);
                    $list[$idx][$val['preke']]['preke'] = $val['preke'];
                }
                if($key[3] && $val['salis'] == 3){
                    $pardavimai[$idx][] = $val;
                    $ee_viso = $ee_viso + $val['kiekis'];
                    $par[$idx]['pardavimai'] = $ee_viso;

                    $list[$idx][$val['preke']]['pardavimai'] = array('preke' => $val['preke'], 'kiekis' => $val['kiekis']);
                    $list[$idx][$val['preke']]['preke'] = $val['preke'];
            }

            $list[$idx] = array_values($list[$idx]);

            $lt_viso = 0;
            $lv_viso = 0;
            $ee_viso = 0;
        }


        $i=0;
        foreach($store as $valu){
            $new[$i]['sandelis'] = $valu;
            $new[$i]['salis'] = '';
            $liko = 0;
            $parda = 0;
            if (array_key_exists($valu, $group)) {
                $new[$i]['likutis'] = $group[$valu];
                $new[$i]['likutis_sk'] = $gr[$valu]['likutis'];
                $liko = $gr[$valu]['likutis'];
                $new[$i]['salis'] = $group[$valu][0]['salis'];
            }else{$new[$i]['likutis'] = array();}

            if (array_key_exists($valu, $pardavimai)) {
                $new[$i]['pardavimai'] = $pardavimai[$valu];
                $new[$i]['pardavimai_sk'] = $par[$valu]['pardavimai'];
                $parda = $par[$valu]['pardavimai'];
                if($new[$i]['salis'] == ""){
                    $new[$i]['salis'] = $pardavimai[$valu][0]['salis'];
                }
            }else{$new[$i]['pardavimai'] = array();}

            $new[$i]['viso'] = $liko - (2 * $parda);

            if (array_key_exists($valu, $list)) {
                $new[$i]['list'] = $list[$valu];
            }
            $i++;
        }

        $viso_pard = 0;
        $viso_lik = 0;

        foreach($new as $val){
            if(array_key_exists('pardavimai_sk', $val)){
                $viso_pard = $viso_pard + $val['pardavimai_sk'];
            }
            if(array_key_exists('likutis_sk', $val)){
                $viso_lik =  $viso_lik + $val['likutis_sk'];
            }
        }

        $arr = array("LT" => $key[1], "LV" => $key[2], "EE" => $key[3]);
        /*$store = array(
            "LT" => array("MINS", "TELS", "MADA", "MARI", "UKME", "MOLA", "NORF", "BIGA", "BABI", "UTEN", "MANT", "VISA", "KEDA",
                "AREN", "MAXI", "PANE", "KREV", "MAZE", "TAIK", "SAUL", "TAUB"),
            "LV" => array("KULD", "BRIV", "DITO", "MATI", "OGRE", "TAL2", "TUKU", "VALD", "VENT", "AIZK", "DAUG", "LIMB", "MELN",
            "PRUS", "SALD", "VALM",  "ALUK", "BALV", "CESI", "DOBE", "GOBA", "JEKA", "LIEP", "SIGU", "MADO"),
            "EE" => array("Johvi", "Mustamäe", "Narva", "Rakvere", "Sopruse", "Võru 55 Tartu", "Ümera",
            "Eden", "Haapsalu", "Kohtla Järve", "Kopli", "Parnu", "Riia Parnu"),
        );*/
        return response()->json([
            'status' => true,
            'paieska' => $keyword,
            'salis' =>  $arr,
            'viso_pard' => $viso_pard,
            'viso_lik' => $viso_lik,
            'data' => $new,
            //'parduotuves' => $sarasas
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
        $lt = $data['lt'];
        $lv = $data['lv'];
        $ee = $data['ee'];

        $failas = "paieska.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $eilute = strtoupper($ieskoti)."||".$lt."||".$lv."||".$ee;

        $myfile = fopen(storage_path($failas), "w");
        fwrite($myfile, $eilute);
        fclose($myfile);

        return response()->json([
            'status' => true,
            'data' => $ieskoti
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
