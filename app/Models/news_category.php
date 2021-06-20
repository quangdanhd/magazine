<?php

namespace App\Models;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Model;

class news_category extends Model implements Authenticatable
{
    use \Illuminate\Auth\Authenticatable;
    protected $table = 'news_category';
    protected $primaryKey = 'id';
    protected $fillable = ['name', 'url'];

    public $timestamps = TRUE;

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    public static function boot()
    {
        parent::boot();
        self::saved(function ($model) {
            Cache::forget('category-cached');
        });
    }

    public function getAll()
    {
        return $this->all()->sortBy('id');
    }

    public function getCachedCategory()
    {
        return Cache::rememberForever('category-cached', function () {
            return news_category::getAll();
        });
    }
}
