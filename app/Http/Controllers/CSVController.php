<?php

namespace App\Http\Controllers;

use App\File;
use App\Http\Requests\FileUploadRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class CSVController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $directory  = "CSV_DATA";
        $files = Storage::files($directory);
        for($i = 0; $i < count($files); $i++){
            $size = Storage::size($files[$i]);
            $lastModified = Storage::lastModified($files[$i]);
            $file = str_replace($directory."/", "", $files[$i]);
            $data[$i] = array("vardas" => $file, "dydis" => $size,
             "modifikuota" => gmdate("Y-m-d - H:i:s", $lastModified));
        }

        //var_dump($records);
        return response()->json([
            'status' => true,
            'data' => $data,
            //'info' => $lentele
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
    public function store(Request $request){
        $uploadedFile = $request->file('file');

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

    public function CSV_store(Request $request)
    {
        $data = $request->all();
        $failas = $data['failas'];
        $valstybe = $data['valstybe'];
        $tipas = $data['tipas'];

        $directory  = "app/CSV_DATA/";
        $failas = $directory.$failas;

        if($tipas == 1){$lentele = "pardavimai";}
        if($tipas == 2){$lentele = "likutis";}

        //patikrinti ar yra tai valstybei ikelti duomenys,
        //jei yra neleisti ikelti, pranesti kad istrintu senus duomenis, 
        //arba pazymeti varnele, kad seni isitrintu
        if (($handle = fopen(storage_path($failas), "r")) !== FALSE) {
          while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
              $duomenys = mb_convert_encoding($data, "UTF-8", "ISO-8859-13");
              DB::table('pardavimai')->insert([
                  'preke' => $duomenys[0],
                   'pavadinimas' => $duomenys[1],
                   'barkodas' => $duomenys[2],
                   'grupe' => $duomenys[3],
                   'sandelis' => $duomenys[6],
                   'kiekis' => $duomenys[7],
                   'pardavimo_kaina' => $duomenys[8],
                   'pardavimo_suma' => $duomenys[9],
                   'pvm' => $duomenys[10],
                   'pvm_suma' => $duomenys[11],
                   'suma' => $duomenys[12],
                   'grupes_pavadinimas' => $duomenys[13],
                   'salis' => $valstybe,
                  ]);
          }
          fclose($handle);
        }
        //jei duomenys sukrito i duomenu base
        //pasidaryti to failo istrinima, kad nesimaisytu

        return response()->json([
            'status' => true,
            //'data' => $duomenys
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //$contents = Storage::get('file.jpg');
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

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $directory  = "CSV_DATA/";
        Storage::delete($directory.$id);

        return response()->json([
            'status' => true,
            'data' => $id
        ]);
    }
}
