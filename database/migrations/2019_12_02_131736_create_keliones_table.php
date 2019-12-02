<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKelionesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('keliones', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('data');
            $table->string('doc_nr');
            $table->string('blanko_nr');
            $table->string('sandelis_is');
            $table->string('sandelis_i');
            $table->string('preke');
            $table->string('kiekis');
            $table->string('kaina');
            $table->string('grupe');
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
        Schema::dropIfExists('keliones');
    }
}
