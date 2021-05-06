<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Likutis;

class VisiLikuciaiController extends Controller
{
    public function index(){

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

        //nustatymai
        $failas = "sandeliai.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $myfile = fopen(storage_path($failas), "r");
        $key = fread($myfile,filesize(storage_path($failas)));
        fclose($myfile);



        $sandeliai = array("DOLE", "KULD", "BRIV", "DITO", "MATI", "VALK", "TAL2", "TUKU", 
            "VALD", "VENT", "LIEP", "AIZK", "DAUG", "LIMB", "MELN", "SALD", "VALM",  
            "BALV", "CESI", "DOBE", "GOBA", "JEKA", "SIGU", "MADO", "OGRE", "INTE", "ALUK");

            $sand = "DITO";

            $query = Likutis::query()
                ->where('sandelis', $sand)
                ->get();

            $list = array();
            $nr = 1;
            foreach($query as  $row){

                if($row['registras'] == "GAM"){
                    $kaina =  number_format(tofloat($row['kaina'])*0.3, 2);}

                if($row['registras'] == "PIRK"){
                    $kaina =  number_format(tofloat($row['kaina'])*0.5, 2);}

                    $list[$row['pavadinimas']]['pavadinimas'] = $row['pavadinimas'];

                    
                if(!array_key_exists('nr',  $list[$row['pavadinimas']])){
                    $list[$row['pavadinimas']]['nr'] = $nr;
                }else{
                    $list[$row['pavadinimas']]['nr'] += $nr;
                }

                if(!array_key_exists('kiek',  $list[$row['pavadinimas']])){
                    $list[$row['pavadinimas']]['kiek'] = $row['kiekis'];
                }else{
                    $list[$row['pavadinimas']]['kiek'] += $row['kiekis'];
                }

                if(!array_key_exists('kaina',  $list[$row['pavadinimas']])){
                    $list[$row['pavadinimas']]['kaina'] = $kaina;
                }else{
                    $list[$row['pavadinimas']]['kaina'] += $kaina;
                }
           }

           $list = array_values($list);
            
        return response()->json([
            'status' => true,
            'data' => $list,
            'sandelis' => $sand,
            'sandeliai' => $sandeliai,
        ]);
    }


    public function store(Request $request)
    {
        $data = $request->all();
        $sandelis = $data['sandelis'];

        $failas = "sandeliai.txt";
        $directory  = "app/";
        $failas = $directory.$failas;

        $eilute = $sandelis;

        $myfile = fopen(storage_path($failas), "w");
        fwrite($myfile, $eilute);
        fclose($myfile);

        return response()->json([
            'status' => true,
        ]);
    }

}
