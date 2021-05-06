<?php

namespace App\Http\Controllers;

use App\IntePreke;
//use App\Pardavimai;
//use App\Likutis;
//use App\Atsargos;
use App\File;
use App\Http\Requests\FileUploadRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class IntePrekeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $key = 0;
        $keyword = "";
        if($key){
            $pa = "%{$keyword}%";
        }else{
            $pa = "{$keyword}%";
        }

        $pirk = 1;
        $gam = 1;

       /* $pardavimai = Pardavimai::query()
        ->where('kiekis', '>', 0)
        ->where('preke', 'like', $pa)
        ->whereIn('sandelis', ['INTE', 'E-pood'])
        ->when(!$gam, function ($q) {
            return $q->where('registras', "GAM");
        })
        ->when(!$pirk, function ($q) {
            return $q->where('registras', "PIRK");
        })
        ->whereNotIn('barkodas', ['MAIS-KUR1', 'MAIS-KUR2', 'BIG-170715'])
        ->get();
        */

        $likutis = IntePreke::query()
        ->where('preke', 'like', $pa)
        ->when(!$gam, function ($q) {
            return $q->where('registras', "GAM");
        })
        ->when(!$pirk, function ($q) {
            return $q->where('registras', "PIRK");
        })
        ->whereIn('sandelis', ['INTE', 'E-pood'])
        ->get();

        /*$atsargos = Atsargos::query()
        ->where('preke', 'like', $pa)
        ->whereIn('sandelis_i', ['INTE', 'E-pood'])
        ->when(!$gam, function ($q) {
            return $q->where('registras', "GAM");
        })
        ->when(!$pirk, function ($q) {
            return $q->where('registras', "PIRK");
        })
        ->get();*/
        
        $list = array();

        /*foreach($pardavimai as $row){

            if($row['salis'] == "1"){$arr = 'LT';}
            if($row['salis'] == "2"){$arr = 'LV';}
            if($row['salis'] == "3"){$arr = 'EE';}

                $ne = $row['preke'];

                $list[$ne]['preke'] = $ne;
                
                
                    if(!array_key_exists('parduota_'.$arr, $list[$ne])){
                        $list[$ne]['parduota_'.$arr] = $row['kiekis'];
                    }else{
                        $list[$ne]['parduota_'.$arr] += $row['kiekis'];
                    }
        }*/

        foreach($likutis as $row){

            $ne = $row['preke'];

            if($row['salis'] == "1"){$arr = 'LT';}
            if($row['salis'] == "2"){$arr = 'LV';}
            if($row['salis'] == "3"){$arr = 'EE';}

            $list[$ne]['preke'] = $ne;
            $list[$ne]['registras'] = $row['registras'];


           //Imam TIK LT savikaina
            if($row['salis'] == "1"){
                $list[$ne]['savikaina'] = $row['savikaina'];
            }

            if(!array_key_exists('kaina', $list[$ne])){
                $list[$ne]['kaina'] = $row['kaina'];
            }else{
                if($list[$ne]['kaina'] == 0){
                    $list[$ne]['kaina'] = $row['kaina'];
                }
            }
            
            if(!array_key_exists('liko_'.$arr, $list[$ne])){
                $list[$ne]['liko_'.$arr] = $row['kiekis'];
            }else{
                $list[$ne]['liko_'.$arr] += $row['kiekis'];
            }
        }

        /*foreach($atsargos as $row){

            if($row['salis'] == "1"){$arr = 'LT';}
            if($row['salis'] == "2"){$arr = 'LV';}
            if($row['salis'] == "3"){$arr = 'EE';}

                $ne = $row['preke'];

                    $list[$ne]['preke'] = $ne;

                    if(!array_key_exists('atsargos_'.$arr, $list[$ne])){
                        $list[$ne]['atsargos_'.$arr] = $row['kiekis'];
                    }else{
                        $list[$ne]['atsargos_'.$arr] += $row['kiekis'];
                    }
        }*/

        $li = array();
        $la = array();
        $LTtoLV['GAM'] = array();
        $LTtoLV['PIRK'] = array();

        $nr = time();
        foreach($list as $key => $row){
            if(!array_key_exists('liko_LT', $row)){ 
                $liko_LT = 0;}else{ $liko_LT = $row['liko_LT']; }
            if(!array_key_exists('liko_LV', $row)){ 
                $liko_LV = 0;}else{ $liko_LV = $row['liko_LV']; }

            //OK// PERKELIMAS IS LV I LT INTE
            //OK// PIRK IR GAM atskirti i 2 atskirus failus

            //reik atskiru failu CVS siusti i dineta, 
            //tiek pardavimo grazinimas, tiek pirkimo grazinimas.
            //to reikes kai estus itrausiu
            if($liko_LT < $liko_LV){
                $reg = $row['registras'];
                if($liko_LT < 2){
                    if($liko_LV <= 2){
                        if($liko_LT == 0){
                            $LTtoLV[$reg][$key]['preke'] = $row['preke'];
                            if(array_key_exists("savikaina", $row)){
                                $LTtoLV[$reg][$key]['savikaina'] = $row['savikaina'];
                            }
                            $LTtoLV[$reg][$key]['blankas'] = "GR-".$nr;
                            $LTtoLV[$reg][$key]['kiekis'] = $liko_LV;

                            $LTtoLV[$reg][$key]['kaina'] = $row['kaina'];
                            if($row['registras'] == "GAM"){
                                $LTtoLV[$reg][$key]['procentas'] = 70;
                                $LTtoLV[$reg][$key]['kaina2'] = number_format($row['kaina'] - ($row['kaina'] * 0.7), 4);
                            }
                            if($row['registras'] == "PIRK"){
                                $LTtoLV[$reg][$key]['procentas'] = 50;
                                $LTtoLV[$reg][$key]['kaina2'] = number_format($row['kaina'] - ($row['kaina'] * 0.5), 4);
                            }

                            $row['new_LT'] = $liko_LV;
                            $row['new_LV'] = 0;
                        }else{
                            $LTtoLV[$reg][$key]['preke'] = $row['preke'];
                            if(array_key_exists("savikaina", $row)){
                                $LTtoLV[$reg][$key]['savikaina'] = $row['savikaina'];
                            }
                            $LTtoLV[$reg][$key]['blankas'] = "GR-".$nr;
                            $LTtoLV[$reg][$key]['kiekis'] = $liko_LV;

                            $LTtoLV[$reg][$key]['kaina'] = $row['kaina'];
                            if($row['registras'] == "GAM"){
                                $LTtoLV[$reg][$key]['procentas'] = 70;
                                $LTtoLV[$reg][$key]['kaina2'] = number_format($row['kaina'] - ($row['kaina'] * 0.7), 4);
                            }
                            if($row['registras'] == "PIRK"){
                                $LTtoLV[$reg][$key]['procentas'] = 50;
                                $LTtoLV[$reg][$key]['kaina2'] = number_format($row['kaina'] - ($row['kaina'] * 0.5), 4);
                            }

                            $row['new_LT'] = $liko_LT + $liko_LV;
                            $row['new_LV'] = 0;
                        }
                    }else{
                        $sk = round($liko_LV/2);

                        $LTtoLV[$reg][$key]['preke'] = $row['preke'];
                        if(array_key_exists("savikaina", $row)){
                            $LTtoLV[$reg][$key]['savikaina'] = $row['savikaina'];
                        }
                        $LTtoLV[$reg][$key]['blankas'] = "GR-".$nr;
                        $LTtoLV[$reg][$key]['kiekis'] = $sk;
                        $LTtoLV[$reg][$key]['kaina'] = $row['kaina'];

                        if($row['registras'] == "GAM"){
                            $LTtoLV[$reg][$key]['procentas'] = 70;
                            $LTtoLV[$reg][$key]['kaina2'] = number_format($row['kaina'] - ($row['kaina'] * 0.7), 4);
                        }
                        if($row['registras'] == "PIRK"){
                            $LTtoLV[$reg][$key]['procentas'] = 50;
                            $LTtoLV[$reg][$key]['kaina2'] = number_format($row['kaina'] - ($row['kaina'] * 0.5), 4);
                        }

                        $row['new_LT'] = $liko_LT + $sk;
                        $row['new_LV'] = $liko_LV-$sk;
                    }

                    $li[$key] = $row;
                }
            }
            // END LV TO LT //

        }
        
        $li = array_values($li);
        $la = array_values($la);

        $LTtoLV['GAM'] = array_values($LTtoLV['GAM']);
        $LTtoLV['PIRK'] = array_values($LTtoLV['PIRK']);

        return response()->json([
            'status' => true,
            'sarasas' => $li,
            'LTtoLV' => $LTtoLV,
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
        $file_LT = $request->file_LT;
        $file_LV = $request->file_LV;
        $file_EE = $request->file_EE;

        $directory  = "app/CSV_DATA/";

        //Uzkelime LIETUVOS ir LATVIJOS duomenis
        if($file_LT){
            DB::table('inte_prekes')->where('salis', 1)->delete();
            $failas = $directory.$file_LT;
            $valstybe = 1;
        
            $flag = true;
            $da = [];
            if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                if($flag) { $flag = false; continue; }
                $val = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
                $kiek = explode(",", $val[4]);
                $kiek = $kiek[0];

                $da[] = [
                    'preke' => $val[0],
                    'pavadinimas' => $val[1],
                    'kaina' => floatval(str_replace(",", ".", $val[3])),
                    'kiekis' => $kiek,
                    'suma' => floatval(str_replace(",", ".", $val[5])),
                    'sandelis' => $val[6],
                    'registras' => $val[7],
                    'savikaina' => floatval(str_replace(",", ".", $val[8])),
                    'salis' => $valstybe
                ];
            }
            fclose($handle);
            unlink(storage_path($failas));
            }

            $chunks = array_chunk($da, 5000);
            foreach($chunks as $val){
                IntePreke::insert($val);
            }
        }

        if($file_LV){
            DB::table('inte_prekes')->where('salis', 2)->delete();
            $failas = $directory.$file_LV;
            $valstybe = 2;

            $flag = true;
            $da = [];
            if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                if($flag) { $flag = false; continue; }
                $val = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
                $kiek = explode(",", $val[4]);
                $kiek = $kiek[0];

                $da[] = [
                    'preke' => $val[0],
                    'pavadinimas' => $val[1],
                    'kaina' => floatval(str_replace(",", ".", $val[3])),
                    'kiekis' => $kiek,
                    'suma' => floatval(str_replace(",", ".", $val[5])),
                    'sandelis' => $val[6],
                    'registras' => $val[7],
                    'savikaina' => floatval(str_replace(",", ".", $val[8])),
                    'salis' => $valstybe
                ];
            }
            fclose($handle);
            unlink(storage_path($failas));
            }

            $chunks = array_chunk($da, 5000);
            foreach($chunks as $val){
                IntePreke::insert($val);
            }
        }
        //uzkeliame ESTIJOS duomenis
        if($file_EE){
            DB::table('inte_prekes')->where('salis', 3)->delete();
            $failas = $directory.$file_EE;
            $valstybe = 3;

            //reikia EST Gamyba irasant pakeisti i GAM, o Pirkimas i PIRK
            if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
                while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                    $val = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
                    if($val[2] == "Gamyba"){
                        $reg = "GAM";
                    }
                    if($val[2] == "Pirk"){
                        $reg = "PIRK";
                    }

                    $da[] = [
                        'preke' => $val[6],
                        'pavadinimas' => $val[1],
                        'kaina' => 0,
                        'kiekis' =>$val[7],
                        'suma' => $val[8],
                        'sandelis' => $val[5],
                        'registras' => $reg,
                        'savikaina' => 0,
                        'salis' => $valstybe
                    ];
                }
                fclose($handle);
                unlink(storage_path($failas));
            }

            $chunks = array_chunk($da, 5000);
            foreach($chunks as $val){
                IntePreke::insert($val);
            }
        }

        return response()->json([
            'status' => true,
            'data' => $request->all()
        ]);
    }

    public function store_lt(Request $request){
        $uploadedFile = $request->file('file_LT');

        if (!$uploadedFile->isValid()) {
            abort( 422 );}

        $storePath = $uploadedFile->storeAs('CSV_DATA', $uploadedFile->getClientOriginalName());

        $file = new File;
        $file->name = $uploadedFile->getClientOriginalName();
        $file->file = $storePath;
        $file->mime = $uploadedFile->getMimeType();
        $file->size = $uploadedFile->getSize();
        $file->save();

        return response()->json([
            'status' => true,
            'data' => $file,
            'upload' => $uploadedFile
        ]);
    }

    public function store_lv(Request $request){
        $uploadedFile = $request->file('file_LV');

        if (!$uploadedFile->isValid()) {
            abort( 422 );}

        $storePath = $uploadedFile->storeAs('CSV_DATA', $uploadedFile->getClientOriginalName());

        $file = new File;
        $file->name = $uploadedFile->getClientOriginalName();
        $file->file = $storePath;
        $file->mime = $uploadedFile->getMimeType();
        $file->size = $uploadedFile->getSize();
        $file->save();

        return response()->json([
            'status' => true,
            'data' => $file,
            'upload' => $uploadedFile
        ]);
    }


    public function store_ee(Request $request){
        $uploadedFile = $request->file('file_EE');

        if (!$uploadedFile->isValid()) {
            abort( 422 );}

        $storePath = $uploadedFile->storeAs('CSV_DATA', $uploadedFile->getClientOriginalName());

        $file = new File;
        $file->name = $uploadedFile->getClientOriginalName();
        $file->file = $storePath;
        $file->mime = $uploadedFile->getMimeType();
        $file->size = $uploadedFile->getSize();
        $file->save();

        return response()->json([
            'status' => true,
            'data' => $file,
            'upload' => $uploadedFile
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\IntePreke  $intePreke
     * @return \Illuminate\Http\Response
     */
    public function show(IntePreke $intePreke)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\IntePreke  $intePreke
     * @return \Illuminate\Http\Response
     */
    public function edit(IntePreke $intePreke)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\IntePreke  $intePreke
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, IntePreke $intePreke)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\IntePreke  $intePreke
     * @return \Illuminate\Http\Response
     */
    public function destroy(IntePreke $intePreke)
    {
        //
    }
}
