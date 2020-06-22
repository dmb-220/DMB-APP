<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pardavimai;
use App\Likutis;

class StatistikaController extends Controller
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
        //pasidaryt kintamuosius is VUE kad pateiktu tik nurodyta valstybe
        //$keyword = 'DMK-';

         //$store = array(
            $LT = array("MINS", "TELS", "MADA", "MARI", "MOLA", "NORF", "BIGA", "BABI", "UKME", "MANT", "VISA", "KEDA","AREN", "MAXI", "PANE", "KREV", "MAZE", "TAIK", "SAUL", "TAUB");
            $LV = array("DOLE", "KULD", "BRIV", "DITO", "MATI", "VALK", "TAL2", "TUKU", "VALD", "VENT", "AIZK", "DAUG", "LIMB", "MELN", "SALD", "VALM",  "ALUK", "BALV", "CESI", "DOBE", "GOBA", "JEKA", "LIEP", "SIGU", "MADO");
            $EE = array("Johvi", "Mustamäe", "Narva", "Rakvere", "Sopruse", "Võru 55 Tartu", "Ümera","Eden", "Haapsalu", "Kopli", "Parnu", "Riia Parnu");
        //);

        $sara = array(
            "Suknelė" => "Kleita",
            "Palaidinė" => "Blūze",
            "Palaidinės" => "Blūze",
            "Kelnės" => "Bikses",
            "Švarkas" => "Žakete",
            "Sijonas" => "Svārki",
            "Striukė" => "Jaka",
            "Sport. kelnės" => "Sport. bikses",
            "Sport.kelnės" => "Sport. bikses",
            "Skara" => "Plecu lakats",
            "Šalikas" => "Šalle",
            "Rankinė" => "Soma",
            "Tamprės" => "Leging",
            "Tamprės" => "Legingi",
            "Pižama" => "Pidžama",
            "Paltas" => "Mētelis",
            "Pirštinės" => "Cimdi",
            "Pėdkelnės" => "Zeķubikses",
            "Naktiniai" => "Naktskrekls",
            "Kostiumas" => "Kostīms",
            "Megztinis" => "Džemperis",
            "Maud. kostiumas" => "Peldkostims",
            "Maišelis" => "Maisiņi", //Latvija
            //"Maišelis" => "Kilekott", //Estija
            "Med. kelnės" => "Med. bikses",
            "Liekninanti palaidinė" => "Blūze figūras korekcijai",
            "Liemenėlė" => "Krūšturis",
            "Vyr. kelnaitės" => "Vīr. apakšbikses",
            "Kelnaitės" => "Apakšbikses",
            "Kelnatės" => "Apakšbikses",
            "Vyr. kojinės" => "Vīr. zeķes",
            "Vaik. kojinė" => "Bēr. zeķes",
            "Kojinės" => "Zeķes",
            "Džinsai" => "Džinsi",
            "Chalatas" => "Halāts",
            "Sport. kostiumas" => "Sport. kostīms",
            "Sarafanas" => "Sarafāns",
            "Med. švarkas" => "Med. jaka",
            "Med.Švarkas" => "Med. jaka", 
            "Komplektas" => "Komplekts",
            "Liemenė" => "Veste",
            "Diržas" => "Siksna",
            "Vyr. pėdutės" => "Vīr. pēdiņas",
            "Kepurė" => "Cepure",
            "Šortai" => "Šorti",
            "Suknelė + apatinukas" => "Kleita + apakšveļa",
            "Kombinezonas" => "Kombinezons",
            "Skarelė" => "Lakats",
            "Pėdutės" => "Pēdiņas",
            "Med. chalatas" => "Med. halāts",
            "Rankšluostis" => "Dvielis",
            "Vyr. džinsai" => "Vīr. džinsi",
            "Skraistė" => "Plecu lakats",
            "Vaik. kelnaitės" => "Bēr. apakšbikses",
            "Chalat.+ naktiniai" => "Halāts + naktskrekls",
            "Vaik. kojinės" => "Bēr. zeķes",
            "Vyr.kelnaitės" => "Vīr. apakšbikses",
            "Naktinai" => "Naktskrekls",
            "Džemperis" => "Džemperis",
            "Lietpaltis" => "Mētelis",
        ); 


        $failas = "paieska.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $myfile = fopen(storage_path($failas), "r");
        $key = fread($myfile,filesize(storage_path($failas)));
        fclose($myfile);

        $key = explode("||", $key);
        $keyword = $key[0];

        $rikiuoti = $key[4];

        $gam = $key[5];
        $pirk = $key[6];

        $grupe = $key[8];

        //jei nera ivestas paieskos raktazodis, nustatyti pradini
        //jei grupe nustatyta, tada galima buti ir tuscias
        if($grupe == 0){
            if($keyword == ""){
                $keyword = "DM-";
            }
        }

        //paieska, paprasta, isplestine
        if($key[7]){
            $pa = "%{$keyword}%";
        }else{
            $pa = "{$keyword}%";
        }

        //aprasom tuscius masyvus
        $list = array();
        $new = array();
        $group2 = array();
        $group = array();
        $pard = array();
        $pardavimai = array();

        //nuo pasirinkimo priklauso ka rodyti.
        //nustatom tuscia masyva
        $store = array();

        if($key[1] && $key[2] && $key[3]){$store = array_merge($LT, $LV, $EE);}
        if(!$key[1] && $key[2] && $key[3]){$store = array_merge($LV, $EE);}
        if(!$key[1] && !$key[2] && $key[3]){$store = $EE;}
        if($key[1] && !$key[2] && !$key[3]){$store = $LT;}
        if(!$key[1] && $key[2] && !$key[3]){$store = $LV;}
        if($key[1] && !$key[2] && $key[3]){$store = array_merge($LT, $EE);}
        if($key[1] && $key[2] && !$key[3]){$store = array_merge($LT, $LV);}

        //Sudedam norimus likucius
        //$re = Likutis::query()
        //->where('preke', 'like', $pa)->get();
        //$ke = "DM-9";
        //$not = "{$ke}%";

        $grupes_likutis = array();
        $grupes_pardavimai = array();

        //reikia issitraukti GRUPIU pavadinimus, pagal kuriuos galetų filtruoti
        //traukiam grupes pagal LT, pagal LV gali buti papildomai
        //Geriausia butu susivesti tas grupes i masyva ir viskas.
        $gru = Likutis::select('pavadinimas', 'salis')->where('kiekis','>','0')->distinct()->get();
        foreach ( $gru as $value ) {
            if(!in_array($value, $grupes_likutis) && $value['salis'] == 1){
                $grupes_likutis[] = $value['pavadinimas'];
            }
        }

        $gru = Pardavimai::select('pavadinimas','registras', 'salis')->where('kiekis','>','0')->distinct()->get();
        foreach ( $gru as $value ) {
            if($value['registras'] != "PERS"){
            if(!in_array($value, $grupes_pardavimai) && $value['salis'] == 1){
                $grupes_pardavimai[] = $value['pavadinimas'];
            }
        }
        }

        //reik sujungti pardavimus su likutis
        $grupes = $grupes_likutis + $grupes_pardavimai;
        $grupes = array_unique($grupes);

        sort($grupes);
        $g = array('Paieška tarp grupių išjungta');
        //i masyvo pradzia idedam grupes isjungima
        $grupes = $g + $grupes;

        $query_p = Likutis::query();
        $query_p->where('preke', 'like', $pa);
        //$query_p->orWhere('preke', 'NOT LIKE', $not);
        if($grupe != 0 && $grupes[$grupe]){
            $query_p->whereIn('pavadinimas',[$grupes[$grupe], $sara[$grupes[$grupe]]]);
        }
        $query_p->when(!$gam, function ($q) {
            return $q->where('registras', "GAM");
        });
        $query_p->when(!$pirk, function ($q) {
            return $q->where('registras', "PIRK");
        });
        $re = $query_p->get();

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
               // $ke = explode("-", $val['preke']);
                //$k = str_split($ke[1]);
                //if($k[0] != 9 ){
                if($key[1] && $val['salis'] == 1){
                    $group[$idx][] = $val;
                    $lt_viso = $lt_viso + $val['kiekis'];
                    $gr[$idx]['likutis'] = $lt_viso;

                    $list[$idx][$val['preke']]['likutis'] = $val['kiekis'];
                    $list[$idx][$val['preke']]['preke'] = $val['preke'];
                }
                if($key[2] && $val['salis'] == 2){
                    $group[$idx][] = $val;
                    $lv_viso = $lv_viso + $val['kiekis'];
                    $gr[$idx]['likutis'] = $lv_viso;

                    $list[$idx][$val['preke']]['likutis'] = $val['kiekis'];
                    $list[$idx][$val['preke']]['preke'] = $val['preke'];
                }
                if($key[3] && $val['salis'] == 3){
                    $group[$idx][] = $val;
                    $ee_viso = $ee_viso + $val['kiekis'];
                    $gr[$idx]['likutis'] = $ee_viso;

                    $list[$idx][$val['preke']]['likutis'] = $val['kiekis'];
                    $list[$idx][$val['preke']]['preke'] = $val['preke'];
                }
            //}//
            }

            $lt_viso = 0;
            $lv_viso = 0;
            $ee_viso = 0;
        }

        //Sudedam norimus pardavimus 
        //$res = Pardavimai::query()
        //->where('preke', 'like', $pa)->get();
        $query_p = Pardavimai::query();
        $query_p->where('preke', 'like', $pa);
        //$query_p->orWhere('preke', 'NOT LIKE', $not);
        if($grupe != 0 && $grupes[$grupe]){
            $query_p->whereIn('pavadinimas',[$grupes[$grupe], $sara[$grupes[$grupe]]]);
        }
        $query_p->when(!$gam, function ($q) {
            return $q->where('registras', "GAM");
        });
        $query_p->when(!$pirk, function ($q) {
            return $q->where('registras', "PIRK");
        });
        $re = $query_p->get();


        foreach ( $re as $value ) {
            if($value['sandelis'] != "TELSIAI"){
                $pard[$value['sandelis']][] = $value;
            }
        }

        $lt_viso = 0;
        $lv_viso = 0;
        $ee_viso = 0;
        foreach ( $pard as $idx => $value ) {
            //echo $idx." - ".count($value)."<br>";
            foreach($value as $val){
                //$ke = explode("-", $val['preke']);
                //$k = str_split($ke[1]);
                //if($k[0] != 9 ){
                if($key[1] && $val['salis'] == 1){
                    $pardavimai[$idx][] = $val;
                    $lt_viso = $lt_viso + $val['kiekis'];
                    $par[$idx]['pardavimai'] = $lt_viso;

                    $list[$idx][$val['preke']]['pardavimai'] = $val['kiekis'];
                    $list[$idx][$val['preke']]['preke'] = $val['preke'];
                }
                if($key[2] && $val['salis'] == 2){
                    $pardavimai[$idx][] = $val;
                    $lv_viso = $lv_viso + $val['kiekis'];
                    $par[$idx]['pardavimai'] = $lv_viso;

                    $list[$idx][$val['preke']]['pardavimai'] = $val['kiekis'];
                    $list[$idx][$val['preke']]['preke'] = $val['preke'];
                }
                if($key[3] && $val['salis'] == 3){
                    $pardavimai[$idx][] = $val;
                    $ee_viso = $ee_viso + $val['kiekis'];
                    $par[$idx]['pardavimai'] = $ee_viso;

                    $list[$idx][$val['preke']]['pardavimai'] = $val['kiekis'];
                    $list[$idx][$val['preke']]['preke'] = $val['preke'];
            }
        //}//

        }

            $lt_viso = 0;
            $lv_viso = 0;
            $ee_viso = 0;
    }

    foreach($list as $idx => $value){
        $list[$idx] = array_values($list[$idx]);
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
            'rikiuoti' => $rikiuoti,
            'paieska_big' => $key[7],
            'gam' => $gam,
            'pirk' => $pirk,
            'grupes' => $grupes,
            'grupes_lv' => $sara,
            'grupe' => $grupe,
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
        $rikiuoti = $data['rikiuoti'];
        $gam = $data['gam'];
        $pirk = $data['pirk'];
        $paieska_big= $data['paieska_big'];
        $grupe= $data['grupe'];

        $failas = "paieska.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $eilute = strtoupper($ieskoti)."||".$lt."||".$lv."||".$ee."||".$rikiuoti."||".$gam."||".$pirk."||".$paieska_big."||". $grupe;

        $myfile = fopen(storage_path($failas), "w");
        fwrite($myfile, $eilute);
        fclose($myfile);

        return response()->json([
            'status' => true,
            'data' => $rikiuoti,
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
