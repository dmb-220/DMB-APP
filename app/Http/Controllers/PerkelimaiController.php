<?php

namespace App\Http\Controllers;

use App\Perkelimai;

use App\Pardavimai;
use App\Likutis;
use App\Akcijos;
use App\Atsargos;

use Illuminate\Http\Request;

class PerkelimaiController extends Controller
{
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

        $failas = "perkelimai.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $myfile = fopen(storage_path($failas), "r");
        $key = fread($myfile,filesize(storage_path($failas)));
        fclose($myfile);

        // $eilute = strtoupper($ieskoti)."||".$sandeliai."||".$rikiuoti."||".$gam."||".$pirk."||".$paieska_big."||".$grupe;
        $key = explode("||", $key);
        $keyword = $key[0];
        $sand = $key[1];
        //$rikiuoti = $key[2];
        $rikiuoti = $key[2];
        $gam = $key[3];
        $pirk = $key[4];
        $grupe = $key[6];
        $perkelti = $key[7];
        $date = $key[8];
        

        $pardavimas = array();
        $likutis = array();

        //pasiziurim kokie sandeliai ivesti
        //nustatom tuscia masyva, jei kartais nebutu ivesti duomenys
        //$sand = "NORF::MARI::KEDA";
        $exp = array();
        if($sand){
            $exp = explode("::", $sand);
        }

        //jei nera ivestas paieskos raktazodis, nustatyti pradini
        //jei grupe nustatyta, tada galima buti ir tuscias
        if($grupe == 0){
            if($keyword == ""){
                $keyword = "DM-";
            }
        }

        //paieska, paprasta, isplestine
        if($key[5]){
            $pa = "%{$keyword}%";
        }else{
            $pa = "{$keyword}%";
        }

        //reikia issitraukti GRUPIU pavadinimus, pagal kuriuos galetų filtruoti
        //traukiam grupes pagal LT, pagal LV gali buti papildomai

        $grupes_likutis = array();
        $grupes_pardavimai = array();
         //Geriausia butu susivesti tas grupes i masyva ir viskas.
         $gru = Likutis::select('pavadinimas', 'salis')
         ->where('kiekis','>','0')
         ->distinct()->get();
         foreach ( $gru as $value ) {
             if(!in_array($value, $grupes_likutis) && $value['salis'] == 1){
                 $grupes_likutis[] = $value['pavadinimas'];
             }
         }
 
         $gru = Pardavimai::select('pavadinimas','registras', 'salis')
         ->where('kiekis','>','0')
         ->distinct()->get();
         
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

        //$grupes = Perkelimai::grupiu_sarasas();

        //istraukiam likucius ir pardavimus
        //miestu is kuriu norime perkelti
        $list = array();

        $query_p = Pardavimai::query();
        $query_p->where('preke', 'like', $pa);
        if($grupe != 0 && $grupes[$grupe]){
            $query_p->whereIn('pavadinimas',[$grupes[$grupe], $sara[$grupes[$grupe]]]);
        }
        $query_p->whereIn('sandelis', $exp);
        $query_p->when(!$gam, function ($q) {
            return $q->where('registras', "GAM");
        });
        $query_p->when(!$pirk, function ($q) {
            return $q->where('registras', "PIRK");
        });
        $res = $query_p->get();
        foreach ( $res as $value ) {
            $ne = $value['preke'];
                
            $list[$value['sandelis']][$ne]['preke'] = $ne;
            if(array_key_exists("parduota", $list[$value['sandelis']][$ne])){
                $list[$value['sandelis']][$ne]['parduota'] += $value['kiekis'];
            }else{
                $list[$value['sandelis']][$ne]['parduota'] = $value['kiekis'];
            }
            $list[$value['sandelis']][$ne]['sandelis'] = $value['sandelis'];
            $list[$value['sandelis']][$ne]['pavadinimas'] = $value['pavadinimas'];
            $list[$value['sandelis']][$ne]['registras'] = $value['registras'];
            $list[$value['sandelis']][$ne]['salis'] = $value['salis'];
        }

        //Sudedam norimus likucius
        $query_p = Likutis::query();
        $query_p->where('preke', 'like', $pa);
        if($grupe != 0 && $grupes[$grupe]){
            $query_p->whereIn('pavadinimas',[$grupes[$grupe], $sara[$grupes[$grupe]]]);
        }
        $query_p->whereIn('sandelis', $exp);
        $query_p->when(!$gam, function ($q) {
            return $q->where('registras', "GAM");
        });
        $query_p->when(!$pirk, function ($q) {
            return $q->where('registras', "PIRK");
        });
        $re = $query_p->get();

        
        foreach ( $re as $value ) {
            $ne = $value['preke'];
    
            if(array_key_exists($value['sandelis'], $list)){
            if(array_key_exists($ne, $list[$value['sandelis']])){
                if(array_key_exists("likutis", $list[$value['sandelis']][$ne])){
                    $list[$value['sandelis']][$ne]['likutis'] += $value['kiekis'];
                }else{
                    $list[$value['sandelis']][$ne]['likutis'] = $value['kiekis'];
                }
            }else{

                $list[$value['sandelis']][$ne]['preke'] = $ne;
                //JEINERA PARDAVIME UZKELTO PREKES KODO,
                //SKAICIUOJAM CIA LIKUTI
                if(array_key_exists("likutis", $list[$value['sandelis']][$ne])){
                    $list[$value['sandelis']][$ne]['likutis'] += $value['kiekis'];
                }else{
                    $list[$value['sandelis']][$ne]['likutis'] = $value['kiekis'];
                }
                //SUDEDAM REIKIAMA INFORMACIJA      
                $list[$value['sandelis']][$ne]['sandelis'] = $value['sandelis'];
                $list[$value['sandelis']][$ne]['pavadinimas'] = $value['pavadinimas'];
                $list[$value['sandelis']][$ne]['registras'] = $value['registras'];
                $list[$value['sandelis']][$ne]['salis'] = $value['salis'];
            }
        }
        }

