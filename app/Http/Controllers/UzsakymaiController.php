<?php

namespace App\Http\Controllers;

use App\Uzsakymai;
use Illuminate\Http\Request;

class UzsakymaiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Uzsakymai::orderBy('created_at', 'desc')->get();

        return response()->json([
            'data' => $data,
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
        $data = $request->all();
        $vardas = $data['vardas'];
        $numeris = $data['numeris'];
        $adresas = $data['adresas'];
        $telefonas = $data['telefonas'];
        $email = $data['email'];


        $q = new Uzsakymai;
        $q->vardas = $request->vardas;
        $q->numeris = $request->numeris;
        $q->adresas = $request->adresas;
        $q->telefonas = $request->telefonas;
        $q->email = $request->email;
        $q->patvirtinta = 0;
        $q->isvesta = 0;
        $q->save();

        return response()->json([
            'status' => true,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Uzsakymai  $uzsakymai
     * @return \Illuminate\Http\Response
     */
    public function show(Uzsakymai $uzsakymai)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Uzsakymai  $uzsakymai
     * @return \Illuminate\Http\Response
     */
    public function edit(Uzsakymai $uzsakymai)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Uzsakymai  $uzsakymai
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Uzsakymai $uzsakymai)
    {
        $update = [
            'vardas' => $request->vardas, 
            'numeris' => $request->numeris,
            'adresas' => $request->adresas,
            'telefonas' => $request->telefonas,
            'email' => $request->email,
            'patvirtinta' => $request->patvirtinta,
            'isvesta' => $request->isvesta,
        ];
        Uzsakymai::where('id',$uzsakymai->id)->update($update);

        return response()->json([
            'status' => true,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Uzsakymai  $uzsakymai
     * @return \Illuminate\Http\Response
     */
    public function destroy(Uzsakymai $uzsakymai)
    {
        Uzsakymai::where('id',$uzsakymai->id)->delete();

        return response()->json([
            'status' => true,
        ]);
    }
}
