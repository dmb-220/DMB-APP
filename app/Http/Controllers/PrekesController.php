<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Pardavimai;
use App\Likutis;
use App\Akcijos;
use App\Atsargos;

class PrekesController extends Controller
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
        $sara = array(
            "Suknelė" => "Kleita",
            "Palaidinė" => "Blūze",
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
            "Veido kaukė" => "Sejas maska",
            "Maišelis" => "Maisiņi", //Latvija
            //"Maišelis" => "Kilekott", //Estija
            "Med. kelnės" => "Med. bikses",
            "Liekninanti palaidinė" => "Blūze figūras korekcijai",
            "Liemenėlė" => "Krūšturis",
            "Vyr. kelnaitės" => "Vīr. apakšbikses",
            "Kelnaitės" => "Apakšbikses",
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

        function createDateRangeArray($strDateFrom,$strDateTo)
            {
                // takes two dates formatted as YYYY-MM-DD and creates an
                // inclusive array of the dates between the from and to dates.

                // could test validity of dates here but I'm already doing
                // that in the main script

                $aryRange = [];

                $iDateFrom=mktime(1,0,0,substr($strDateFrom,5,2),     substr($strDateFrom,8,2),substr($strDateFrom,0,4));
                $iDateTo=mktime(1,0,0,substr($strDateTo,5,2),     substr($strDateTo,8,2),substr($strDateTo,0,4));

                if ($iDateTo>=$iDateFrom)
                {
                    //array_push($aryRange,date('Y-m-d',$iDateFrom)); // first entry
                    $aryRange[date('Y-m-d',$iDateFrom)]['data'] = date('Y-m-d',$iDateFrom);
                    $aryRange[date('Y-m-d',$iDateFrom)]['kiekis'] = 0;
                    $aryRange[date('Y-m-d',$iDateFrom)]['sandelis'] = array();
                    while ($iDateFrom<$iDateTo)
                    {
                        $iDateFrom+=86400; // add 24 hours
                        //array_push($aryRange,date('Y-m-d',$iDateFrom));
                        $aryRange[date('Y-m-d',$iDateFrom)]['data'] = date('Y-m-d',$iDateFrom);
                        $aryRange[date('Y-m-d',$iDateFrom)]['kiekis'] = 0;
                    $aryRange[date('Y-m-d',$iDateFrom)]['sandelis'] = array();
                    }
                }
                return $aryRange;
            }

        //pasiimam datas pardavimo ribu
        $failas = "data.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $myfile = fopen(storage_path($failas), "r");
        $ke = fread($myfile,filesize(storage_path($failas)));
        fclose($myfile);

        $ke = explode("|||", $ke);
        $dt = explode(" --- ", $ke[0]);


        //nustatymai
        $failas = "prekes.txt";
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

        //aprasom tuscius masyvus
        $list = array();
        $new = array();
        $sarasas = array();
        $pardavimai = array();
        $likuciai = array();
        $akcija['lietuva'] = array();
        $akcija['latvija'] = array();

        $grupes_likutis = array();
        $grupes_pardavimai = array();

        $pardavimas = array();
        $likutis = array();

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

        //Akciju sukelimas i masyva
        $que = Akcijos::query();
        /*$que->when($keyword != "", function ($q) {
            return $q->where('preke', 'like', $pa);
        });*/
        $que->where('preke', 'like', $pa);
        if($grupe != 0 && $grupes[$grupe]){
            $que->whereIn('pavadinimas',[$grupes[$grupe], $sara[$grupes[$grupe]]]);
            }              
        $akc = $que->get();
        
        foreach ( $akc as $value ) {
            //sudeti i masyva tik tuos kurie galioja
            //Ikeliant atfiltruojku, tai cia kaip ir nebereiketu
            if(strtotime($value['galioja_iki']) > strtotime(date("Y-m-d H:i:s"))){
                if($value['salis'] == "1"){
                    $akcija['lietuva'][$value['preke']][] = $value;
                }
                if($value['salis'] == "2"){
                    $akcija['latvija'][$value['preke']][] = $value;
                }
            }
        }

        $query_p = Pardavimai::query();
        $query_p->where('preke', 'like', $pa);
        if($grupe != 0 && $grupes[$grupe]){
            $query_p->whereIn('pavadinimas',[$grupes[$grupe], $sara[$grupes[$grupe]]]);
        }
        $query_p->when(!$gam, function ($q) {
            return $q->where('registras', "GAM");
        });
        $query_p->when(!$pirk, function ($q) {
            return $q->where('registras', "PIRK");
        });
        $res = $query_p->get();



        foreach ( $res as $value ) {
            if($value['sandelis'] != "TELSIAI" && $value['sandelis'] != "3333"){
                if($value['kiekis'] > 0){
                    if($value['registras'] == "GAM" && !$rikiuoti){
                        $a = explode("-", $value['preke']);
                        if(count($a) >= 3){$ne = $a[0]."-".$a[1]."-";}
                        if(count($a) == 2){$ne = $a[0]."-";}
                        //turi veikti tik su BROK
                        if(count($a) == 1){$ne = preg_replace('#[0-9 ]*#', '', $a[0]);}
                        $pardavimas[$ne][] = $value;
                        
                    }else{
                        $pardavimas[$value['preke']][] = $value;
                    }
                }
            }
        }

        
        //skeliam duomenis pagal data ir pardavimus
        $buy = array();
        $valstybe = "";
        $bu = createDateRangeArray($dt[0], $dt[1]);
        foreach ( $pardavimas as $id => $val ) {
            $buy[$id]['preke'] = $id;
            $buy[$id]['LT'] = $bu;
            $buy[$id]['LV'] = $bu;
            $buy[$id]['viso'] = $bu;
            foreach($val as $va){
                if($va['dok_data'] != "0000-00-00"){
                    if($va['salis'] == 1){$valstybe = "LT";}
                    if($va['salis'] == 2){$valstybe = "LV";}
                    if($va['salis'] == 3){$valstybe = "EE";}

                    $buy[$id][$valstybe][$va['dok_data']]['data'] = $va['dok_data']; 
                    $buy[$id][$valstybe][$va['dok_data']]['sandelis'][] = $va['sandelis']; 

                    if(array_key_exists('kiekis', $buy[$id][$valstybe][$va['dok_data']])){
                        $buy[$id][$valstybe][$va['dok_data']]['kiekis'] += $va['kiekis'];
                    }else{
                        $buy[$id][$valstybe][$va['dok_data']]['kiekis'] = $va['kiekis'];
                    }
                    //VISO
                    $buy[$id]['viso'][$va['dok_data']]['data'] = $va['dok_data']; 
                    $buy[$id]['viso'][$va['dok_data']]['sandelis'][] = $va['sandelis']; 

                    if(array_key_exists('kiekis', $buy[$id]['viso'][$va['dok_data']])){
                        $buy[$id]['viso'][$va['dok_data']]['kiekis'] += $va['kiekis'];
                    }else{
                        $buy[$id]['viso'][$va['dok_data']]['kiekis'] = $va['kiekis'];
                    }
                }
            }
            if(array_key_exists('viso', $buy[$id])){
                ksort($buy[$id]['viso']);  
                $buy[$id]['viso'] = array_values($buy[$id]['viso']);
        }

            if(array_key_exists('LT', $buy[$id])){
                    ksort($buy[$id]['LT']);  
                    $buy[$id]['LT'] = array_values($buy[$id]['LT']);
            }
            
            if(array_key_exists('LV', $buy[$id])){
                    ksort($buy[$id]['LV']);  
                    $buy[$id]['LV'] = array_values($buy[$id]['LV']);
            }
        }

        //$i=0;
        $lt_viso = 0;
        $lv_viso = 0;
        $ee_viso = 0;

        foreach ( $pardavimas as $idx => $value ) {
            //prekiu sarasas
            $sarasas[] = $idx;
            //kokiose parduotuvese yra
            $list[$idx]['LT'] = array();
            $list[$idx]['LV'] = array();
            $list[$idx]['EE'] = array();
            
            $pardavimai[$idx]['pavadinimas'] = $value[0]['pavadinimas'];
            $pardavimai[$idx]['LT'] = array();
            $pardavimai[$idx]['LV'] = array();
            $pardavimai[$idx]['EE'] = array();

            foreach($value as $val){
                if($key[1] && $val['salis'] == 1){
                    if(array_key_exists($val['sandelis'], $pardavimai[$idx]['LT'])){
                        $kiek = $pardavimai[$idx]['LT'][$val['sandelis']]['kiekis'];
                    }else{
                        $kiek = 0;
                    }
                    $pardavimai[$idx]['LT'][$val['sandelis']] = array('sandelis' => $val['sandelis'], 'kiekis' => $val['kiekis'] + $kiek);
                    $lt_viso = $lt_viso + $val['kiekis'];
                    $pardavimai[$idx]['LT_viso'] = $lt_viso;

                    $list[$idx]['LT'][$val['sandelis']]['pardavimai'] = array('sandelis' => $val['sandelis'], 'kiekis' => $val['kiekis'] + $kiek);
                    $list[$idx]['LT'][$val['sandelis']]['sandelis'] = $val['sandelis'];
                }
                if($key[2] && $val['salis'] == 2){
                    if(array_key_exists($val['sandelis'], $pardavimai[$idx]['LV'])){
                        $kiek = $pardavimai[$idx]['LV'][$val['sandelis']]['kiekis'];
                    }else{
                        $kiek = 0;
                    }
                    $pardavimai[$idx]['LV'][$val['sandelis']] = array('sandelis' => $val['sandelis'], 'kiekis' => $val['kiekis'] + $kiek);
                    $lv_viso = $lv_viso + $val['kiekis'];
                    $pardavimai[$idx]['LV_viso'] = $lv_viso;

                    $list[$idx]['LV'][$val['sandelis']]['pardavimai'] = array('sandelis' => $val['sandelis'], 'kiekis' => $val['kiekis'] + $kiek);
                    $list[$idx]['LV'][$val['sandelis']]['sandelis'] = $val['sandelis'];
                }
                if($key[3] && $val['salis'] == 3){
                    if(array_key_exists($val['sandelis'], $pardavimai[$idx]['EE'])){
                        $kiek = $pardavimai[$idx]['EE'][$val['sandelis']]['kiekis'];
                    }else{
                        $kiek = 0;
                    }
                    $pardavimai[$idx]['EE'][$val['sandelis']] = array('sandelis' => $val['sandelis'], 'kiekis' => $val['kiekis'] + $kiek);
                    $ee_viso = $ee_viso + $val['kiekis'];
                    $pardavimai[$idx]['EE_viso'] = $ee_viso;

                    $list[$idx]['EE'][$val['sandelis']]['pardavimai'] = array('sandelis' => $val['sandelis'], 'kiekis' => $val['kiekis'] + $kiek);
                    $list[$idx]['EE'][$val['sandelis']]['sandelis'] = $val['sandelis'];
                }
            }

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
        $query_p = Likutis::query();
        $query_p->where('preke', 'like', $pa);
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
            if($value['sandelis'] != "BROK" && $value['sandelis'] != "ESTI" && $value['sandelis'] != "3333" && $value['sandelis'] != "SAND"
            && $value['sandelis'] != "TELSIAI" && $value['sandelis'] != "4444" && $value['sandelis'] != "1111" && $value['sandelis'] != "ZILT"){
                if($value['registras'] == "GAM" && !$rikiuoti){
                    $a = explode("-", $value['preke']);
                if(count($a) >= 3){$ne = $a[0]."-".$a[1]."-";}
                if(count($a) == 2){$ne = $a[0]."-";}
                //turi veikti tik su BROK
                if(count($a) == 1){$ne = preg_replace('#[0-9 ]*#', '', $a[0]);}
                $likutis[$ne][] = $value;
                    
                }else{
                    $likutis[$value['preke']][] = $value;
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
            $likuciai[$idx]['kaina'] = $value[0]['kaina'];
            //aprasom kintamaji, kad galetu patikrinti ar jau yra viduje sandelis
            $likuciai[$idx]['LT'] = array();
            $likuciai[$idx]['LV'] = array();
            $likuciai[$idx]['EE'] = array();

        
            if(!array_key_exists($idx, $list)){
                $list[$idx]['LT'] = array();
                $list[$idx]['LV'] = array();
                $list[$idx]['EE'] = array();
            }

            foreach($value as $val){
                if($key[1] && $val['salis'] == 1){
                    if(array_key_exists($val['sandelis'], $likuciai[$idx]['LT'])){
                        $kiek = $likuciai[$idx]['LT'][$val['sandelis']]['kiekis'];
                    }else{
                        $kiek = 0;
                    }
                    $likuciai[$idx]['LT'][$val['sandelis']] = array('sandelis' => $val['sandelis'], 'kiekis' => $val['kiekis'] + $kiek);
                    $lt_viso = $lt_viso + $val['kiekis'];
                    $likuciai[$idx]['LT_viso'] = $lt_viso;

                    $list[$idx]['LT'][$val['sandelis']]['likutis'] = array('sandelis' => $val['sandelis'], 'kiekis' => $val['kiekis'] + $kiek);
                    $list[$idx]['LT'][$val['sandelis']]['sandelis'] = $val['sandelis'];
                }
                if($key[2] && $val['salis'] == 2){
                    if(array_key_exists($val['sandelis'], $likuciai[$idx]['LV'])){
                        $kiek = $likuciai[$idx]['LV'][$val['sandelis']]['kiekis'];
                    }else{
                        $kiek = 0;
                    }
                    $likuciai[$idx]['LV'][$val['sandelis']] = array('sandelis' => $val['sandelis'], 'kiekis' => $val['kiekis'] + $kiek);
                    $lv_viso = $lv_viso + $val['kiekis'];
                    $likuciai[$idx]['LV_viso'] = $lv_viso;

                    
                    $list[$idx]['LV'][$val['sandelis']]['likutis'] = array('sandelis' => $val['sandelis'], 'kiekis' => $val['kiekis'] + $kiek);
                    $list[$idx]['LV'][$val['sandelis']]['sandelis'] = $val['sandelis'];
                }
                if($key[3] && $val['salis'] == 3){
                    if(array_key_exists($val['sandelis'], $likuciai[$idx]['EE'])){
                        $kiek = $likuciai[$idx]['EE'][$val['sandelis']]['kiekis'];
                    }else{
                        $kiek = 0;
                    }
                    $likuciai[$idx]['EE'][$val['sandelis']] = array('sandelis' => $val['sandelis'], 'kiekis' => $val['kiekis'] + $kiek);
                    $ee_viso = $ee_viso + $val['kiekis'];
                    $likuciai[$idx]['EE_viso'] = $ee_viso;

                    
                    $list[$idx]['EE'][$val['sandelis']]['likutis'] = array('sandelis' => $val['sandelis'], 'kiekis' => $val['kiekis'] + $kiek);
                    $list[$idx]['EE'][$val['sandelis']]['sandelis'] = $val['sandelis'];
                }
            }

            $likuciai[$idx]['LT'] = array_values($likuciai[$idx]['LT']);
            $likuciai[$idx]['LV'] = array_values($likuciai[$idx]['LV']);
            $likuciai[$idx]['EE'] = array_values($likuciai[$idx]['EE']);


            $likuciai[$idx]['viso'] = $ee_viso + $lv_viso + $lt_viso;
            $lt_viso = 0;
            $lv_viso = 0;
            $ee_viso = 0;
            //$i++;
        }

        $atsargos = array();
        $ats = array();
        $qu = Atsargos::query();
        $qu->where('preke', 'like', $pa);
        //$qu->where('data', '>', '2020');
        if($grupe != 0 && $grupes[$grupe]){
            $qu->whereIn('pavadinimas',[$grupes[$grupe], $sara[$grupes[$grupe]]]);
        }
        $atsargos = $qu->get();
        //reik leisti paimti duomenis tiks tiems sandeliams i kuriuos isveza.
        //reiks masyva isikelti is statistikos
        foreach ( $atsargos as $value ) {
            if($value['registras'] == "GAM" && !$rikiuoti){
                $a = explode("-", $value['preke']);
                if(count($a) >= 3){$ne = $a[0]."-".$a[1]."-";}
                if(count($a) == 2){$ne = $a[0]."-";}
                //turi veikti tik su BROK
                if(count($a) == 1){$ne = preg_replace('#[0-9 ]*#', '', $a[0]);}
            }else{
                $ne = $value['preke'];
            }

            if($value['sandelis_i'] != "ESTI"){
                if($value['sandelis_is'] == '7777' || $value['sandelis_is'] == '5555' || $value['sandelis_is'] == 'TELSIAI'){
                    //if()
                    $ats[$ne]['preke'] = $ne;
                    //skaiciuojam kiek prekiu buvo perkelta
                    //reik skaiciuoti tik paskutinio perkelima
                    $ats[$ne]['info'][$value['data']]['data'] = $value['data'];
                    $ats[$ne]['info'][$value['data']]['sandeliai_i'][$value['sandelis_i']] = $value['sandelis_i'];
                    //$ats[$ne]['info'][$value['data']]['sandeliai_is'][$value['sandelis_is']] = $value['sandelis_is'];
                    //bendras kiekis
                    if(array_key_exists("perkelta", $ats[$ne])){
                        $sk = explode(",", $value['kiekis']);
                        $ats[$ne]['perkelta'] += $sk[0];
                    }else{
                        $sk = explode(",", $value['kiekis']);
                        $ats[$ne]['perkelta'] = $sk[0];
                    }
                    //kiekis pagal data
                    if(array_key_exists("perkelta", $ats[$ne]['info'][$value['data']])){
                        $sk = explode(",", $value['kiekis']);
                        $ats[$ne]['info'][$value['data']]['perkelta'] += $sk[0];
                    }else{
                        $sk = explode(",", $value['kiekis']);
                        $ats[$ne]['info'][$value['data']]['perkelta'] = $sk[0];
                    }
                }
            }
                   
        }

        //Cia reikia sudeti viska i LIST masyva

        foreach($list as $idx => $value){
            $list[$idx]['LT'] = array_values($list[$idx]['LT']);
            $list[$idx]['LV'] = array_values($list[$idx]['LV']);
            $list[$idx]['EE'] = array_values($list[$idx]['EE']);
        }

        $i=0;
        foreach($sarasas as $valu){
            //pradiniai duomenys
            $new[$i]['preke'] = $valu;
            $new[$i]['pavadinimas'] = '';
            //likuciu duomenys, skaiciai
            if (array_key_exists($valu, $likuciai)) {
                $new[$i]['likutis'] = $likuciai[$valu];
                $new[$i]['pavadinimas'] = $likuciai[$valu]['pavadinimas'];
                $new[$i]['kaina'] = $likuciai[$valu]['kaina'];
            }else{
                $new[$i]['likutis'] = array();
            }
            //pardavimu duomenys, skaiciai
            if (array_key_exists($valu, $pardavimai)) {
                $new[$i]['pardavimai'] = $pardavimai[$valu];
                if($new[$i]['pavadinimas'] == ""){
                    $new[$i]['pavadinimas'] = $pardavimai[$valu]['pavadinimas'];
                }
            }else{
                $new[$i]['pardavimai'] = array();
            }

            if (array_key_exists($valu, $buy)) { 
                $new[$i]['buy'] = $buy[$valu];
            }else{
                $new[$i]['buy'] = array();
            }

            //Atsargu duomenys, skaiciai
            if (array_key_exists($valu, $ats)) {
                ksort($ats[$valu]['info']);
                $ats[$valu]['info'] = array_values($ats[$valu]['info']);
                $new[$i]['atsargos'] = $ats[$valu];
                if($new[$i]['pavadinimas'] == ""){
                    $new[$i]['pavadinimas'] = "NEZINAU";
                }
            }else{
                $new[$i]['atsargos'] = array();
            }
            //bendras sandeliu sarasas su pirkimu pardavimu
            if (array_key_exists($valu, $list)) {
                $new[$i]['list'] = $list[$valu];
            }
            //akciju uzkelimas
            if (array_key_exists($valu, $akcija['lietuva'])) {
                $new[$i]['akcija_lt'] = $akcija['lietuva'][$valu];
            }else{
                $new[$i]['akcija_lt'] = array();
            }
            if (array_key_exists($valu, $akcija['latvija'])) {
                $new[$i]['akcija_lv'] = $akcija['latvija'][$valu];
            }else{
                $new[$i]['akcija_lv'] = array();
            }

            $i++;
        }

        //Viso
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
            'grupes' => $grupes,
            'grupes_lv' => $sara,
            'grupe' => $grupe,
            'sarasas' => $new,
            'rikiuoti' => $rikiuoti,
            'gam' => $gam,
            'pirk' => $pirk,
            'paieska_big' => $key[7],
            'viso' => $viso,
            'atsargos' => $ats,
            'buy' => $buy,
            'date_range' =>  $bu
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

        $failas = "prekes.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $eilute = strtoupper($ieskoti)."||".$lt."||".$lv."||".$ee."||".$rikiuoti."||".$gam."||".$pirk."||".$paieska_big."||".$grupe;

        $myfile = fopen(storage_path($failas), "w");
        fwrite($myfile, $eilute);
        fclose($myfile);

        return response()->json([
            'status' => true,
            'data' => $ieskoti,
            'rikiuoti' => $rikiuoti,
            'gam' => $gam,
            'pirk' => $pirk,
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
