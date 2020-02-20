<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateLikutisTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('likutis', function(Blueprint $table)
		{
			$table->bigInteger('id', true)->unsigned();
			$table->string('preke', 191);
			$table->string('pavadinimas', 191);
			$table->string('kaina', 191);
			$table->integer('kiekis');
			$table->string('suma', 191);
			$table->string('sandelis', 191);
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
		Schema::drop('likutis');
	}

}
