<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAkcijosTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('akcijos', function(Blueprint $table)
		{
			$table->bigInteger('id', true)->unsigned();
			$table->string('akcija', 191);
			$table->string('galioja_nuo', 191);
			$table->string('galioja_iki', 191);
			$table->string('pavadinimas', 191);
			$table->string('kaina', 191);
			$table->string('preke', 191);
			$table->string('sandelis', 191);
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
		Schema::drop('akcijos');
	}

}
