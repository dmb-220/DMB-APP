<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pardavimai;

class PardavimaiController extends Controller
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
        $sarasas = array(
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
            "Džemperis" => "Džemperis",
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
            "Lietpaltis" => "Mētelis",
            "Chalat.+ naktiniai" => "Halāts + naktskrekls",
            "Vaik. kojinės" => "Bēr. zeķes",
            "Vyr.kelnaitės" => "Vīr. apakšbikses",
            "Naktinai" => "Naktskrekls"
        ); 


        //pasidaryt kintamuosius is VUE kad pateiktu tik nurodyta valstybe
        //$keyword = 'DMK-';
        $failas = "pardavimai.txt";
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

        $grupes = array();

        $pardavimas = array();
        $pardavimai = array();

        $gru = Pardavimai::select('pavadinimas','registras', 'salis')->where('kiekis','>','0')->distinct()->get();
        foreach ( $gru as $value ) {
            if($value['registras'] != "PERS"){
            if(!in_array($value, $grupes) && $value['salis'] == 1){
                $grupes[] = $value['pavadinimas'];
            }
        }
        }
        //padarom isrykiavima
        sort($grupes);
        $g = array('Paieška tarp grupių išjungta');
        //i masyvo pradzia idedam grupes isjungima
        $grupes = $g + $grupes;

        $query_p = Pardavimai::query();
        $query_p->where('preke', 'like', $pa);
        if($grupe != 0 && $grupes[$grupe]){
            $query_p->whereIn('pavadinimas',[$grupes[$grupe], $sarasas[$grupes[$grupe]]]);
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
                if($rikiuoti){
                    $pardavimas[$value['preke']][] = $value;
                }else{
                    $a = explode("-", $value['preke']);
                    if(count($a) >= 3){$ne = $a[0]."-".$a[1]."-";}
                    if(count($a) == 2){$ne = $a[0]."-";}
                    //turi veikti tik su BROK
                    if(count($a) == 1){$ne = preg_replace('#[0-9 ]*#', '', $a[0]);}
                    $pardavimas[$ne][] = $value;
                }
            }
        }

        //$i=0;
        $lt_viso = 0;
        $lv_viso = 0;
        $ee_viso = 0;
        foreach ( $pardavimas as $idx => $value ) {
            $pardavimai[$idx]['preke'] = $idx;
            $pardavimai[$idx]['pavadinimas'] = $value[0]['pavadinimas'];

            $pardavimai[$idx]['LT'] = array();
            $pardavimai[$idx]['LV'] = array();
            $pardavimai[$idx]['EE'] = array();
            foreach($value as $val){
                if($val['salis'] == 1 && $key[1]){
                    if(array_key_exists($val['sandelis'], $pardavimai[$idx]['LT'])){
                        $kiek = $pardavimai[$idx]['LT'][$val['sandelis']]['kiekis'];
                    }else{
                        $kiek = 0;
                    }
                    $pardavimai[$idx]['LT'][$val['sandelis']] = array('sandelis' => $val['sandelis'], 'kiekis' => $val['kiekis'] + $kiek);
                    $lt_viso = $lt_viso + $val['kiekis'];
                    $pardavimai[$idx]['LT_viso'] = $lt_viso;
                }
                if($val['salis'] == 2 && $key[2]){
                    if(array_key_exists($val['sandelis'], $pardavimai[$idx]['LV'])){
                        $kiek = $pardavimai[$idx]['LV'][$val['sandelis']]['kiekis'];
                    }else{
                        $kiek = 0;
                    }
                    $pardavimai[$idx]['LV'][$val['sandelis']] = array('sandelis' => $val['sandelis'], 'kiekis' => $val['kiekis'] + $kiek);
                    $lv_viso = $lv_viso + $val['kiekis'];
                    $pardavimai[$idx]['LV_viso'] = $lv_viso;
                }
                if($val['salis'] == 3 && $key[3]){
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
            $pardavimai[$idx]['LT'] = array_values($pardavimai[$idx]['LT']);
            $pardavimai[$idx]['LV'] = array_values($pardavimai[$idx]['LV']);
            $pardavimai[$idx]['EE'] = array_values($pardavimai[$idx]['EE']);

            $pardavimai[$idx]['viso'] = $ee_viso + $lv_viso + $lt_viso;
            $lt_viso = 0;
            $lv_viso = 0;
            $ee_viso = 0;
            //$i++;
        }

        $pardavimai = array_values($pardavimai);


        $arr = array("LT" => $key[1], "LV" => $key[2], "EE" => $key[3]);
        return response()->json([
            'status' => true,
            'prekes' => $pardavimai,
            'grupes' => $grupes,
            'paieska' => $keyword,
            'rikiuoti' => $rikiuoti,
            'paieska_big' => $key[7],
            'grupe' => $grupe,
            'grupes_lv' => $sarasas,
            'salis' =>  $arr,
            'gam' => $gam,
            'pirk' => $pirk,
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

        $failas = "pardavimai.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $eilute = strtoupper($ieskoti)."||".$lt."||".$lv."||".$ee."||".$rikiuoti."||".$gam."||".$pirk."||".$paieska_big."||".$grupe;

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
