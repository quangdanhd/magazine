<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateNewsCategoryTable extends Migration
{
    public function up()
    {
        Schema::dropIfExists('news_category');
        Schema::create('news_category', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 100);
            $table->string('url', 100);
            $table->timestamps();
        });
        DB::table('news_category')->insert(
            array(
                [
                    'name' => 'MOVIES',
                    'url' => 'movies',
                ],
                [
                    'name' => 'SPORTS',
                    'url' => 'sports',
                ],
                [
                    'name' => 'TECHNOLOGY',
                    'url' => 'technology',
                ],
            )
        );
    }

    public function down()
    {
        Schema::dropIfExists('news_category');
    }
}
