<?php

namespace App\Http\Controllers;

use App\Gpais;
use pdeans\Builders\XmlBuilder;

use Spatie\ArrayToXml\ArrayToXml;

class GpaisController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $failas = "gpais-vvs-produktai.xsd";
        $directory  = "gpais/";
        $failas = $directory.$failas;

        $array = [
            'Good guy' => [
                'name' => 'Luke Skywalker',
                'weapon' => 'Lightsaber'
            ],
            'Bad guy' => [
                'name' => 'Sauron',
                'weapon' => 'Evil Eye'
            ]
        ];
        
        $result = ArrayToXml::convert($array, [
            'rootElementName' => 'irasuSarasas',
            '_attributes' => [
                'xmlns' => 'urn:x-gpais:vvs:zurnalas',
                'xmlns:gpais' => "urn:x-gpais:bendra",
                'xmlns:kls' => "urn:x-gpais:kls",
            ],
        ], true, 'UTF-8');

        header('Content-type: "text/xml"; charset="utf8"');
        header('Content-Disposition: attachment; filename="GPAIS.xml"');
        echo $result;
       
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
     * @param  \App\Gpais  $gpais
     * @return \Illuminate\Http\Response
     */
    public function show(Gpais $gpais)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Gpais  $gpais
     * @return \Illuminate\Http\Response
     */
    public function edit(Gpais $gpais)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Gpais  $gpais
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Gpais $gpais)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Gpais  $gpais
     * @return \Illuminate\Http\Response
     */
    public function destroy(Gpais $gpais)
    {
        //
    }
}
