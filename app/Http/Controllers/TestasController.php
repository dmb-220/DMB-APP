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
      $va = 3;
      $sa = "Kelnaitės";

      $keyword = "-d";
      $pa = "%{$keyword}%";

        $query_p = Likutis::query();
        //$query_p->where('preke', 'like', $pa);
        $query_p->where('pavadinimas', $sa);
        $query_p->where('salis', $va);
        $query_p->where('kiekis','>','0');
        $likuciai = $query_p->get();

        
        foreach ( $likuciai as $value ) {
            //$p = str_replace(' ', '', $value['preke']);
            $likutis[$value['preke']]['preke'] = $value['preke'];
            $likutis[$value['preke']]['sarasas'][] = $value;
        }
        $likutis = array_values($likutis);

        /*foreach($likutis as $idx => $val){
            echo "<b>".$idx."</b>";
            echo"<table border=' solid 1px'>";
            foreach($val as $va){
                echo"<tr>";
                echo"<td>"; echo $va['sandelis']; echo"</td>";
                echo"<td>"; echo $va['kiekis']; echo"</td>";
                echo"</tr>";
            }
            echo"</table>";
        }*/


        return response()->json([
            'status' => true,
            'likutis' => $likutis
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
