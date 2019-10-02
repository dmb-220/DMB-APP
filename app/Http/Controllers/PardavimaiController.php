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
        /*$keyword = 'DM-';
        $re1 = Pardavimai::query()->orWhere('sandelis', '=', "SAUL")
        ->where('preke', 'like', "{$keyword}%")->get();
        $re2 = Pardavimai::query()->orWhere('sandelis', '=', "NORF")
        ->where('preke', 'like', "{$keyword}%")->get();
        $re3 = Pardavimai::query()->orWhere('sandelis', '=', "UTEN")
        ->where('preke', 'like', "{$keyword}%")->get();
        //echo $re->sum('kiekis')."<br><br>";*/
        
        //foreach($re as $value){
            //echo $value->preke." - ".$value->kiekis." - ".$value->sandelis."<br>";
        //}
        $keyword = 'DM-';
        $re1 = Pardavimai::query()
        ->where('preke', 'like', "{$keyword}%")->get();

        $group = array();
        foreach ( $re1 as $value ) {
            $group[$value['sandelis']][] = $value;
        }

        $da = array();
        $i=0;
        foreach ( $group as $idx => $value ) {
            if($idx != "TELSIAI"){
                $sumDetail = 'kiekis';
                $totalVAT = array_reduce($value,
                function($runningTotal, $record) use($sumDetail) {
                $runningTotal += $record[$sumDetail];
                return $runningTotal;
                }, 0);

                $da[$i]['sandelis'] = $idx;
                $da[$i]['parduota'] = $totalVAT;
                $da[$i]['likutis'] = $totalVAT;
                $da[$i]['viso'] = $totalVAT-($totalVAT/2);
                $da[$i]['prekes'] = $value;
                $i++;
            }
        }


        //prasukam cikla ir sudedam visu parduotuviu duomenis i masyva
       /* $res[0]['kiek'] = $re1->sum('kiekis');
        $res[0]['sandelys'] = 'SAUL';
        $res[0]['prekes'] = $re1;
//
        $res[1]['kiek'] = $re2->sum('kiekis');
        $res[1]['sandelys'] = 'NORF';
        $res[1]['prekes'] = $re2;

        $res[2]['kiek'] = $re3->sum('kiekis');
        $res[2]['sandelys'] = 'UTEN';
        $res[2]['prekes'] = $re3;
        //var_dump($res);*/
        
        return response()->json([
            'status' => true,
            'data' => $da
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
