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
        $rikiuoti = 0;
        $sandelis = "TELS";
        $pardavimai = Pardavimai::query()
            ->where('sandelis', $sandelis)
            ->where('kiekis','>','0')->get();

            foreach ( $pardavimai as $value ) {
                if($rikiuoti){
                    $pardavimas[$value['preke']] = $value;
                }else{
                    $a = explode("-", $value['preke']);
                    $ne = $a[0]."-";
                    $pardavimas[$ne][] = $value;
                }
            }

            return response()->json([
                'status' => true,
                'pardavimai' => $pardavimai,
                'pardavimas' => $pardavimas,
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
