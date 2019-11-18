<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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

      /* $data = Pardavimai::where('pavadinimas', '=', "Suknelė")
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
            ->whereIn('sandelis', ["INTE"])
            ->sum('kiekis');

        return response()->json([
            'status' => true,
            //'data' => array("pavadinimas" => $data->pavadinimas, "kiekis" => $data->kiekis, "preke" => $data->preke, "sandelis" => $data->sandelis)
            'data' => $pardavimas,
            'sk' => $sk
         ]);*/
         //$auth = $ukis[0]['VIC_vartotojo_vardas'].":".$ukis[0]['VIC_slaptazodis'];

        function curl($url)
        {
            $failas = 'cokkies.txt';
            $directory  = "app/";
            $failas = $directory.$failas;

            $post = [
                'user' => 'arturas', 
                'password' => 'krokodilas', 
                'font_aspect_ratio' => 7, 
                'version' => 1
            ];
        
            $headers = [
                'Accept-Language: pl,en-US;q=0.9,en;q=0.8',
                'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
            ];
            $cookie = storage_path($failas); 

            $options = array(
                CURLOPT_FOLLOWLOCATION => true,     // return web page
                CURLOPT_HEADER         => false,    // don't return headers
                CURLOPT_FOLLOWLOCATION => true,     // follow redirects
                CURLOPT_ENCODING       => "",       // handle all encodings
                CURLOPT_AUTOREFERER    => true,     // set referer on redirect
                CURLOPT_CONNECTTIMEOUT => 120,      // timeout on connect
                CURLOPT_TIMEOUT        => 120,      // timeout on response
                CURLOPT_MAXREDIRS      => 10,       // stop after 10 redirects
                CURLOPT_SSL_VERIFYPEER => 0,        // Disabled SSL Cert checks
                CURLOPT_SSL_VERIFYHOST => 0,
                CURLOPT_HTTPHEADER => $headers,
                CURLOPT_POST            => 1,
                CURLOPT_POSTFIELDS     => $post,
            );
            $ch = curl_init( $url );
            curl_setopt_array( $ch, $options );

            if (!file_exists($cookie)){
            curl_setopt($ch, CURLOPT_COOKIEJAR, $cookie);
            }else{     
            curl_setopt($ch, CURLOPT_COOKIEFILE, $cookie);
            }

            //$failas = 'csv.csv';
            //$directory  = "app/";
            //$failas = $directory.$failas;

            //$fp = fopen(storage_path($failas), "w+");
            curl_setopt($ch,  CURLOPT_RETURNTRANSFER, TRUE);
            //curl_setopt($ch, CURLOPT_FILE, $fp);
            //curl_setopt($ch, CURLOPT_URL, $url);
            //fclose($fp);

            $c = curl_exec($ch);
            curl_close($ch);
            return $c;
        }
        
        curl('https://lt2.dineta.eu/sidonas/login.php');
        echo"<br>======================<br>";
        //echo curl("https://lt2.dineta.eu/sidonas/report/stock_quant_qry.php?reportid=stock_quant&form=stock_quant_rep.php&load=1"); 
        //echo"<br>======================<br>";
        //$duomenys = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
        $da = curl("https://lt2.dineta.eu/sidonas/report/stock_quant_rep.php?reportid=stock_quant&tid=report&export=csv|stock_quant_rep.php");

        $row = str_getcsv($da, "\n");
    
        array_shift($row);
            foreach ($row as $ro) {
                $data = str_getcsv($ro, ";");
                $duomenys = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
                echo $duomenys[0]."-".$duomenys[6]."<br>";
            }


        //echo $da;
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
