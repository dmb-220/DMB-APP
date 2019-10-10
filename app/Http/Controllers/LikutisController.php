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

        $re = Likutis::query()
        ->where('preke', 'like', "{$keyword}%")->get();

        foreach ( $re as $value ) {
            if($value['sandelis'] != "BROK" && $value['sandelis'] != "ESTI"){
                $group2[$value['preke']][] = $value;
            }
        }

        $i=0;
        $lt_viso = 0;
        $lv_viso = 0;
        $ee_viso = 0;
        foreach ( $group2 as $idx => $value ) {
            $group[$i]['preke'] = $idx;
            foreach($value as $val){
                if($val['salis'] == 1){
                    $group[$i]['LT'][] = $val;
                    $lt_viso = $lt_viso + $val['kiekis'];
                    $group[$i]['LT_viso'] = $lt_viso;
                }
                if($val['salis'] == 2){
                    $group[$i]['LV'][] = $val;
                    $lv_viso = $lv_viso + $val['kiekis'];
                    $group[$i]['LV_viso'] = $lv_viso;
                }
                if($val['salis'] == 3){
                    $group[$i]['EE'][] = $val;
                    $ee_viso = $ee_viso + $val['kiekis'];
                    $group[$i]['EE_viso'] = $ee_viso;
                }
            }

            $group[$i]['viso'] = $ee_viso + $lv_viso + $lt_viso;
            $lt_viso = 0;
            $lv_viso = 0;
            $ee_viso = 0;
            $i++;
        }


        $arr = array("LT" => $key[1], "LV" => $key[2], "EE" => $key[3]);
        return response()->json([
            'status' => true,
            'prekes' => $group,
            'paieska' => $keyword,
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

        $failas = "likutis.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $eilute = strtoupper($ieskoti)."||".$lt."||".$lv."||".$ee;

        $myfile = fopen(storage_path($failas), "w");
        fwrite($myfile, $eilute);
        fclose($myfile);

        return response()->json([
            'status' => true,
            'data' => $ieskoti
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
