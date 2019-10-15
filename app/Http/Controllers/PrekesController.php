<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Pardavimai;
use App\Likutis;

class PrekesController extends Controller
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

        // 0 - sugrupuoja
        // 1- standartiskai
        //$rikiuoti = 0;
        $failas = "prekes.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $myfile = fopen(storage_path($failas), "r");
        $key = fread($myfile,filesize(storage_path($failas)));
        fclose($myfile);

        $key = explode("||", $key);
        $keyword = $key[0];

        $rikiuoti = $key[4];
        //Sudedam norimus likucius
        $re = Likutis::query()
        ->where('preke', 'like', "{$keyword}%")->get();

        foreach ( $re as $value ) {
            if($value['sandelis'] != "BROK" && $value['sandelis'] != "ESTI" 
            && $value['sandelis'] != "TELSIAI" && $value['sandelis'] != "4444" && $value['sandelis'] != "1111"){
                if($rikiuoti){
                    $group2[$value['preke']][] = $value;
                }else{
                    $a = explode("-", $value['preke']);
                    $ne = $a[0]."-".$a[1]."-";
                    $group2[$ne][] = $value;
                }
            }
        }

        //$i=0;
        $lt_viso = 0;
        $lv_viso = 0;
        $ee_viso = 0;
        foreach ( $group2 as $idx => $value ) {
            //$group[$idx]['preke'] = $idx;
            $sarasas[] = $idx;
            $group[$idx]['pavadinimas'] = $value[0]['pavadinimas'];
            foreach($value as $val){
                if($val['salis'] == 1){
                    $group[$idx]['LT'][] = $val;
                    $lt_viso = $lt_viso + $val['kiekis'];
                    $group[$idx]['LT_viso'] = $lt_viso;
                }
                if($val['salis'] == 2){
                    $group[$idx]['LV'][] = $val;
                    $lv_viso = $lv_viso + $val['kiekis'];
                    $group[$idx]['LV_viso'] = $lv_viso;
                }
                if($val['salis'] == 3){
                    $group[$idx]['EE'][] = $val;
                    $ee_viso = $ee_viso + $val['kiekis'];
                    $group[$idx]['EE_viso'] = $ee_viso;
                }
            }

            $group[$idx]['viso'] = $ee_viso + $lv_viso + $lt_viso;
            $lt_viso = 0;
            $lv_viso = 0;
            $ee_viso = 0;
            //$i++;
        }

        //Sudedam norimus pardavimus 
        $res = Pardavimai::query()
        ->where('preke', 'like', "{$keyword}%")->get();

        foreach ( $res as $value ) {
            if($value['sandelis'] != "TELSIAI"){
                if($rikiuoti){
                    $pard[$value['preke']][] = $value;
                }else{
                    $a = explode("-", $value['preke']);
                    $ne = $a[0]."-".$a[1]."-";
                    $pard[$ne][] = $value;
                }
            }
        }

        //$i=0;
        $lt_viso = 0;
        $lv_viso = 0;
        $ee_viso = 0;
        foreach ( $pard as $idx => $value ) {
            //$pardavimai[$idx]['preke'] = $idx;
            if(!in_array($idx, $sarasas)) {
                $sarasas[] = $idx;
            }
            $pardavimai[$idx]['pavadinimas'] = $value[0]['pavadinimas'];
            foreach($value as $val){
                if($val['salis'] == 1){
                    $pardavimai[$idx]['LT'][] = $val;
                    $lt_viso = $lt_viso + $val['kiekis'];
                    $pardavimai[$idx]['LT_viso'] = $lt_viso;
                }
                if($val['salis'] == 2){
                    $pardavimai[$idx]['LV'][] = $val;
                    $lv_viso = $lv_viso + $val['kiekis'];
                    $pardavimai[$idx]['LV_viso'] = $lv_viso;
                }
                if($val['salis'] == 3){
                    $pardavimai[$idx]['EE'][] = $val;
                    $ee_viso = $ee_viso + $val['kiekis'];
                    $pardavimai[$idx]['EE_viso'] = $ee_viso;
                }
            }

            $pardavimai[$idx]['viso'] = $ee_viso + $lv_viso + $lt_viso;
            $lt_viso = 0;
            $lv_viso = 0;
            $ee_viso = 0;
            //$i++;
        }

        //padaryti slepti liemeneles,
        //arba liemenes
        //reik ideti myktuka ka turi rodyti
        $i=0;
        foreach($sarasas as $valu){
            $new[$i]['preke'] = $valu;
            $new[$i]['pavadinimas'] = '';
            if (array_key_exists($valu, $group)) {
                $new[$i]['likutis'] = $group[$valu];
                $new[$i]['pavadinimas'] = $group[$valu]['pavadinimas'];
            }else{$new[$i]['likutis'] = array();}
            if (array_key_exists($valu, $pardavimai)) {
                $new[$i]['pardavimai'] = $pardavimai[$valu];
                if($new[$i]['pavadinimas'] == ""){
                    $new[$i]['pavadinimas'] = $pardavimai[$valu]['pavadinimas'];
                }
            }else{$new[$i]['pardavimai'] = array();}
            $i++;
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
            'sarasas' => $new,
            'rikiuoti' => $rikiuoti
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
        $rikiuoti = $data['rikiuoti'];

        $failas = "prekes.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $eilute = strtoupper($ieskoti)."||".$lt."||".$lv."||".$ee."||".$rikiuoti;

        $myfile = fopen(storage_path($failas), "w");
        fwrite($myfile, $eilute);
        fclose($myfile);

        return response()->json([
            'status' => true,
            'data' => $ieskoti,
            'rikiuoti' => $rikiuoti
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
