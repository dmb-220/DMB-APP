<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
        //var_dump($data);
        return $data;
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
        $directory  = "CSV_DATA/";
        Storage::delete($directory.$id);

        return response()->json([
            'status' => true,
            'data' => $id
        ]);
    }
}
