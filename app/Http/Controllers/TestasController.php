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
            ///->whereNotIn('pavadinimas', ["Siuntimo išlaidos", "Maišelis", "Maisiņi",])
            //->whereNotIn('sandelis', ["TELSIAI", "3333", "INTE"])
            //->whereNotIn('registras', ["PERS"])
            //->orderBy('kiekis', 'desc')->get();
            ->whereIn('sandelis', ["INTE"])
            ->get();

            foreach ( $data as $value ) {
                $a = explode("-", $value['preke']);
                if(count($a) >= 3){$ne = $a[0]."-".$a[1]."-";}
                if(count($a) == 2){$ne = $a[0]."-";}
                //turi veikti tik su BROK
                if(count($a) == 1){$ne = preg_replace('#[0-9 ]*#', '', $a[0]);}
                $pardavimas[$ne][] = $value;
            }


        $sk = Pardavimai::where('pavadinimas', '=', "Suknelė")
            //->whereNotIn('pavadinimas', ["Siuntimo išlaidos", "Maišelis", "Maisiņi",])
            //->whereNotIn('sandelis', ["TELSIAI", "3333", "INTE"])
            //->whereNotIn('registras', ["PERS"])
            ->whereIn('sandelis', ["INTE"])
            //->orderBy('kiekis', 'desc')->take(30)->get();
            ->sum('kiekis');

        return response()->json([
            'status' => true,
            //'data' => array("pavadinimas" => $data->pavadinimas, "kiekis" => $data->kiekis, "preke" => $data->preke, "sandelis" => $data->sandelis)
            'data' => $pardavimas,
            'sk' => $sk
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