        //pasiimam duomenis i kuri norima perkelti
        $sande = array();
        $query_p = Pardavimai::query();
        $query_p->where('preke', 'like', $pa);
        if($grupe != 0 && $grupes[$grupe]){
            $query_p->whereIn('pavadinimas',[$grupes[$grupe], $sara[$grupes[$grupe]]]);
        }
        $query_p->where('sandelis', $perkelti);
        $query_p->when(!$gam, function ($q) {
            return $q->where('registras', "GAM");
        });
        $query_p->when(!$pirk, function ($q) {
            return $q->where('registras', "PIRK");
        });
        $res = $query_p->get();
        foreach ( $res as $value ) {
            $ne = $value['preke'];
                
            $sande[$ne]['preke'] = $ne;
            if(array_key_exists("parduota", $sande[$ne])){
                $sande[$ne]['parduota'] += $value['kiekis'];
            }else{
                $sande[$ne]['parduota'] = $value['kiekis'];
            }
            $sande[$ne]['sandelis'] = $value['sandelis'];
            $sande[$ne]['pavadinimas'] = $value['pavadinimas'];
            $sande[$ne]['registras'] = $value['registras'];
            $sande[$ne]['salis'] = $value['salis'];
        }

        //Sudedam norimus likucius
        $query_p = Likutis::query();
        $query_p->where('preke', 'like', $pa);
        if($grupe != 0 && $grupes[$grupe]){
            $query_p->whereIn('pavadinimas',[$grupes[$grupe], $sara[$grupes[$grupe]]]);
        }
        $query_p->where('sandelis', $perkelti);
        $query_p->when(!$gam, function ($q) {
            return $q->where('registras', "GAM");
        });
        $query_p->when(!$pirk, function ($q) {
            return $q->where('registras', "PIRK");
        });
        $re = $query_p->get();

        
        foreach ( $re as $value ) {
            $ne = $value['preke'];
            if(array_key_exists($ne, $sande)){
                if(array_key_exists("likutis", $sande[$ne])){
                    $sande[$ne]['likutis'] += $value['kiekis'];
                }else{
                    $sande[$ne]['likutis'] = $value['kiekis'];
                }
            }else{

                $sande[$ne]['preke'] = $ne;
                //JEINERA PARDAVIME UZKELTO PREKES KODO,
                //SKAICIUOJAM CIA LIKUTI
                if(array_key_exists("likutis", $sande[$ne])){
                    $sande[$ne]['likutis'] += $value['kiekis'];
                }else{
                    $sande[$ne]['likutis'] = $value['kiekis'];
                }
                //SUDEDAM REIKIAMA INFORMACIJA      
                $sande[$ne]['sandelis'] = $value['sandelis'];
                $sande[$ne]['pavadinimas'] = $value['pavadinimas'];
                $sande[$ne]['registras'] = $value['registras'];
                $sande[$ne]['salis'] = $value['salis'];
            }
        }

