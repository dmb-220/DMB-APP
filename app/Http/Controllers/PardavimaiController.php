<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pardavimai;
use App\Likutis;

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
        $failas = "paieska.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $myfile = fopen(storage_path($failas), "r");
        $keyword = fread($myfile,filesize(storage_path($failas)));
        fclose($myfile);

        $re1 = Pardavimai::query()
        ->where('preke', 'like', "{$keyword}%")->get();
        $group = array();
        foreach ( $re1 as $value ) {
            if($value['sandelis'] != "3333" && $value['sandelis'] != "Braak"){
            $group[$value['sandelis']][] = $value;
            }
        }

        $re2 = Likutis::query()
        ->where('preke', 'like', "{$keyword}%")->get();
        $group2 = array();
        foreach ( $re2 as $value ) {
            $group2[$value['sandelis']][] = $value;
        }

        $da = array();
        $i=0;
        foreach ( $group as $idx => $value ) {
            if($idx != "TELSIAI"){
                if (array_key_exists($idx, $group)) {
                $sumDetail = 'kiekis';
                $totalVAT = array_reduce($value,
                function($runningTotal, $record) use($sumDetail) {
                $runningTotal += $record[$sumDetail];
                return $runningTotal;
                }, 0);

                if (array_key_exists($idx, $group2)) {
                $total = array_reduce($group2[$idx],
                function($runningTotal, $record) use($sumDetail) {
                $runningTotal += $record[$sumDetail];
                return $runningTotal;
                }, 0);
            }else{$total =0;}

                $da[$i]['sandelis'] = $idx;
                $da[$i]['parduota'] = $totalVAT;
                $da[$i]['likutis'] = $total;
                $da[$i]['viso'] = $total-($totalVAT*2);
                $da[$i]['prekes'] = $value;
                if (array_key_exists($idx, $group2)) {
                    $da[$i]['likut'] = $group2[$idx];
                }
                $i++;
            }
            }
        }
        $sumDetail = 'parduota';
        $viso_pard = array_reduce($da,
        function($runningTotal, $record) use($sumDetail) {
        $runningTotal += $record[$sumDetail];
        return $runningTotal;
        }, 0);

        $sumDetail = 'likutis';
        $viso_lik = array_reduce($da,
        function($runningTotal, $record) use($sumDetail) {
        $runningTotal += $record[$sumDetail];
        return $runningTotal;
        }, 0);

        
        return response()->json([
            'status' => true,
            'data' => $da,
            'paieska' => $keyword,
            'viso_pard' => $viso_pard,
            'viso_lik' => $viso_lik
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

        $failas = "paieska.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $myfile = fopen(storage_path($failas), "w");
        fwrite($myfile, strtoupper($ieskoti));
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
