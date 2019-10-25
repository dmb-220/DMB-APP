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
        $store = array(
            "LT" => array("MINS", "TELS", "MADA", "MARI", "UKME", "MOLA", "NORF", "BIGA", "BABI", "UTEN", "MANT", "VISA", "KEDA",
             "AREN", "MAXI", "PANE", "KREV", "MAZE", "TAIK", "SAUL", "TAUB"),
            "LV" => array("KULD", "BRIV", "DITO", "MATI", "OGRE", "TAL2", "TUKU", "VALD", "VENT", "AIZK", "DAUG", "LIMB", "MELN",
            "PRUS", "SALD", "VALM",  "ALUK", "BALV", "CESI", "DOBE", "GOBA", "JEKA", "LIEP", "SIGU", "MADO"),
            "EE" => array("Johvi", "Mustamäe", "Narva", "Rakvere", "Sopruse", "Võru 55 Tartu", "Ümera",
            "Eden", "Haapsalu", "Kohtla Järve", "Kopli", "Parnu", "Riia Parnu"),
        );

        $duomenys = array();
        $sandeliai = array();

        //$rikiuoti = 0;
        $sandelis = "TELS";

        //$sand = Likutis::distinct()->pluck('sandelis');

        $pardavimai = Pardavimai::query()
            ->where('sandelis', $sandelis)
            ->where('kiekis','>','0')
            ->get();

        $likuciai = Likutis::query()
            ->where('sandelis', $sandelis)
            ->where('kiekis','>','0')
            ->get();

            /*foreach ( $pardavimai as $value ) {
                if($rikiuoti){
                    $pardavimas[$value['preke']] = $value;
                }else{
                    $a = explode("-", $value['preke']);
                    if(count($a) == 3){$ne = $a[0]."-".$a[1]."-";}
                    if(count($a) == 2){$ne = $a[0]."-";}
                    //turi veikti tik su BROK
                    if(count($a) == 1){$ne = preg_replace('#[0-9 ]*#', '', $a[0]);}
                    //$ne = $a[0]."-";
                    $pardavimas[$ne][] = $value;
                }
            }*/

            //sudejom i grupes
            foreach ( $pardavimai as $value ) {
                if($value['registras'] != "PERS"){
                    $pardavimas[$value['pavadinimas']][] = $value;
                }
            }

            foreach ( $likuciai as $value ) {
                $likutis[$value['pavadinimas']][] = $value;
            }

            foreach ( $pardavimas as $idx => $val ){
                $duomenys[$idx]['pavadinimas'] = $pardavimas[$idx][0]['pavadinimas'];
                //$duomenys[$idx]['pardavimai'] = $pardavimas[$idx];

                $duomenys[$idx]['pardavimai_sk'] = 0;
                //skaiciuojam kiek is viso yra
                foreach($val as $res){
                    $duomenys[$idx]['pardavimai_sk'] = $duomenys[$idx]['pardavimai_sk'] + $res['kiekis'];
                    $a = explode("-", $res['preke']);
                    if(count($a) == 3){$ne = $a[0]."-".$a[1]."-";}
                    if(count($a) == 2){$ne = $a[0]."-";}
                    //turi veikti tik su BROK
                    if(count($a) == 1){$ne = preg_replace('#[0-9 ]*#', '', $a[0]);}
                    $duomenys[$idx]['grupe']['pardavimai'][$ne]['pavadinimas'] = $ne;
                    $duomenys[$idx]['grupe']['pardavimai'][$ne][] = $res;
                }
            }

            foreach ( $likutis as $idx => $val ){
                $duomenys[$idx]['pavadinimas'] = $likutis[$idx][0]['pavadinimas'];
                //$duomenys[$idx]['likuciai'] = $likutis[$idx];
                
                $duomenys[$idx]['likutis_sk'] = 0;
                //skaiciuojam kiek is viso yra
                foreach($val as $res){
                    $duomenys[$idx]['likutis_sk'] = $duomenys[$idx]['likutis_sk'] + $res['kiekis'];
                    $a = explode("-", $res['preke']);
                    if(count($a) == 3){$ne = $a[0]."-".$a[1]."-";}
                    if(count($a) == 2){$ne = $a[0]."-";}
                    //turi veikti tik su BROK
                    if(count($a) == 1){$ne = preg_replace('#[0-9 ]*#', '', $a[0]);}
                    $duomenys[$idx]['grupe']['likuciai'][$ne]['pavadinimas'] = $ne;
                    $duomenys[$idx]['grupe']['likuciai'][$ne]['sarasas'][] = $res;
                }

                $duomenys[$idx]['grupe']['likuciai'] = array_values($duomenys[$idx]['grupe']['likuciai']);
                $duomenys[$idx]['grupe']['pardavimai'] = array_values($duomenys[$idx]['grupe']['pardavimai']);
            }

            $duomenys = array_values($duomenys);

            return response()->json([
                'status' => true,
                'duomenys' => $duomenys,
                'store' => $store
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
