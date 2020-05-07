<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePirkimaisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pirkimais', function (Blueprint $table) {
            $table->bigInteger('id', true)->unsigned();
			$table->date('data', 191);
			$table->string('doc_nr', 191);
			$table->string('blanko_nr', 191);
			$table->string('sandelis_is', 191);
			$table->string('sandelis_i', 191);
			$table->string('preke', 191);
			$table->string('kiekis', 191);
			$table->string('kaina', 191);
			$table->string('grupe', 191);
			$table->string('pavadinimas', 191);
            $table->string('registras', 191);
            $table->string('pirk_kaina', 191);
			$table->string('salis', 191);
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
        Schema::dropIfExists('pirkimais');
    }
}
