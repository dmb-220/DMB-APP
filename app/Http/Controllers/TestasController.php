<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use SoapClient;


class TestasController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      /*$client = new SoapClient('https://lt2.dineta.eu/sidonas/ws/export/ws.php?wsdll');
      // parametru padavimas
      $p['param'][0]['name'] = 'docdate_from';
      $p['param'][0]['value'] = "2019-09-01";
      $p['param'][1]['name'] = 'op';
      $p['param'][1]['value'] = 'I';
      $response = $client->get_operations($p);
      print_r ($response);*/

      $client = new SoapClient('https://lt2.dineta.eu/sidonas/ws/export/ws.php?wsdll');

      //var_dump($client->__getFunctions());

      $p['param'][0]['name'] = 'date';
      $p['param'][0]['value'] = "2019-10-17";
      
      $p['param'][1]['name'] = 'storeid';
      $p['param'][1]['value'] = "BIGA";   // cia sandelio kodas Dineta.web'e

      $p['param'][2]['name'] = 'null_quant';
      $p['param'][2]['value'] = "1";
      
      $response = $client->get_stock_quant($p);
      var_dump($response);


      //https://webmobtuts.com/backend-development/manipulating-soap-web-services-with-php-and-laravel/
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
