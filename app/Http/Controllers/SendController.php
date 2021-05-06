<?php

namespace App\Http\Controllers;

use App\Send;
use Illuminate\Http\Request;

use Mail;

class SendController extends Controller
{

     public function attachment_email() {
      $directory  = "app/CSV_DATA/";
      $failas = $directory."54183258928040.csv";
      $failas2 = $directory."EVP6710005151392_2021-04-01_2021-04-28.csv";

      $flag = true;
      echo"LUMINOR<br><br>";

      if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
         while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
             //praleidziam pirma eilute
             if($flag) { $flag = false; continue; }
             //$val = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
             $kodas = explode(" ", $data[8]);
             
             echo"Saskaita: ".$data[3]." DATA. ".$data[2]." SUMA: ".$data[6]." PIRKEJAS: ".$data[4]." APRASYMAS: ".$data[8]."<br>";
         }
      }

      echo"<hr>";


      $flag = true;
      echo"PAYSERA<br><br>";

      if (($handle = fopen(storage_path($failas2), "r")) !== FALSE) {
         while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
             //praleidziam pirma eilute
             if($flag) { $flag = false; continue; }
             //$val = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
             $kodas = explode(" ", $data[8]);
             
             if($data[4] == "Paysera LT"){
                $pirkejas = $data[4];
                $saskaita = $data[4];
             }else{
                $kk = explode(" ", $data[4]);
               $pirkejas = $kk[0]." ".$kk[1];
               $saskaita = $kk[2]; 
             }

             $da = explode(" ", $data[3]);
             echo"Saskaita: ".$saskaita." DATA. ".$da[0]." SUMA: ".$data[6]." PIRKEJAS: ".$pirkejas." APRASYMAS: ".$data[8]."<br>";
             var_dump($data);
         }
      }

      echo"<hr>";

        /*$data = array('name'=>"Andrius Norkus");
        Mail::send('mail', $data, function($message) {
           $message->to('andrius@sidonas.lt', 'DMB-220')->subject
              ('Kodas DINETA sistemoje');
           $message->attach('C:\Users\Arturas\Desktop\Dokumentai\RJ45-connector-600x600.png');
           $message->attach('C:\Users\Arturas\Desktop\Dokumentai\parduotuviu SARASAS.xlsx');
           $message->from('dmb2200@gmail.com','Andrius Norkus');
        });
        echo "Email Sent with attachment. Check your inbox.";*/
     }
}
