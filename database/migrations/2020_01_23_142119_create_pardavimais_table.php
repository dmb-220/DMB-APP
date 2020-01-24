<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePardavimaisTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('pardavimais', function(Blueprint $table)
		{
			$table->bigInteger('id', true)->unsigned();
			$table->string('preke', 191);
			$table->string('pavadinimas', 191);
			$table->string('barkodas', 191);
			$table->string('grupe', 191);
			$table->string('sandelis', 191);
			$table->integer('kiekis');
			$table->string('pardavimo_kaina', 191);
			$table->string('pardavimo_suma', 191);
			$table->string('pvm', 191);
			$table->string('pvm_suma', 191);
			$table->string('suma', 191);
			$table->string('grupes_pavadinimas', 191);
			$table->string('registras', 191);
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
		Schema::drop('pardavimais');
	}

}
