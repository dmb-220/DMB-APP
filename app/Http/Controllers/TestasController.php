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
      //$client = new \SoapClient('http://soap.amazon.com/schemas3/AmazonWebServices.wsdl');
      //$client = new \SoapClient('http://ec.europa.eu/taxation_customs/vies/checkVatService.wsdl', ['trace' => true, 'cache_wsdl' => WSDL_CACHE_MEMORY]);
      //$client = new SoapClient('http://soap.amazon.com/schemas3/AmazonWebServices.wsdl');
      //var_dump($client->__getFunctions());
      $client = new \SoapClient('http://lt4.dineta.eu/xxxxx/ws/export/ws.php?wsdl');
      print_r($client->hello("Testas"));

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
