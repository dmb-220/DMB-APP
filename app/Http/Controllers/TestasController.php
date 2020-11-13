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
                    //$aryRange[date('Y-m-d',$iDateFrom)]['sandelis'] = array();
                    while ($iDateFrom<$iDateTo)
                    {
                        $iDateFrom+=86400; // add 24 hours
                        //array_push($aryRange,date('Y-m-d',$iDateFrom));
                        $aryRange[date('Y-m-d',$iDateFrom)]['data'] = date('Y-m-d',$iDateFrom);
                        $aryRange[date('Y-m-d',$iDateFrom)]['kiekis'] = 0;
                    //$aryRange[date('Y-m-d',$iDateFrom)]['sandelis'] = array();
                    }
                }
                return $aryRange;
            }

            $failas = "data.txt";
            $directory  = "app/";
            $failas = $directory.$failas;
    
            $myfile = fopen(storage_path($failas), "r");
            $key = fread($myfile,filesize(storage_path($failas)));
            fclose($myfile);
    
            $key = explode("|||", $key);
            $dt = explode(" --- ", $key[0]);


        $LT = array("MINS", "TELS", "MADA", "MARI", "MOLA", "NORF", "BIGA", "BABI", "UKME", "MANT", "VISA", "KEDA","AREN", "MAXI", "PANE", "KREV", "MAZE", "TAIK", "SAUL", "TAUB");
        $LV = array("DOLE", "KULD", "BRIV", "DITO", "MATI", "OGRE", "TAL2", "TUKU", "VALD", "VENT", "AIZK", "DAUG", "LIMB", "MELN", "SALD", "VALM",  "ALUK", "BALV", "CESI", "DOBE", "GOBA", "JEKA", "LIEP", "SIGU", "MADO");
        $EE = array("Johvi", "Mustamäe", "Narva", "Rakvere", "Sopruse", "Võru 55 Tartu", "Ümera","Eden", "Haapsalu", "Kopli", "Parnu", "Riia Parnu");
    
        //LIETUVA
        /*$likutis = Likutis::where('salis', '1')->whereIn('sandelis', $LT)->select('pavadinimas','kiekis')->get();
        $pardavimai = Pardavimai::where('salis', '1')->whereIn('sandelis', $LT)->select('pavadinimas','kiekis', 'registras')->get();

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
		if($val['registras'] != "PERS" && $val['kiekis'] > 0 && $val['pavadinimas'] != "Siuntimo išlaidos" && $val['pavadinimas'] != "Rankšluostis" && $val['pavadinimas'] != "Skraistė" &&
		$val['pavadinimas'] != "Lietpaltis" && $val['pavadinimas'] != 'Pėdutės' && $val['pavadinimas'] != 'Veido kaukė' && $val['pavadinimas'] != 'Med.Švarkas'){
            if(array_key_exists('pardavimas', $grouped[$val['pavadinimas']])){
            $grouped[$val['pavadinimas']]['pardavimas'] += $val['kiekis']; 
            }else{
                $grouped[$val['pavadinimas']]['pardavimas'] = $val['kiekis']; 
            }
        }
    }

    //LATVIJA
    $likutis2 = Likutis::where('salis', '2')->whereIn('sandelis', $LV)->select('pavadinimas','kiekis')->get();
        $pardavimai2 = Pardavimai::where('salis', '2')->whereIn('sandelis', $LV)->select('pavadinimas','kiekis', 'registras')->get();
        
        $grouped2 = array();
        foreach($likutis2 as $val){
            if(array_key_exists($val['pavadinimas'], $grouped2)){
            $grouped2[$val['pavadinimas']]['likutis'] += $val['kiekis']; 
            }else{
                $grouped2[$val['pavadinimas']]['likutis'] = $val['kiekis']; 
                $grouped2[$val['pavadinimas']]['pavadinimas'] = $val['pavadinimas']; 
            }
        }
        foreach($pardavimai2 as $val){
		if($val['kiekis'] > 0 && $val['pavadinimas'] && $val['pavadinimas'] != "Kombinezons"  
		&& $val['pavadinimas'] != "Bēr. džinsi" && $val['pavadinimas'] != "Apakšveļa" 
		&& $val['pavadinimas'] != 'Bēr. pidžama'
		&& $val['pavadinimas'] != 'Vīr. pēdiņas' && $val['pavadinimas'] != "Med. halāts"){
            if(array_key_exists('pardavimas', $grouped2[$val['pavadinimas']])){
            $grouped2[$val['pavadinimas']]['pardavimas'] += $val['kiekis']; 
            }else{
                $grouped2[$val['pavadinimas']]['pardavimas'] = $val['kiekis']; 
            }
        }
    }

    //ESTIJA
    $likutis3 = Likutis::where('salis', '3')->whereIn('sandelis', $EE)->select('pavadinimas','kiekis')->get();
    $pardavimai3 = Pardavimai::where('salis', '3')->whereIn('sandelis', $EE)->select('pavadinimas','kiekis', 'registras')->get();
    
    $grouped3 = array();
    foreach($likutis3 as $val){
        if(array_key_exists($val['pavadinimas'], $grouped3)){
        $grouped3[$val['pavadinimas']]['likutis'] += $val['kiekis']; 
        }else{
            $grouped3[$val['pavadinimas']]['likutis'] = $val['kiekis']; 
            $grouped3[$val['pavadinimas']]['pavadinimas'] = $val['pavadinimas']; 
        }
    }
    foreach($pardavimai3 as $val){
        if($val['kiekis'] > 0 && $val['pavadinimas']){
            if(array_key_exists($val['pavadinimas'], $grouped3)){
        if(array_key_exists('pardavimas', $grouped3[$val['pavadinimas']])){
        $grouped3[$val['pavadinimas']]['pardavimas'] += $val['kiekis']; 
        }else{
            $grouped3[$val['pavadinimas']]['pardavimas'] = $val['kiekis']; 
        }
    }
}else{
    $grouped3[$val['pavadinimas']]['pardavimas'] = $val['kiekis']; 
    $grouped3[$val['pavadinimas']]['pavadinimas'] = $val['pavadinimas']; 
}
}

		$failas = "data.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $myfile = fopen(storage_path($failas), "r");
        $key = fread($myfile,filesize(storage_path($failas)));
        fclose($myfile);

        $key = explode("|||", $key);

    $grouped = array_values($grouped);
    $grouped2 = array_values($grouped2);
    $grouped3 = array_values($grouped3);
*/

    //diagrama CHART
    $query_p = Pardavimai::query();
    $query_p->whereIn('registras',['GAM', 'PIRK']);
    $query_p->whereIn('sandelis', array_merge($LT, $LV, $EE));
    $res = $query_p->get();

    
        //skeliam duomenis pagal data ir pardavimus
        $buy = array();
        $valstybe = "";
        $bu = createDateRangeArray($dt[0], $dt[1]);
        $buy['LT'] = $bu;
        $buy['LV'] = $bu;
        $buy['viso'] = $bu;
        foreach ( $res as $va ) {
            if($va['dok_data'] != "2020-01-01"){
                if($va['salis'] == 1){$valstybe = "LT";}
                if($va['salis'] == 2){$valstybe = "LV";}
                if($va['salis'] == 3){$valstybe = "EE";}

                $buy[$valstybe][$va['dok_data']]['data'] = $va['dok_data']; 
                //$buy[$id][$valstybe][$va['dok_data']]['sandelis'][] = $va['sandelis']; 

                if(array_key_exists('kiekis', $buy[$valstybe][$va['dok_data']])){
                    $buy[$valstybe][$va['dok_data']]['kiekis'] += $va['kiekis'];
                }else{
                    $buy[$valstybe][$va['dok_data']]['kiekis'] = $va['kiekis'];
                }
                //VISO
                $buy['viso'][$va['dok_data']]['data'] = $va['dok_data']; 
                //$buy[$id]['viso'][$va['dok_data']]['sandelis'][] = $va['sandelis']; 

                if(array_key_exists('kiekis', $buy['viso'][$va['dok_data']])){
                    $buy['viso'][$va['dok_data']]['kiekis'] += $va['kiekis'];
                }else{
                    $buy['viso'][$va['dok_data']]['kiekis'] = $va['kiekis'];
                }
            }
        }

        if(array_key_exists('viso', $buy)){
            ksort($buy['viso']);  
            $buy['viso'] = array_values($buy['viso']);
    }

        if(array_key_exists('LT', $buy)){
                ksort($buy['LT']);  
                $buy['LT'] = array_values($buy['LT']);
        }
        
        if(array_key_exists('LV', $buy)){
                ksort($buy['LV']);  
                $buy['LV'] = array_values($buy['LV']);
        }

$grouped = array();
$grouped2 = array();
$grouped3 = array();
        return response()->json([
            'data' => array(
                'pardavimai' => $key[0], 
                'likutis' => $key[1]
            ),
            'likutis' => $grouped,
            'likutis2' => $grouped2,
            'likutis3' => $grouped3,
            'buy' => $buy
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
