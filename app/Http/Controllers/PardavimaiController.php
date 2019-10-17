<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pardavimai;

class PardavimaiController extends Controller
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
        $failas = "pardavimai.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $myfile = fopen(storage_path($failas), "r");
        $key = fread($myfile,filesize(storage_path($failas)));
        fclose($myfile);

        $key = explode("||", $key);
        $keyword = $key[0];

        $rikiuoti = $key[4];

        $re = Pardavimai::query()
        ->where('preke', 'like', "{$keyword}%")->get();

        foreach ( $re as $value ) {
            if($value['sandelis'] != "TELSIAI"){
                if($rikiuoti){
                    $pardavimas[$value['preke']][] = $value;
                }else{
                    $a = explode("-", $value['preke']);
                    $ne = $a[0]."-".$a[1]."-";
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
            'paieska' => $keyword,
            'rikiuoti' => $rikiuoti,
            'salis' =>  $arr,
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

        $failas = "pardavimai.txt";
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
