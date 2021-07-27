<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMainMenuTable extends Migration
{
    public function up()
    {
        Schema::create('main_menu', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title', 50);
            $table->integer('parent_id')->nullable();
            $table->integer('order');
            $table->integer('link_type');
            $table->integer('category_id')->nullable();
            $table->string('link', 500)->nullable();
            $table->boolean('active')->default(0);
            $table->dateTime('created_at');
            $table->dateTime('updated_at');
        });
    }

    public function down()
    {
        Schema::dropIfExists('main_menu');
    }
}
