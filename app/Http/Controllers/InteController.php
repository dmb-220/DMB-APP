<?php

namespace App\Http\Controllers;

use App\Inte;
use App\Pardavimai;
use Illuminate\Http\Request;

class InteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //nustatymai
        $failas = "apyvarta.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $myfile = fopen(storage_path($failas), "r");
        $key = fread($myfile,filesize(storage_path($failas)));
        fclose($myfile);

        $key = explode("||", $key);
        $data_nuo = $key[0];
        $data_iki = $key[1];

        $data_nuo = "2020-11-01";
        $data_iki = "2020-11-30";

        $sarasas = array();

        $query_p = Inte::query();
        $query_p->where('salis', '1');
        $query_p->where('sandelis', 'INTE');
        //$query_p->where('sandelis', 'PIGU');
        $sarasas = $query_p->get();

        $naujas = array();
        $graza = array();
        foreach($sarasas as $value){
            if(is_numeric($value['blanko_nr'])){
            //if(strpos($value['blanko_nr'], "GR") === false){
    
                if($value['blanko_nr'] == "0"){
                    $value['blanko_nr'] = $value['blanko_nr']."-".$value['pirkejas'];
                }

                $naujas[$value['blanko_nr']]['saskaitos_nr'] = $value['blanko_nr'];
                $naujas[$value['blanko_nr']]['prekes'][] = $value['barkodas'];
                $naujas[$value['blanko_nr']]['data'] = $value['dok_data'];
                $naujas[$value['blanko_nr']]['pirkejas'] = $value['pirkejas'];
                
                if($value['grupe'] != 'Siuntimo išlaidos'){
                    $naujas[$value['blanko_nr']]['pristatymas'] = 0;

                    if(array_key_exists('suma', $naujas[$value['blanko_nr']])){

                        $naujas[$value['blanko_nr']]['suma'] = round($value['suma'] + $naujas[$value['blanko_nr']]['suma'], 2);
                        }else{
                            $naujas[$value['blanko_nr']]['suma'] = $value['suma']; 
                        }

                    if(array_key_exists('pardavimo_suma', $naujas[$value['blanko_nr']])){
                        $naujas[$value['blanko_nr']]['pardavimo_suma'] = round($value['pardavimo_suma'] + $naujas[$value['blanko_nr']]['pardavimo_suma'], 2);
                        }else{
                            $naujas[$value['blanko_nr']]['pardavimo_suma'] = $value['pardavimo_suma']; 
                        }

                    if(array_key_exists('pvm_suma', $naujas[$value['blanko_nr']])){
                        $naujas[$value['blanko_nr']]['pvm_suma'] = round($value['pvm_suma'] + $naujas[$value['blanko_nr']]['pvm_suma'], 2);

                        }else{
                            $naujas[$value['blanko_nr']]['pvm_suma'] = $value['pvm_suma'];
                        }
                }else{
                    $naujas[$value['blanko_nr']]['pristatymas'] = $value['suma'];
                }
            }else{
                //darysim grazinimus
                $graza[$value['blanko_nr']]['saskaitos_nr'] = $value['blanko_nr'];
                $graza[$value['blanko_nr']]['prekes'][] = $value['barkodas'];
                $graza[$value['blanko_nr']]['data'] = $value['dok_data'];

                $graza[$value['blanko_nr']]['pirkejas'] = $value['pirkejas'];
            

                    if(array_key_exists('suma', $graza[$value['blanko_nr']])){

                        $graza[$value['blanko_nr']]['suma'] = round($value['suma'] + $graza[$value['blanko_nr']]['suma'], 2);
                        }else{
                            $graza[$value['blanko_nr']]['suma'] = $value['suma']; 
                        }

                    if(array_key_exists('pardavimo_suma', $graza[$value['blanko_nr']])){
                        $graza[$value['blanko_nr']]['pardavimo_suma'] = round($value['pardavimo_suma'] + $graza[$value['blanko_nr']]['pardavimo_suma'], 2);
                        }else{
                            $graza[$value['blanko_nr']]['pardavimo_suma'] = $value['pardavimo_suma']; 
                        }

                    if(array_key_exists('pvm_suma', $graza[$value['blanko_nr']])){
                        $graza[$value['blanko_nr']]['pvm_suma'] = round($value['pvm_suma'] + $graza[$value['blanko_nr']]['pvm_suma'], 2);

                        }else{
                            $graza[$value['blanko_nr']]['pvm_suma'] = $value['pvm_suma'];
                        }
            }
        }

        //pasiziuret kiek susimok4jo kurjeriui atvezus preke
        $ne = array();
        $ne2 = array();
        foreach($naujas as $val){
            if($val['pristatymas'] == "1.5" || $val['pristatymas'] == "4"){
                $ne[] = $val;
            }else{
                $ne2[] = $val;
            }
        }

        $naujas = array_values($naujas);
        $graza = array_values($graza);

        return response()->json([
            'status' => true,
            'sarasas' => $ne2,
            'sarasas2' => $ne2,
            'graza' => $graza

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
        $date = $data['dates'];

        $failas = "apyvarta.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $eilute = $date[0]."||".$date[1];

        $myfile = fopen(storage_path($failas), "w");
        fwrite($myfile, $eilute);
        fclose($myfile);

        return response()->json([
            'status' => true,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Inte  $inte
     * @return \Illuminate\Http\Response
     */
    public function show(Inte $inte)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Inte  $inte
     * @return \Illuminate\Http\Response
     */
    public function edit(Inte $inte)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Inte  $inte
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Inte $inte)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Inte  $inte
     * @return \Illuminate\Http\Response
     */
    public function destroy(Inte $inte)
    {
        //
    }
}
