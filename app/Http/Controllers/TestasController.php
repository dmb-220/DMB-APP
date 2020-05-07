<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Pardavimai;
use App\Atsargos;
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
        return response()->json([
            'data' => array(
                'pardavimai' => "2019-12-24 --- 2020-01-24", 
                'likutis' => "2020-01-24"
                )
        ]);
    }

    public function idx(){
        function tofloat($num) {
            $dotPos = strrpos($num, '.');
            $commaPos = strrpos($num, ',');
            $sep = (($dotPos > $commaPos) && $dotPos) ? $dotPos : 
                ((($commaPos > $dotPos) && $commaPos) ? $commaPos : false);
           
            if (!$sep) {
                return floatval(preg_replace("/[^0-9]/", "", $num));
            } 
        
            return floatval(
                preg_replace("/[^0-9]/", "", substr($num, 0, $sep)) . '.' .
                preg_replace("/[^0-9]/", "", substr($num, $sep+1, strlen($num)))
            );
        }

        //$da = array();
        $data = Atsargos::whereIn('blanko_nr', ['AIZK0138', 'ALUK0164', 'CESI0114', 'DAUG0087', 'LIMB0136', 'MADO0170', 'SIGU0131', 'VALM0131'])->get();
        foreach($data as $val){
            $val = $val->toArray();
            $da[$val['preke']]['preke'] = $val['preke'];
            $da[$val['preke']]['kaina'] = $val['kaina'];
            $kai = round(tofloat($val['kaina'])*0.5, 4);
            $kai = number_format($kai, 4);
            $da[$val['preke']]['kaina2'] = $kai;
            $da[$val['preke']]['kiek'][] = $val['kiekis'];
            $k = explode(',', $val['kiekis']);
            if(array_key_exists('kiekis', $da[$val['preke']])){
                $da[$val['preke']]['kiekis'] += $k[0];
            }else{
                $da[$val['preke']]['kiekis'] = $k[0];
            }
        }

        $da = array_values($da);

        return response()->json([
            'd' => $da
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
