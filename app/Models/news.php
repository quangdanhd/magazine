<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class news extends Model implements Authenticatable
{
    use \Illuminate\Auth\Authenticatable;
    protected $table = 'news';
    protected $primaryKey = 'id';
    protected $fillable = ['title', 'category_id', 'describe', 'content', 'url', 'from_url', 'image', 'author_id', 'views', 'publish'];

    public $timestamps = TRUE;

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    public static function boot()
    {
        parent::boot();
        self::saving(function ($model) {
            $category_id = $model->category_id;
            // new_of_category
            $take = 6;
            DB::table('news')->where('publish', 1)->where('category_id', $category_id)->where('new_of_category', 1)->update(['new_of_category' => 0]);
            DB::table('news')->where('publish', 1)->where('category_id', $category_id)->orderBy('id', 'desc')->take($take)->update(['new_of_category' => 1]);
            // newest
            $take = 6;
            DB::table('news')->where('publish', 1)->where('newest', 1)->update(['newest' => 0]);
            DB::table('news')->where('publish', 1)->orderBy('id', 'desc')->take($take)->update(['newest' => 1]);
            // Url
            $url = trim($model->title);
            $url = convert_name($url);
            $url = strtolower($url);
            // Removes special chars.
            $url = preg_replace('/[^A-Za-z0-9\s]/', '', $url);
            $url = preg_replace('/\s+/', '-', $url);
            // Check url
            $check = DB::table('news')->select('id')->where('url', $url)->first();
            if ($check) {
                $created_at = $model->created_at;
                if (!$created_at) {
                    $date = date('Ymd-His');
                } else {
                    $date = $model->created_at->format('Ymd-His');
                }
                $url .= '-' . $date;
            }
            $model->url = $url;
            if (!$model->id && !!$model->publish) {
                $model->new_of_category = 1;
                $model->newest = 1;
            }
            Cache::forget('home-data-cached');
            Cache::forget('news-popular-from-date');
        });
    }

    public function dataFormIndex()
    {
        return $this->whereNotNull('news.id')->orderBy('id', 'desc');
    }

    public function getNewsPopularFrom($from = '')
    {
        $take = 5;
        $return = $this->all('title', 'image', 'url', 'created_at');
        if (!!$from) {
            $return = $return->where('created_at', '>=', $from);
        }
        return $return->sortByDesc('view')->take($take);
    }

    public function getCachedNewsPopular()
    {
        $take = 5;
        $cache_key = 'news-popular-from-date';
        $popular = Cache::get($cache_key);
        if (!$popular) {
            // one day (cache 30 minutes)
            $seconds = 30 * 60;
            $from = date('Y-m-d H:i:s', strtotime('-1 days'));
            $get_popular = (new news)->getNewsPopularFrom($from);
            if (sizeof($get_popular->toArray()) < $take) {
                // one weeks (cache 1 day)
                $seconds = 1 * 24 * 60 * 60;
                $from = date('Y-m-d H:i:s', strtotime('-7 days'));
                $get_popular = (new news)->getNewsPopularFrom($from);
                if (sizeof($get_popular->toArray()) < $take) {
                    // all (cache 1 day)
                    $get_popular = (new news)->getNewsPopularFrom();
                }
            }
            Cache::add($cache_key, $get_popular, $seconds);
            $popular = Cache::get($cache_key);
        }
        return $popular;
    }
}
