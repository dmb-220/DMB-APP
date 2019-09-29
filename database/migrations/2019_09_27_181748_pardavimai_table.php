<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PardavimaiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pardavimai', function (Blueprint $table) {
            $table->bigIncrements('id');
	        $table->string('preke')->nullable();
            $table->string('pavadinimas')->nullable();
            $table->string('barkodas')->nullable();
            $table->string('grupe');
            $table->string('sandelis');
            $table->string('kiekis');
            $table->string('pardavimo_kaina');
            $table->string('pardavimo_suma');
            $table->string('pvm');
            $table->string('pvm_suma');
            $table->string('suma');
            $table->string('grupes_pavadinimas');
	        $table->string('salis')->nullable();
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
    
    }
}
