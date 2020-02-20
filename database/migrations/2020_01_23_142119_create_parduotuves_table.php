<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateParduotuvesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('parduotuves', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('country_id')->nullable();
			$table->string('pavadinimas', 25)->nullable();
			$table->string('sutrumpinimas', 4)->nullable();
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
		Schema::drop('parduotuves');
	}

}
