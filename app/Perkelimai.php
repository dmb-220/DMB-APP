<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Perkelimai extends Model
{
    public function grupių_sarasas(){
        $grupes_likutis = array();
        $grupes_pardavimai = array();
         //Geriausia butu susivesti tas grupes i masyva ir viskas.
         $gru = Likutis::select('pavadinimas', 'salis')
         ->where('kiekis','>','0')
         ->distinct()->get();
         foreach ( $gru as $value ) {
             if(!in_array($value, $grupes_likutis) && $value['salis'] == 1){
                 $grupes_likutis[] = $value['pavadinimas'];
             }
         }
 
         $gru = Pardavimai::select('pavadinimas','registras', 'salis')
         ->where('kiekis','>','0')
         ->distinct()->get();
         
         foreach ( $gru as $value ) {
             if($value['registras'] != "PERS"){
             if(!in_array($value, $grupes_pardavimai) && $value['salis'] == 1){
                 $grupes_pardavimai[] = $value['pavadinimas'];
             }
         }
         }
 
         //reik sujungti pardavimus su likutis
         $grupes = $grupes_likutis + $grupes_pardavimai;
         $grupes = array_unique($grupes);
 
         sort($grupes);
         $g = array('Paieška tarp grupių išjungta');
         //i masyvo pradzia idedam grupes isjungima
         $grupes = $g + $grupes;

        return $grupes;
    }
}
