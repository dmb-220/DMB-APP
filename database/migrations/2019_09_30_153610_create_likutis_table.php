<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLikutisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //Kodas;Pavadinimas;Vnt.;Kaina;Kiekis;Suma;Sandėlis;
        Schema::create('likutis', function (Blueprint $table) {
            $table->bigIncrements('id');
	        $table->string('preke');
            $table->string('pavadinimas');
            $table->string('kaina');
            $table->integer('kiekis');
            $table->string('suma');
            $table->string('sandelis');
            $table->string('salis');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('likutis');
    }
}
