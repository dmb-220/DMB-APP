<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUzsakymaisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('uzsakymais', function (Blueprint $table) {
            $table->id();
            $table->string('vardas');
            $table->string('numeris');
            $table->string('adresas');
            $table->string('telefonas');
            $table->string('email');
            $table->string('patvirtinta');
            $table->string('isvesta');
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
        Schema::dropIfExists('uzsakymais');
    }
}
