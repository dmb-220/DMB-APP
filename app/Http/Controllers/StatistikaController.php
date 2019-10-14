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
        $failas = "paieska.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $myfile = fopen(storage_path($failas), "r");
        $key = fread($myfile,filesize(storage_path($failas)));
        fclose($myfile);

        $key = explode("||", $key);
        $keyword = $key[0];

        //Sudedam norimus likucius
        $re = Likutis::query()
        ->where('preke', 'like', "{$keyword}%")->get();

        foreach ( $re as $value ) {
            if($value['sandelis'] != "BROK" && $value['sandelis'] != "ESTI" 
            && $value['sandelis'] != "TELSIAI" && $value['sandelis'] != "4444" && $value['sandelis'] != "1111"){
                $group2[$value['sandelis']][] = $value;
            }
        }

        //$i=0;
        $lt_viso = 0;
        $lv_viso = 0;
        $ee_viso = 0;
        foreach ( $group2 as $idx => $value ) {
            //$group[$idx]['preke'] = $idx;
            $sarasas[] = $idx;
            //$group[$idx]['pavadinimas'] = $value[0]['pavadinimas'];
            foreach($value as $val){
                if($val['salis'] == 1){
                    $group[$idx]['LT'][] = $val;
                    $lt_viso = $lt_viso + $val['kiekis'];
                    $gr[$idx]['LT_viso'] = $lt_viso;
                }
                if($val['salis'] == 2){
                    $group[$idx]['LV'][] = $val;
                    $lv_viso = $lv_viso + $val['kiekis'];
                    $gr[$idx]['LV_viso'] = $lv_viso;
                }
                if($val['salis'] == 3){
                    $group[$idx]['EE'][] = $val;
                    $ee_viso = $ee_viso + $val['kiekis'];
                    $gr[$idx]['EE_viso'] = $ee_viso;
                }
            }

            $gr[$idx]['viso'] = $ee_viso + $lv_viso + $lt_viso;
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
                $pard[$value['sandelis']][] = $value;
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
            //$pardavimai[$idx]['pavadinimas'] = $value[0]['pavadinimas'];
            foreach($value as $val){
                if($val['salis'] == 1){
                    $pardavimai[$idx]['LT'][] = $val;
                    $lt_viso = $lt_viso + $val['kiekis'];
                    $par[$idx]['LT_viso'] = $lt_viso;
                }
                if($val['salis'] == 2){
                    $pardavimai[$idx]['LV'][] = $val;
                    $lv_viso = $lv_viso + $val['kiekis'];
                    $par[$idx]['LV_viso'] = $lv_viso;
                }
                if($val['salis'] == 3){
                    $pardavimai[$idx]['EE'][] = $val;
                    $ee_viso = $ee_viso + $val['kiekis'];
                    $par[$idx]['EE_viso'] = $ee_viso;
                }
            }

            $par[$idx]['viso'] = $ee_viso + $lv_viso + $lt_viso;
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
            $new[$i]['sandelis'] = $valu;
            //$new[$i]['pavadinimas'] = '';
            if (array_key_exists($valu, $group)) {
                $new[$i]['likutis'] = $group[$valu];
                $new[$i]['viso'] = $gr[$valu]['viso'];
                //$new[$i]['LT_viso'] = $gr[$valu]['LT_viso'];
                //$new[$i]['LV_viso'] = $gr[$valu]['LV_viso'];
                //$new[$i]['EE_viso'] = $gr[$valu]['EE_viso'];
                //$new[$i]['pavadinimas'] = $group[$valu]['pavadinimas'];
            }else{$new[$i]['likutis'] = array();}
            if (array_key_exists($valu, $pardavimai)) {
                $new[$i]['pardavimai'] = $pardavimai[$valu];
                $new[$i]['viso'] = $par[$valu]['viso'];
                //$new[$i]['LT_viso'] = $par[$valu]['LT_viso'];
                //$new[$i]['LV_viso'] = $par[$valu]['LV_viso'];
                //$new[$i]['EE_viso'] = $par[$valu]['EE_viso'];
                //if($new[$i]['pavadinimas'] == ""){
                    //$new[$i]['pavadinimas'] = $pardavimai[$valu]['pavadinimas'];
                //}
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
            'sarasas' => $gr,
            //'parduotuves' => $store
        ]);



        /*$re1 = Pardavimai::query()
        ->where('preke', 'like', "{$keyword}%")->get();
        $group = array();
        foreach ( $re1 as $value ) {
            if($value['sandelis'] != "3333" && $value['sandelis'] != "Braak" && $value['sandelis'] != "TELSIAI"){
            $group[$value['sandelis']][] = $value;
            }
        }

        $re2 = Likutis::query()
        ->where('preke', 'like', "{$keyword}%")->get();
        $group2 = array();
        foreach ( $re2 as $value ) {
            $group2[$value['sandelis']][] = $value;
        }

        $da = array();
        $i=0;
        foreach ( $group as $idx => $value ) {
            //Lietuva
            if($key[1] && $value[0]['salis'] == 1){
                //skaiciuojam parduota viso
                if (array_key_exists($idx, $group)) {
                $sumDetail = 'kiekis';
                $totalVAT = array_reduce($value,
                function($runningTotal, $record) use($sumDetail) {
                $runningTotal += $record[$sumDetail];
                return $runningTotal;
                }, 0);

                //skaiciuojam likutis viso
                if (array_key_exists($idx, $group2)) {
                $total = array_reduce($group2[$idx],
                function($runningTotal, $record) use($sumDetail) {
                $runningTotal += $record[$sumDetail];
                return $runningTotal;
                }, 0);
            }else{$total =0;}

                $da[$i]['sandelis'] = $idx;
                $da[$i]['parduota'] = $totalVAT;
                $da[$i]['likutis'] = $total;
                $da[$i]['viso'] = $total-($totalVAT*2);
                $da[$i]['prekes'] = $value;
                if (array_key_exists($idx, $group2)) {
                    $da[$i]['likut'] = $group2[$idx];
                }
                $i++;
            }
        }
            //Latvija
            if($key[2] && $value[0]['salis'] == 2){
                //skaiciuojam parduota viso
                if (array_key_exists($idx, $group)) {
                $sumDetail = 'kiekis';
                $totalVAT = array_reduce($value,
                function($runningTotal, $record) use($sumDetail) {
                $runningTotal += $record[$sumDetail];
                return $runningTotal;
                }, 0);

                //skaiciuojam likutis viso
                if (array_key_exists($idx, $group2)) {
                $total = array_reduce($group2[$idx],
                function($runningTotal, $record) use($sumDetail) {
                $runningTotal += $record[$sumDetail];
                return $runningTotal;
                }, 0);
            }else{$total =0;}

                $da[$i]['sandelis'] = $idx;
                $da[$i]['parduota'] = $totalVAT;
                $da[$i]['likutis'] = $total;
                $da[$i]['viso'] = $total-($totalVAT*2);
                $da[$i]['prekes'] = $value;
                if (array_key_exists($idx, $group2)) {
                    $da[$i]['likut'] = $group2[$idx];
                }
                $i++;
            }
            }
            //Estija
            if($key[3] && $value[0]['salis'] == 3){
                //skaiciuojam parduota viso
                if (array_key_exists($idx, $group)) {
                $sumDetail = 'kiekis';
                $totalVAT = array_reduce($value,
                function($runningTotal, $record) use($sumDetail) {
                $runningTotal += $record[$sumDetail];
                return $runningTotal;
                }, 0);

                //skaiciuojam likutis viso
                if (array_key_exists($idx, $group2)) {
                $total = array_reduce($group2[$idx],
                function($runningTotal, $record) use($sumDetail) {
                $runningTotal += $record[$sumDetail];
                return $runningTotal;
                }, 0);
            }else{$total =0;}

                $da[$i]['sandelis'] = $idx;
                $da[$i]['parduota'] = $totalVAT;
                $da[$i]['likutis'] = $total;
                $da[$i]['viso'] = $total-($totalVAT*2);
                $da[$i]['prekes'] = $value;
                if (array_key_exists($idx, $group2)) {
                    $da[$i]['likut'] = $group2[$idx];
                }
                $i++;
            }
            }
        }
        $sumDetail = 'parduota';
        $viso_pard = array_reduce($da,
        function($runningTotal, $record) use($sumDetail) {
        $runningTotal += $record[$sumDetail];
        return $runningTotal;
        }, 0);

        $sumDetail = 'likutis';
        $viso_lik = array_reduce($da,
        function($runningTotal, $record) use($sumDetail) {
        $runningTotal += $record[$sumDetail];
        return $runningTotal;
        }, 0);

        $arr = array("LT" => $key[1], "LV" => $key[2], "EE" => $key[3]);
        return response()->json([
            'status' => true,
            'data' => $da,
            'paieska' => $keyword,
            'viso_pard' => $viso_pard,
            'viso_lik' => $viso_lik,
            'salis' =>  $arr,
        ]);*/

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
