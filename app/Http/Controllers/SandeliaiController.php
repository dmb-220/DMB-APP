<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pardavimai;
use App\Likutis;
use App\Akcijos;


class SandeliaiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $store = (object) array(
            "LT" => (object) array("MINS", "TELS", "MADA", "MARI", "UKME", "MOLA", "NORF", "BIGA", "BABI", "UTEN", "MANT", "VISA", "KEDA", "AREN", "MAXI", "PANE", "KREV", "MAZE", "TAIK", "SAUL", "TAUB", "INTE"),
            "LV" => (object) array("KULD", "BRIV", "DITO", "MATI", "OGRE", "TAL2", "TUKU", "VALD", "VENT", "AIZK", "DAUG", "LIMB", "MELN", "PRUS", "SALD", "VALM",  "ALUK", "BALV", "CESI", "DOBE", "GOBA", "JEKA", "LIEP", "SIGU", "MADO", "INTE"),
            "EE" => (object) array("Johvi", "Mustamäe", "Narva", "Rakvere", "Sopruse", "Võru 55 Tartu", "Ümera", "Eden", "Haapsalu", "Kohtla Järve", "Kopli", "Parnu", "Riia Parnu"),
        );
        $store2 = array(
            "LT" => array("MINS", "TELS", "MADA", "MARI", "UKME", "MOLA", "NORF", "BIGA", "BABI", "UTEN", "MANT", "VISA", "KEDA", "AREN", "MAXI", "PANE", "KREV", "MAZE", "TAIK", "SAUL", "TAUB", "INTE"),
            "LV" => array("KULD", "BRIV", "DITO", "MATI", "OGRE", "TAL2", "TUKU", "VALD", "VENT", "AIZK", "DAUG", "LIMB", "MELN","PRUS", "SALD", "VALM",  "ALUK", "BALV", "CESI", "DOBE", "GOBA", "JEKA", "LIEP", "SIGU", "MADO", "INTE"),
            "EE" => array("Johvi", "Mustamäe", "Narva", "Rakvere", "Sopruse", "Võru 55 Tartu", "Ümera", "Eden", "Haapsalu", "Kohtla Järve", "Kopli", "Parnu", "Riia Parnu"),
        );

        $failas = "sandelis.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $myfile = fopen(storage_path($failas), "r");
        $key = fread($myfile,filesize(storage_path($failas)));
        fclose($myfile);

        $key = explode("||", $key);
        $valstybe = ''; $va = '';
        if($key[1]){$valstybe = "LT"; $va = 1;}
        if($key[2]){$valstybe = "LV"; $va = 2;}
        if($key[3]){$valstybe = "EE"; $va = 3;}

        $duomenys = array();
        $sandeliai = array();
        $pardavimas = array();
        $likutis = array();

        //$rikiuoti = 0;
        if($valstybe){
            $sandelis = $store2[$valstybe][$key[0]];
        }else{
            $sandelis = '';
        }

        $pardavimai = Pardavimai::query()
            ->where('sandelis', $sandelis)
            ->where('salis', $va)
            ->where('kiekis','>','0')
            ->get();

        $likuciai = Likutis::query()
            ->where('sandelis', $sandelis)
            ->where('salis', $va)
            ->where('kiekis','>','0')
            ->get();

            //sudejom i grupes
            //reik isfiltruoti tarpus
            foreach ( $pardavimai as $value ) {
                if($value['registras'] != "PERS"){
                    $p = str_replace(' ', '', $value['pavadinimas']);
                    $pardavimas[$p][] = $value;
                }
            }

            foreach ( $likuciai as $value ) {
                $p = str_replace(' ', '', $value['pavadinimas']);
                $likutis[$p][] = $value;
            }

            foreach ( $likutis as $idx => $val ){
                $duomenys[$idx]['pavadinimas'] = $likutis[$idx][0]['pavadinimas'];
                //$duomenys[$idx]['likuciai'] = $likutis[$idx];
                
                $duomenys[$idx]['likutis_sk'] = 0;
                //skaiciuojam kiek is viso yra
               //$duomenys[$idx]['likutis_sk'] = 0;
                //$duomenys[$idx]['pardavimai_sk'] = 0;
                foreach($val as $res){
                    $duomenys[$idx]['likutis_sk'] = $duomenys[$idx]['likutis_sk'] + $res['kiekis'];
                    $a = explode("-", $res['preke']);
                    if(count($a) >= 3){$ne = $a[0]."-".$a[1]."-";}
                    if(count($a) == 2){$ne = $a[0]."-";}
                    //turi veikti tik su BROK
                    if(count($a) == 1){$ne = preg_replace('#[0-9 ]*#', '', $a[0]);}
                    $duomenys[$idx]['grupe'][$ne]['pavadinimas'] = $ne;
                    if(!array_key_exists('lik_sk', $duomenys[$idx]['grupe'][$ne])){
                        $duomenys[$idx]['grupe'][$ne]['lik_sk'] = 0;
                    }
                    $duomenys[$idx]['grupe'][$ne]['lik_sk'] = $duomenys[$idx]['grupe'][$ne]['lik_sk'] + $res['kiekis'];
                    //$duomenys[$idx]['grupe'][$ne]['likuciai'][] = $res;
                    $duomenys[$idx]['grupe'][$ne]['list'][$res['preke']]["lik_kiekis"] = $res['kiekis'];
                    $duomenys[$idx]['grupe'][$ne]['list'][$res['preke']]["preke"] = $res['preke'];
                }
                
                //$duomenys[$idx]['grupe'][$ne]['list'][$res['preke']] = array_values($duomenys[$idx]['grupe'][$ne]['list'][$res['preke']]);
            }


            foreach ( $pardavimas as $idx => $val ){
                $duomenys[$idx]['pavadinimas'] = $pardavimas[$idx][0]['pavadinimas'];
                //$duomenys[$idx]['pardavimai'] = $pardavimas[$idx];

                
                //skaiciuojam kiek is viso yra
                foreach($val as $res){
                    $duomenys[$idx]['pardavimai_sk'] = 0;
                    $duomenys[$idx]['pardavimai_sk'] = $duomenys[$idx]['pardavimai_sk'] + $res['kiekis'];
                    $a = explode("-", $res['preke']);
                    if(count($a) >= 3){$ne = $a[0]."-".$a[1]."-";}
                    if(count($a) == 2){$ne = $a[0]."-";}
                    //turi veikti tik su BROK
                    if(count($a) == 1){$ne = preg_replace('#[0-9 ]*#', '', $a[0]);}
                    $duomenys[$idx]['grupe'][$ne]['pavadinimas'] = $ne;
                    if(!array_key_exists('pard_sk', $duomenys[$idx]['grupe'][$ne])){
                        $duomenys[$idx]['grupe'][$ne]['pard_sk'] = 0;
                    }
                    $duomenys[$idx]['grupe'][$ne]['pard_sk'] = $duomenys[$idx]['grupe'][$ne]['pard_sk'] + $res['kiekis'];
                    //$duomenys[$idx]['grupe'][$ne]['pardavimai'][] = $res;
                    $duomenys[$idx]['grupe'][$ne]['list'][$res['preke']]["pard_kiekis"] = $res['kiekis'];
                    $duomenys[$idx]['grupe'][$ne]['list'][$res['preke']]["preke"] = $res['preke'];
                }
                //$duomenys[$idx]['grupe'] = array_values($duomenys[$idx]['grupe']);
            }

            foreach($duomenys as $idx => $val){
                foreach($val['grupe'] as $id => $res){
                    $duomenys[$idx]['grupe'][$id]['list'] = array_values($duomenys[$idx]['grupe'][$id]['list']);
                }
                $duomenys[$idx]['grupe'] = array_values($duomenys[$idx]['grupe']);
           }

            //prasukti cikla ir sujungti pirkimus su pardavimais

            $duomenys = array_values($duomenys);

            $arr = array("LT" => $key[1], "LV" => $key[2], "EE" => $key[3]);

            return response()->json([
                'status' => true,
                'salis' =>  $arr,
                'duomenys' => $duomenys,
                'store' => $store,
                //'likutis' => $likutis
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
        //$ieskoti = $data['ieskoti'];
        $lt = $data['lt'];
        $lv = $data['lv'];
        $ee = $data['ee'];
        $sandelis = $data['sandelis'];
        //$rikiuoti = $data['rikiuoti'];
        //$gam = $data['gam'];
        //$pirk = $data['pirk'];
        //$paieska_big= $data['paieska_big'];

        $failas = "sandelis.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $eilute = $sandelis."||".$lt."||".$lv."||".$ee;

        $myfile = fopen(storage_path($failas), "w");
        fwrite($myfile, $eilute);
        fclose($myfile);

        return response()->json([
            'status' => true,
            'data' => $sandelis,
            //'rikiuoti' => $rikiuoti,
            //'gam' => $gam,
            //'pirk' => $pirk,
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
