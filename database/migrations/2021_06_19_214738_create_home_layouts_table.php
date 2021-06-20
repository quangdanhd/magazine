<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHomeLayoutsTable extends Migration
{
    public function up()
    {
        Schema::create('home_layouts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('position');
            $table->integer('category_id');
        });
    }

    public function down()
    {
        Schema::dropIfExists('home_layouts');
    }
}
