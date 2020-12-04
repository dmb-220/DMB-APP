<?php

namespace App\Http\Controllers;

use App\Pvz;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PvzController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {


        $response = Http::post('https://lt2.dineta.eu/sidonas/login.php?font_aspect_ratio=7&version=1', [
            'user' => 'arturas',
            'password' => 'krokodilas',
        ]);

        echo $response->body();
//dd($response->json());
echo $response->status();
//$response->ok() : bool;
//echo $response->successful();
//$response->failed() : bool;
//$response->serverError() : bool;
//$response->clientError() : bool;
//echo $response->header($header);
dd($response->headers());
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
     * @param  \App\Pvz  $pvz
     * @return \Illuminate\Http\Response
     */
    public function show(Pvz $pvz)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Pvz  $pvz
     * @return \Illuminate\Http\Response
     */
    public function edit(Pvz $pvz)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Pvz  $pvz
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pvz $pvz)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Pvz  $pvz
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pvz $pvz)
    {
        //
    }
}
