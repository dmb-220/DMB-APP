<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAkcijosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('akcijos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('akcija');
            $table->string('galioja_nuo');
            $table->string('galioja_iki');
            $table->string('pavadinimas');
            $table->string('kaina');
            $table->string('preke');
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
        Schema::dropIfExists('akcijos');
    }
}
