<?php

namespace App\Models;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Model;

class home_layouts extends Model implements Authenticatable
{
    use \Illuminate\Auth\Authenticatable;
    protected $table = 'home_layouts';
    protected $primaryKey = 'id';
    protected $fillable = ['position', 'category_id'];

    public $timestamps = FALSE;

    public function getAll()
    {
        return $this->all()->sortBy('id');
    }

    public function getCachedHomeLayouts()
    {
        return Cache::rememberForever('home-layouts-cached', function () {
            return home_layouts::getAll();
        });
    }
}
