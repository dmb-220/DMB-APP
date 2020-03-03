<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Pardavimai;
use App\Likutis;
use App\Akcijos;

class AnalizeController extends Controller
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

        $failas = "analize.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $myfile = fopen(storage_path($failas), "r");
        $key = fread($myfile,filesize(storage_path($failas)));
        fclose($myfile);

        // $eilute = strtoupper($ieskoti)."||".$sandeliai."||".$rikiuoti."||".$gam."||".$pirk."||".$paieska_big."||".$grupe;
        $key = explode("||", $key);
        $keyword = $key[0];
        $sand = $key[1];
        $rikiuoti = $key[2];
        $gam = $key[3];
        $pirk = $key[4];
        $grupe = $key[6];

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
        $query_p->whereIn('sandelis', $exp);
        $query_p->when(!$gam, function ($q) {
            return $q->where('registras', "GAM");
        });
        $query_p->when(!$pirk, function ($q) {
            return $q->where('registras', "PIRK");
        });
        $res = $query_p->get();
        foreach ( $res as $value ) {
                $pardavimas[$value['preke'].'|-|'.$value['sandelis']]['preke'] = $value['preke'];
                $pardavimas[$value['preke'].'|-|'.$value['sandelis']]['parduota'] = $value['kiekis'];
                $pardavimas[$value['preke'].'|-|'.$value['sandelis']]['sandelis'] = $value['sandelis'];
                $pardavimas[$value['preke'].'|-|'.$value['sandelis']]['pavadinimas'] = $value['pavadinimas'];
                $pardavimas[$value['preke'].'|-|'.$value['sandelis']]['registras'] = $value['registras'];
                $pardavimas[$value['preke'].'|-|'.$value['sandelis']]['salis'] = $value['salis'];
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
            if(array_key_exists($value['preke'].'|-|'.$value['sandelis'], $pardavimas)){
                $pardavimas[$value['preke'].'|-|'.$value['sandelis']]['likutis'] = $value['kiekis'];
                $pardavimas[$value['preke'].'|-|'.$value['sandelis']]['kaina'] = $value['kaina'];
            }else{
                $pardavimas[$value['preke'].'|-|'.$value['sandelis']]['preke'] = $value['preke'];
                $pardavimas[$value['preke'].'|-|'.$value['sandelis']]['sandelis'] = $value['sandelis'];
                //$pardavimas[$value['preke'].'|-|'.$value['sandelis']]['parduota'] = 0;
                $pardavimas[$value['preke'].'|-|'.$value['sandelis']]['likutis'] = $value['kiekis'];
                $pardavimas[$value['preke'].'|-|'.$value['sandelis']]['kaina'] = $value['kaina'];
                $pardavimas[$value['preke'].'|-|'.$value['sandelis']]['pavadinimas'] = $value['pavadinimas'];
                $pardavimas[$value['preke'].'|-|'.$value['sandelis']]['registras'] = $value['registras'];
                $pardavimas[$value['preke'].'|-|'.$value['sandelis']]['salis'] = $value['salis'];
            }
        }

        $pardavimas = array_values($pardavimas);

       return response()->json([
            'status' => true,
            'paieska' => $keyword,
            'grupes' => $grupes,
            'grupes_lv' => $sara,
            'grupe' => $grupe,
            'sarasas' => $pardavimas,
            'rikiuoti' => $rikiuoti,
            'gam' => $gam,
            'pirk' => $pirk,
            'paieska_big' => $key[5],
            'sandeliai' => $sand,
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

        $failas = "analize.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $eilute = strtoupper($ieskoti)."||".strtoupper($sandeliai)."||".$rikiuoti."||".$gam."||".$pirk."||".$paieska_big."||".$grupe;

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
