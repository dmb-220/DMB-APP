<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Likutis;

class LikutisController extends Controller
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
        $failas = "likutis.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $myfile = fopen(storage_path($failas), "r");
        $key = fread($myfile,filesize(storage_path($failas)));
        fclose($myfile);

        $key = explode("||", $key);
        $keyword = $key[0];

        $rikiuoti = $key[4];

        $grupes['LT'] = array();
        $grupes['LV'] = array();
        $grupes['EE'] = array();

        //$grupes= Likutis::distinct()->pluck('pavadinimas');
        $gru = Likutis::select('pavadinimas', 'salis')->distinct()->get();
        foreach ( $gru as $value ) {
            if(!in_array($value, $grupes['LT']) && $value['salis'] == 1){
                $grupes['LT'][] = $value['pavadinimas'];
            }
            if(!in_array($value, $grupes['LV']) && $value['salis'] == 2){
                $grupes['LV'][] = $value['pavadinimas'];
            }
            if(!in_array($value, $grupes['EE']) && $value['salis'] == 3){
                $grupes['EE'][] = $value['pavadinimas'];
            }
        }

        $re = Likutis::query()
        ->where('preke', 'like', "{$keyword}%")->get();

        foreach ( $re as $value ) {    
            if($value['sandelis'] != "BROK" && $value['sandelis'] != "ESTI" && $value['sandelis'] != "4444"
             && $value['sandelis'] != "TELSIAI" && $value['sandelis'] != "1111" && $value['sandelis'] != "SAND"){

               if($rikiuoti){
                $likutis[$value['preke']][] = $value;
            }else{
                $a = explode("-", $value['preke']);
                $ne = $a[0]."-".$a[1]."-";
                $likutis[$ne][] = $value;
            }

            }
        }

        //$i=0;
        $lt_viso = 0;
        $lv_viso = 0;
        $ee_viso = 0;
        foreach ( $likutis as $idx => $value ) {
            $likuciai[$idx]['preke'] = $idx;
            $likuciai[$idx]['pavadinimas'] = $value[0]['pavadinimas'];

            $likuciai[$idx]['LT'] = array();
            $likuciai[$idx]['LV'] = array();
            $likuciai[$idx]['EE'] = array();
            foreach($value as $val){
                if($val['salis'] == 1){
                    if(array_key_exists($val['sandelis'], $likuciai[$idx]['LT'])){
                        $kiek = $likuciai[$idx]['LT'][$val['sandelis']]['kiekis'];
                    }else{
                        $kiek = 0;
                    }
                    $likuciai[$idx]['LT'][$val['sandelis']] = array('sandelis' => $val['sandelis'], 'kiekis' => $val['kiekis'] + $kiek);
                    $lt_viso = $lt_viso + $val['kiekis'];
                    $likuciai[$idx]['LT_viso'] = $lt_viso;
                }
                if($val['salis'] == 2){
                    if(array_key_exists($val['sandelis'], $likuciai[$idx]['LV'])){
                        $kiek = $likuciai[$idx]['LV'][$val['sandelis']]['kiekis'];
                    }else{
                        $kiek = 0;
                    }
                    $likuciai[$idx]['LV'][$val['sandelis']] = array('sandelis' => $val['sandelis'], 'kiekis' => $val['kiekis'] + $kiek);
                    $lv_viso = $lv_viso + $val['kiekis'];
                    $likuciai[$idx]['LV_viso'] = $lv_viso;
                }
                if($val['salis'] == 3){
                    if(array_key_exists($val['sandelis'], $likuciai[$idx]['EE'])){
                        $kiek = $likuciai[$idx]['EE'][$val['sandelis']]['kiekis'];
                    }else{
                        $kiek = 0;
                    }
                    $likuciai[$idx]['EE'][$val['sandelis']] = array('sandelis' => $val['sandelis'], 'kiekis' => $val['kiekis'] + $kiek);
                    $ee_viso = $ee_viso + $val['kiekis'];
                    $likuciai[$idx]['EE_viso'] = $ee_viso;
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

        $likuciai = array_values($likuciai);

        $arr = array("LT" => $key[1], "LV" => $key[2], "EE" => $key[3]);
        return response()->json([
            'status' => true,
            'prekes' => $likuciai,
            'grupes' => $grupes,
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

        $failas = "likutis.txt";
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
