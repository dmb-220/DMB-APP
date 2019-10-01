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
        $keyword = 'DM-';
        $re1 = Pardavimai::query()->orWhere('sandelis', '=', "SAUL")
        ->where('preke', 'like', "{$keyword}%")->get();
        $re2 = Pardavimai::query()->orWhere('sandelis', '=', "NORF")
        ->where('preke', 'like', "{$keyword}%")->get();
        $re3 = Pardavimai::query()->orWhere('sandelis', '=', "UTEN")
        ->where('preke', 'like', "{$keyword}%")->get();
        //echo $re->sum('kiekis')."<br><br>";
        
        //foreach($re as $value){
            //echo $value->preke." - ".$value->kiekis." - ".$value->sandelis."<br>";
        //}

        //prasukam cikla ir sudedam visu parduotuviu duomenis i masyva
        $res[0]['kiek'] = $re1->sum('kiekis');
        $res[0]['sandelys'] = 'SAUL';
        $res[0]['prekes'] = $re1->toArray();
//
        $res[1]['kiek'] = $re2->sum('kiekis');
        $res[1]['sandelys'] = 'NORF';
        $res[1]['prekes'] = $re2->toArray();

        $res[2]['kiek'] = $re3->sum('kiekis');
        $res[2]['sandelys'] = 'UTEN';
        $res[2]['prekes'] = $re3->toArray();
        //var_dump($res);
        
        return response()->json([
            'status' => true,
            'data' => $res
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