        $ats = array();
        $qu = Atsargos::query();
        $qu->where('preke', 'like', $pa);
        //$qu->where('data', '>', '2020');
        $qu->whereIn('sandelis_i', $exp);
        if($grupe != 0 && $grupes[$grupe]){
            $qu->whereIn('pavadinimas',[$grupes[$grupe], $sara[$grupes[$grupe]]]);
        }
        $qu->when(!$gam, function ($q) {
            return $q->where('registras', "GAM");
        });
        $qu->when(!$pirk, function ($q) {
            return $q->where('registras', "PIRK");
        });
        $atsargos = $qu->get();
        //reik leisti paimti duomenis tiks tiems sandeliams i kuriuos isveza.
        //reiks masyva isikelti is statistikos
        foreach ( $atsargos as $value ) {
            $ne = $value['preke'];
            $ats[$value['sandelis_i']][$ne]['preke'] = $ne;
            $ats[$value['sandelis_i']][$ne]['data'] = $value['data'];
            $ats[$value['sandelis_i']][$ne]['kiekis'] = $value['kiekis'];
        }

        
        //SKAICIUOJAM s kur ir kiek perkelti
        $sold = array();
        foreach($list as $ke => $value){
            //$kk[] = $ke; 
            foreach($value as $val){
                if(array_key_exists('parduota', $val)){
                    $parduota = $val['parduota'];
                }else{
                    $parduota = 0;
                }
                if(array_key_exists('likutis', $val)){
                    $likutis = $val['likutis'];
                }else{
                    $likutis = 0;
                }

                //reik patikrinti ar perkelimo data yra sena ar nauja
                //nustatyti 1-2 menesiu nereguoti.
                if($likutis != 0){
                    //nustatom salygas, pagal kurias sudedam i masyva
                    //tikrinam kokie kiekiai parduotuvėse is kuriu perkelti norime

                    //PIRK tinka, GAM reikia isjungti
                    //if($parduota < 3 && $likutis >= 5){
                        //tikrinamam kokie kiekiai yra parduotuveje i kuria norime perkelti
                        //jei patys neisprekiave, nereikia  kelti

                        if(array_key_exists($val['preke'], $sande)){
                            //patikrinam data, ar senai perkelta
                            if(array_key_exists($ke, $ats)){
                                if(array_key_exists($val['preke'], $ats[$ke])){
                                        $sold[$val['preke']."|-|".$ke]['data'] = $ats[$ke][$val['preke']]['data'];
                                        $sold[$val['preke']."|-|".$ke]['kiekis'] = $ats[$ke][$val['preke']]['kiekis'];
                                    }
                                }
    
                            //mazai parduota, didelis likutis
                            $sold[$val['preke']."|-|".$ke]['preke'] = $val['preke'];
                            $sold[$val['preke']."|-|".$ke]['sandelis'] = $ke;
                            $sold[$val['preke']."|-|".$ke]['likutis'] = $likutis;
                            $sold[$val['preke']."|-|".$ke]['parduota'] = $parduota;
                            if(array_key_exists('likutis',  $sande[$val['preke']])){
                                $sold[$val['preke']."|-|".$ke]['yra'] = $sande[$val['preke']]['likutis'];
                            }else{
                                $sold[$val['preke']."|-|".$ke]['yra'] = 0;
                            }
                            if(array_key_exists('parduota',  $sande[$val['preke']])){
                                $sold[$val['preke']."|-|".$ke]['pard'] = $sande[$val['preke']]['parduota'];
                            }else{
                                $sold[$val['preke']."|-|".$ke]['pard'] = 0;
                            }
                        }else{
                            $sold[$val['preke']."|+|".$ke]['preke'] = $val['preke'];
                            $sold[$val['preke']."|+|".$ke]['sandelis'] = $ke;
                            $sold[$val['preke']."|+|".$ke]['likutis'] = $likutis;
                            $sold[$val['preke']."|+|".$ke]['parduota'] = $parduota;

                            if(array_key_exists($ke, $ats)){
                                if(array_key_exists($val['preke'], $ats[$ke])){
                                    $sold[$val['preke']."|+|".$ke]['data'] = $ats[$ke][$val['preke']]['data'];
                                    $sold[$val['preke']."|+|".$ke]['kiekis'] = $ats[$ke][$val['preke']]['kiekis'];
                                }
                            }
                        }
                    //}
                }
            }
        }


        //$pardavimas = array_values($pardavimas);
        $sold = array_values($sold);
        //filtruojam pagal nustatyta data
        //kad neitrauktu nauju perkelimu
        $so = array();
        foreach($sold as $val){
            if(array_key_exists('data', $val)){
            if($date >= $val['data']){
                $so[] = $val; 
            }
        }else{           
                $so[] = $val; 
        }
    }

       return response()->json([
            'status' => true,
            'paieska' => $keyword,
            'grupes' => $grupes,
            'grupes_lv' => $sara,
            'grupe' => $grupe,
            'date' => $date,
            'list' => $sold,
            //'sande' => $sande,
            'sold' => $so,
            //'kk' => $kk,
            'rikiuoti' => $rikiuoti,
            'gam' => $gam,
            'pirk' => $pirk,
            'paieska_big' => $key[5],
            'sandeliai' => $sand,
            'atsargos' => $ats,
            'perkelti' => $perkelti
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
        $rikiuoti = $data['rikiuoti'];
        $gam = $data['gam'];
        $pirk = $data['pirk'];
        $paieska_big= $data['paieska_big'];
        $grupe= $data['grupe'];
        $sandeliai = $data['sandeliai'];
        $perkelti = $data['perkelti'];
        $date = $data['date'];

        $failas = "perkelimai.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $eilute = strtoupper($ieskoti)."||".strtoupper($sandeliai)."||".$rikiuoti."||".$gam."||".$pirk."||".$paieska_big."||".$grupe."||".$perkelti."||".$date;

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
     * @param  \App\Perkelimai  $perkelimai
     * @return \Illuminate\Http\Response
     */
    public function show(Perkelimai $perkelimai)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Perkelimai  $perkelimai
     * @return \Illuminate\Http\Response
     */
    public function edit(Perkelimai $perkelimai)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Perkelimai  $perkelimai
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Perkelimai $perkelimai)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Perkelimai  $perkelimai
     * @return \Illuminate\Http\Response
     */
    public function destroy(Perkelimai $perkelimai)
    {
        //
    }
}
