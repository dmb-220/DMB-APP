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
        $keyword = 'DM-';

        $re1 = Pardavimai::query()
        ->where('preke', 'like', "{$keyword}%")->get();
        $group = array();
        foreach ( $re1 as $value ) {
            $group[$value['sandelis']][] = $value;
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
                $sumDetail = 'kiekis';
                $totalVAT = array_reduce($value,
                function($runningTotal, $record) use($sumDetail) {
                $runningTotal += $record[$sumDetail];
                return $runningTotal;
                }, 0);

                $total = array_reduce($group2[$idx],
                function($runningTotal, $record) use($sumDetail) {
                $runningTotal += $record[$sumDetail];
                return $runningTotal;
                }, 0);

                $da[$i]['sandelis'] = $idx;
                $da[$i]['parduota'] = $totalVAT;
                $da[$i]['likutis'] = $total;
                $da[$i]['viso'] = $total-($totalVAT*2);
                $da[$i]['prekes'] = $value;
                $da[$i]['likut'] = $group2[$idx];
                $i++;
            }
        }
        
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
