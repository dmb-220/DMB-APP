<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePardavimaisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pardavimais', function (Blueprint $table) {
            $table->bigIncrements('id');
	        $table->string('preke');
            $table->string('pavadinimas');
            $table->string('barkodas');
            $table->string('grupe');
            $table->string('sandelis');
            $table->integer('kiekis');
            $table->string('pardavimo_kaina');
            $table->string('pardavimo_suma');
            $table->string('pvm');
            $table->string('pvm_suma');
            $table->string('suma');
            $table->string('grupes_pavadinimas');
            $table->string('registras');
            $table->string('salis');
            $table->string('registras');
            $table->string('dok_nr');
            $table->date('dok_data');
            $table->string('blanko_nr');
            $table->string('pirkejas');
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
        Schema::dropIfExists('pardavimais');
    }
}
