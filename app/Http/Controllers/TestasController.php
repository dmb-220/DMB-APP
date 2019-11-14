<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Pardavimai;
use App\Likutis;
use App\Akcijos;

class TestasController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = array();

        //$data = Pardavimai::where('salis', 1)->orderBy('kiekis', 'desc')->first();
        /*$data= Pardavimai::whereHas('kiekis', function($q){
            $q->whereIn('sandelis', '!=', ["TELSIAI", "EST"]);
        })->orderBy('kiekis', 'desc')->first();*/

       $data = Pardavimai::where('pavadinimas', '=', "Suknelė")
            ->whereNotIn('pavadinimas', ["Siuntimo išlaidos", "Maišelis", "Maisiņi",])
            ->whereNotIn('sandelis', ["TELSIAI", "3333"])
            ->whereNotIn('registras', ["PERS"])
            ->orderBy('kiekis', 'desc')->take(50)->get();

        return response()->json([
            'status' => true,
            //'data' => array("pavadinimas" => $data->pavadinimas, "kiekis" => $data->kiekis, "preke" => $data->preke, "sandelis" => $data->sandelis)
            'data' => $data
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
