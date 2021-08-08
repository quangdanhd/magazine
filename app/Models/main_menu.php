<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

/**
 * @mixin Builder
 */
class main_menu extends Model implements Authenticatable
{
    use \Illuminate\Auth\Authenticatable;
    protected $table = 'main_menu';
    protected $primaryKey = 'id';
    protected $fillable = ['title', 'parent_id', 'order', 'link_type', 'category_id', 'link', 'active'];

    public $timestamps = TRUE;

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $parent_id = $model->parent_id;
            $model->order = DB::table('main_menu')->select('id')->where('parent_id', $parent_id)->count();
        });
        self::saving(function ($model) {
            if ($model->category_id != '') {
                $category = DB::table('news_category')->select('url')->where('id', $model->category_id)->first();
                if ($category) {
                    $model->link = 'category/' . ((array)$category)['url'];
                }
            }
            Cache::forget('menu-data-cached');
        });
    }

    private function getMenuActive()
    {
        return $this->all('id', 'title', 'parent_id', 'order', 'link', 'active')->where('active', 1)->sortBy('order')->sortBy('id');
    }

    public function getCachedMenu()
    {
        $cache_key = 'menu-data-cached';
        $menu_cached = Cache::get($cache_key);
        if ($menu_cached == null) {
            $menu_db = $this->getMenuActive()->toArray();
            $menu = (new \App\Http\Controllers\Admin\MainMenuController)->make_menu_tree($menu_db);
            Cache::put($cache_key, $menu);
            $menu_cached = Cache::get($cache_key);
        }
        return $menu_cached;
    }
}
