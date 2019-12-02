<?php

namespace App\Http\Controllers;

use App\Kelione;
use Illuminate\Http\Request;

class KelioneController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $query_p = Kelione::query();
        $query_p->whereIn('sandelis_i',['TELS', 'MAZE']);
        $re = $query_p->get();

        foreach ( $re as $value ) {
                $group[$value['grupe']][] = $value;

        }

        foreach ( $group as $idx => $value ) {
            //$gr[$value[$idx]][] = array();
            foreach($value as $val){
                $gr[$idx][$val['kaina']][] = $val;
            }
            

    }


        return response()->json([
            'status' => true,
            'likutis' => $gr,
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
     * @param  \App\Kelione  $kelione
     * @return \Illuminate\Http\Response
     */
    public function show(Kelione $kelione)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Kelione  $kelione
     * @return \Illuminate\Http\Response
     */
    public function edit(Kelione $kelione)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Kelione  $kelione
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Kelione $kelione)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Kelione  $kelione
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kelione $kelione)
    {
        //
    }
}
