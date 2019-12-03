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

        function sk_to_lt($l) {

            $sk1000[0] = "tūkstantis ";
            $sk1000[1] = "tūkstančiai ";
            $sk1000[2] = "tūkstančių ";
          
            $sk1000000[0] = "milijonas ";
            $sk1000000[1] = "milijonai ";
            $sk1000000[2] = "milijonų ";
          
            $minus = "minus ";
            $skaiz = "";
          
            if ($l < 0) {
              $skaiz = $skaiz . $minus;
              $l1 = $l*(-1); 
            }
            else $l1 = $l;
          
          // skaidom skaiciu
            $lv = $l1; 
          
            settype($lv,"integer"); 
            for ($i = 8; $i >= 0; $i--) {
              $ls =(integer)( $lv / 10);
              $ll = $lv % 10;
              $ld[$i] = $ll;
              $lv = $ls; 
          
              }
          // rasom zodzius
            $skaiz = $skaiz . simtai($ld[0],$ld[1],$ld[2]);
          
          // milijonai
            if ($ld[1] <> 1 and $ld[2] == 1)
              $skaiz = $skaiz . $sk1000000[0];
            if ($ld[1] <> 1 and $ld[2] <> 1 and $ld[2] <> 0)
              $skaiz = $skaiz . $sk1000000[1];
            if ($ld[1] == 1 and $ld[2] <> 0)
              $skaiz = $skaiz . $sk1000000[2];
            if (($ld[0] <> 0 or $ld[1] <> 0) and $ld[2] == 0)
              $skaiz = $skaiz . $sk1000000[2];
          
            $skaiz = $skaiz . simtai($ld[3],$ld[4],$ld[5]);
          
          // tukstanciai
            if ($ld[4] <> 1 and $ld[5] == 1)
              $skaiz = $skaiz . $sk1000[0];
            if ($ld[4] <> 1 and $ld[5] <> 1 and $ld[5] <> 0)
              $skaiz = $skaiz . $sk1000[1];
            if ($ld[4] == 1 and $ld[5] <> 0)
              $skaiz = $skaiz . $sk1000[2];
            if (($ld[3] <> 0 or $ld[4] <> 0) and $ld[5] == 0)
              $skaiz = $skaiz . $sk1000[2];
          
            $skaiz = $skaiz . simtai($ld[6],$ld[7],$ld[8]);
          
            return ucfirst ($skaiz); 
            }
          
          function simtai($s,$d,$v) {
            $sk1[0] = "vienas ";
            $sk1[1] = "du ";
            $sk1[2] = "trys ";
            $sk1[3] = "keturi ";
            $sk1[4] = "penki ";
            $sk1[5] = "šeši ";
            $sk1[6] = "septyni ";
            $sk1[7] = "aštuoni ";
            $sk1[8] = "devyni ";
            $sk1[9] = "dešimt ";
            $sk11[0] = "vienuolika ";
            $sk11[1] = "dvylika ";
            $sk11[2] = "trylika ";
            $sk11[3] = "keturiolika ";
            $sk11[4] = "penkiolika ";
            $sk11[5] = "šešiolika ";
            $sk11[6] = "septyniolika ";
            $sk11[7] = "aštuoniolika ";
            $sk11[8] = "devyniolika ";
            $sk11[9] = "dvidešimt ";
            $sk10[0] = "dešimt ";
            $sk10[1] = "dvidešimt ";
            $sk10[2] = "trisdešimt ";
            $sk10[3] = "keturiasdešimt ";
            $sk10[4] = "penkiasdešimt ";
            $sk10[5] = "šešiasdešimt ";
            $sk10[6] = "septyniasdešimt ";
            $sk10[7] = "aštuoniasdešimt ";
            $sk10[8] = "devyniasdešimt ";
            $sk10[9] = "šimtas ";
            $sk100[0] = "šimtas ";
            $sk100[1] = "šimtai ";
          
            $simtz = "";
          
            if ($s <> 0) {
              $simtz = $simtz . $sk1[$s-1];
              if ($s == 1)
                $simtz = $simtz . $sk100[0];
              else
                $simtz = $simtz . $sk100[1];
              }
          
            if ($d <> 0) {
              if ($d <> 1 or $v == 0)
                $simtz = $simtz . $sk10[$d-1];
              }
          
            if ($v <> 0) {
              if ($d == 1)
                $simtz = $simtz . $sk11[$v-1];
              else
                $simtz = $simtz . $sk1[$v-1];
              }
            return $simtz;
            }

        $estai = array("JOHV", "MUST", "NARV", "RAKV", "SOPR", "VORU", "UMER", "EDEN", "HAPS", "KOHT", "KOPL", "PARN", "RIAA");
        $query_p = Kelione::query();
        $query_p->where('data', '>', '2019-11-01');
        //cia estija, visi miestai, su galimybe kazka pasalinti
        $query_p->whereIn('sandelis_i', $estai);
        $re = $query_p->get();

        foreach ( $re as $value ) {
                $group[$value['pavadinimas']][] = $value;

        }

        foreach ( $group as $idx => $value ) {

            $gr[$idx]['kaina'] = array();
            foreach($value as $val){
                if(array_key_exists($val['kaina'], $gr[$idx]['kaina'])){
                    $kiek = $gr[$idx]['kaina'][$val['kaina']];
                }else{
                    $kiek = 0;
                }
                $kk = explode(",", $val['kiekis']);
                $gr[$idx]['pavadinimas'] = $idx;
                $gr[$idx]['kaina'][$val['kaina']] = $kiek + $kk[0];
            }  
    }
    
    $gr = array_values($gr);
    
    //reik sukti cikla ir sudeti i viena sarasas
    $kelione = array();
    $i = 0;
    foreach($gr as $value){
        foreach($value['kaina'] as $ix => $val){
            $kelione[$i]['pavadinimas'] = $value['pavadinimas'];
            //round(1.22354881, 2);
            $kaina = round(tofloat($ix)*0.5, 2);
            $kelione[$i]['kaina'] = $kaina;
            $kelione[$i]['kiekis'] = $val;
            $kelione[$i]['suma'] = round($val*$kaina, 2);
            $i++;
        }
    }

    $sum = 0;
    foreach ($kelione as $item) {
        $sum += $item['suma'];
    }

    if(strpos($sum, ".")  !== false){
        $cnt = explode(".", $sum);
        $centai = $cnt[1];
    }else{ $centai = 0; }

        return response()->json([
            'status' => true,
            'likutis' => $kelione,
            'sk_lt' => sk_to_lt($sum),
            'centai' => $centai,
            'estai' => $estai
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
