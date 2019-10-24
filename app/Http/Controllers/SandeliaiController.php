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
        $duomenys = array();
        $list = array();

        $rikiuoti = 0;
        $sandelis = "TELS";

        $pardavimai = Pardavimai::query()
            ->where('sandelis', $sandelis)
            ->where('kiekis','>','0')->get();

        $likuciai = Likutis::query()
            ->where('sandelis', $sandelis)
            ->where('kiekis','>','0')->get();

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
                $pardavimas[$value['pavadinimas']][] = $value;
            }

            foreach ( $likuciai as $value ) {
                $likutis[$value['pavadinimas']][] = $value;
            }

            foreach ( $pardavimas as $idx => $val ){
                $duomenys[$idx]['pavadinimas'] = $pardavimas[$idx][0]['pavadinimas'];
                $duomenys[$idx]['pardavimai'] = $pardavimas[$idx];

                /*foreach($val as $res){
                    $duomenys[$idx]['pardavimas'][] = array('preke' => $res['preke'], 'kiekis' => $res['kiekis']);
                }*/
            }

            foreach ( $likutis as $idx => $val ){
                $duomenys[$idx]['pavadinimas'] = $likutis[$idx][0]['pavadinimas'];
                $duomenys[$idx]['likuciai'] = $likutis[$idx];

                /*foreach($val as $res){
                    $duomenys[$idx]['likutis'][] = array('preke' => $res['preke'], 'kiekis' => $res['kiekis']);
                }*/
            }


            $duomenys = array_values($duomenys);

            return response()->json([
                'status' => true,
                'duomenys' => $duomenys,
                'list' => $list
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
