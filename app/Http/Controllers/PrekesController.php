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

                //Sudedam norimus pardavimus 
                $res = Pardavimai::query()
                ->where('preke', 'like', "{$keyword}%")->get();
        
                foreach ( $res as $value ) {
                    if($value['sandelis'] != "TELSIAI"){
                        if($value['kiekis'] > 0){
                            if($rikiuoti){
                                $pardavimas[$value['preke']][] = $value;
                            }else{
                                $a = explode("-", $value['preke']);
                                $ne = $a[0]."-".$a[1]."-";
                                $pardavimas[$ne][] = $value;
                            }
                        }
                    }
                }
        
                //$i=0;
                $lt_viso = 0;
                $lv_viso = 0;
                $ee_viso = 0;
                foreach ( $pardavimas as $idx => $value ) {
                    //$pardavimai[$idx]['preke'] = $idx;
                    $sarasas[] = $idx;
                    
                    $pardavimai[$idx]['pavadinimas'] = $value[0]['pavadinimas'];
                    $pardavimai[$idx]['LT'] = array();
                    $pardavimai[$idx]['LV'] = array();
                    $pardavimai[$idx]['EE'] = array();
                    foreach($value as $val){
                        if($val['salis'] == 1){
                            if(array_key_exists($val['sandelis'], $pardavimai[$idx]['LT'])){
                                $kiek = $pardavimai[$idx]['LT'][$val['sandelis']]['kiekis'];
                            }else{
                                $kiek = 0;
                            }
                            $pardavimai[$idx]['LT'][$val['sandelis']] = array('sandelis' => $val['sandelis'], 'kiekis' => $val['kiekis'] + $kiek);
                            $lt_viso = $lt_viso + $val['kiekis'];
                            $pardavimai[$idx]['LT_viso'] = $lt_viso;
                        }
                        if($val['salis'] == 2){
                            if(array_key_exists($val['sandelis'], $pardavimai[$idx]['LV'])){
                                $kiek = $pardavimai[$idx]['LV'][$val['sandelis']]['kiekis'];
                            }else{
                                $kiek = 0;
                            }
                            $pardavimai[$idx]['LV'][$val['sandelis']] = array('sandelis' => $val['sandelis'], 'kiekis' => $val['kiekis'] + $kiek);
                            $lv_viso = $lv_viso + $val['kiekis'];
                            $pardavimai[$idx]['LV_viso'] = $lv_viso;
                        }
                        if($val['salis'] == 3){
                            if(array_key_exists($val['sandelis'], $pardavimai[$idx]['EE'])){
                                $kiek = $pardavimai[$idx]['EE'][$val['sandelis']]['kiekis'];
                            }else{
                                $kiek = 0;
                            }
                            $pardavimai[$idx]['EE'][$val['sandelis']] = array('sandelis' => $val['sandelis'], 'kiekis' => $val['kiekis'] + $kiek);
                            $ee_viso = $ee_viso + $val['kiekis'];
                            $pardavimai[$idx]['EE_viso'] = $ee_viso;
                        }
                    }
                    //$key_lt_pardavimai = array_keys($pardavimai[$idx]['LT']);
        
                    $pardavimai[$idx]['LT'] = array_values($pardavimai[$idx]['LT']);
                    $pardavimai[$idx]['LV'] = array_values($pardavimai[$idx]['LV']);
                    $pardavimai[$idx]['EE'] = array_values($pardavimai[$idx]['EE']);
        
                    $pardavimai[$idx]['viso'] = $ee_viso + $lv_viso + $lt_viso;
                    $lt_viso = 0;
                    $lv_viso = 0;
                    $ee_viso = 0;
                    //$i++;
                }

        //Sudedam norimus likucius
        $re = Likutis::query()
        ->where('preke', 'like', "{$keyword}%")->get();

        foreach ( $re as $value ) {
            if($value['sandelis'] != "BROK" && $value['sandelis'] != "ESTI" && $value['sandelis'] != "3333" && $value['sandelis'] != "SAND"
            && $value['sandelis'] != "TELSIAI" && $value['sandelis'] != "4444" && $value['sandelis'] != "1111" && $value['sandelis'] != "ZILT"){
                if($rikiuoti){
                    $likutis[$value['preke']][] = $value;
                }else{
                    $a = explode("-", $value['preke']);
                    $ne = $a[0]."-".$a[1]."-";
                    $likutis[$ne][] = $value;
                }
            }
        }

        //$i=0;
        $lt_viso = 0;
        $lv_viso = 0;
        $ee_viso = 0;
        foreach ( $likutis as $idx => $value ) {
            //$likuciai[$idx]['preke'] = $idx;
            if(!in_array($idx, $sarasas)) {
                $sarasas[] = $idx;
            }
            $likuciai[$idx]['pavadinimas'] = $value[0]['pavadinimas'];
            //aprasom kintamaji, kad galetu patikrinti ar jau yra viduje sandelis
            $likuciai[$idx]['LT'] = array();
            $likuciai[$idx]['LV'] = array();
            $likuciai[$idx]['EE'] = array();
            foreach($value as $val){
                if($val['salis'] == 1){
                    if(array_key_exists($val['sandelis'], $likuciai[$idx]['LT'])){
                        $kiek = $likuciai[$idx]['LT'][$val['sandelis']]['kiekis'];
                    }else{
                        $kiek = 0;
                    }
                    $likuciai[$idx]['LT'][$val['sandelis']] = array('sandelis' => $val['sandelis'], 'kiekis' => $val['kiekis'] + $kiek);
                    $lt_viso = $lt_viso + $val['kiekis'];
                    $likuciai[$idx]['LT_viso'] = $lt_viso;
                    //reik susikelti sandeliu sarasa
                }
                if($val['salis'] == 2){
                    if(array_key_exists($val['sandelis'], $likuciai[$idx]['LV'])){
                        $kiek = $likuciai[$idx]['LV'][$val['sandelis']]['kiekis'];
                    }else{
                        $kiek = 0;
                    }
                    $likuciai[$idx]['LV'][$val['sandelis']] = array('sandelis' => $val['sandelis'], 'kiekis' => $val['kiekis'] + $kiek);
                    $lv_viso = $lv_viso + $val['kiekis'];
                    $likuciai[$idx]['LV_viso'] = $lv_viso;
                }
                if($val['salis'] == 3){
                    if(array_key_exists($val['sandelis'], $likuciai[$idx]['EE'])){
                        $kiek = $likuciai[$idx]['EE'][$val['sandelis']]['kiekis'];
                    }else{
                        $kiek = 0;
                    }
                    $likuciai[$idx]['EE'][$val['sandelis']] = array('sandelis' => $val['sandelis'], 'kiekis' => $val['kiekis'] + $kiek);
                    $ee_viso = $ee_viso + $val['kiekis'];
                    $likuciai[$idx]['EE_viso'] = $ee_viso;
                }
            }

            //$key_lt_likutis = array_keys($likuciai[$idx]['LT']);

            /*foreach($likuciai[$idx]['LT'] as $key => $va){
                if(array_key_exists($idx, $pardavimai)){
                    if(array_key_exists($key, $pardavimai[$idx]['LT'])){
                        $likuciai[$idx]['LT'][$key] = array('sandelis' => $key, 'kiekis' => 0);
                    }
                }
            }*/

            $likuciai[$idx]['LT'] = array_values($likuciai[$idx]['LT']);
            $likuciai[$idx]['LV'] = array_values($likuciai[$idx]['LV']);
            $likuciai[$idx]['EE'] = array_values($likuciai[$idx]['EE']);

            $likuciai[$idx]['viso'] = $ee_viso + $lv_viso + $lt_viso;
            $lt_viso = 0;
            $lv_viso = 0;
            $ee_viso = 0;
            //$i++;
        }

        //reikia sukti cikla ir islyginti eilutes prie prekiu
        /*foreach($likuciai as $k => $sand){
            //var_dump($sand);
            foreach($sand['LT'] as $san){
                echo $k." - ".$san['sandelis']."<br>";
            }
        }*/

        //padaryti slepti liemeneles,
        //arba liemenes
        //reik ideti myktuka ka turi rodyti
        $i=0;
        foreach($sarasas as $valu){
            $new[$i]['preke'] = $valu;
            $new[$i]['pavadinimas'] = '';
            if (array_key_exists($valu, $likuciai)) {
                $new[$i]['likutis'] = $likuciai[$valu];
                $new[$i]['pavadinimas'] = $likuciai[$valu]['pavadinimas'];
            }else{$new[$i]['likutis'] = array();}
            if (array_key_exists($valu, $pardavimai)) {
                $new[$i]['pardavimai'] = $pardavimai[$valu];
                if($new[$i]['pavadinimas'] == ""){
                    $new[$i]['pavadinimas'] = $pardavimai[$valu]['pavadinimas'];
                }
            }else{$new[$i]['pardavimai'] = array();}
            $i++;
        }

        $viso = array(
            'lt_pard' => 0,
            'lt_lik' => 0,
            'lv_pard' => 0,
            'lv_lik' => 0,
            'ee_pard' => 0,
            'ee_lik' => 0
        );

        foreach($new as $val){
            if(array_key_exists('pardavimai', $val)){
                if(array_key_exists('LT_viso', $val['pardavimai'])){
                    $viso['lt_pard'] += $val['pardavimai']['LT_viso'];
                }
                if(array_key_exists('LV_viso', $val['pardavimai'])){
                    $viso['lv_pard'] += $val['pardavimai']['LV_viso'];
                }
                if(array_key_exists('EE_viso', $val['pardavimai'])){
                    $viso['ee_pard'] += $val['pardavimai']['EE_viso'];
                }
            }
            if(array_key_exists('likutis', $val)){
                if(array_key_exists('LT_viso', $val['likutis'])){
                    $viso['lt_lik'] += $val['likutis']['LT_viso'];
                }
                if(array_key_exists('LV_viso', $val['likutis'])){
                    $viso['lv_lik'] += $val['likutis']['LV_viso'];
                }
                if(array_key_exists('EE_viso', $val['likutis'])){
                    $viso['ee_lik'] += $val['likutis']['EE_viso'];
                }
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
            'sarasas' => $new,
            'rikiuoti' => $rikiuoti,
            'viso' => $viso
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
