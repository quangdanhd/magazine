<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable;
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
        self::creating(function ($model) {
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
                $url .= date('Ymd') . '-' . time();
            }
            $model->url = $url;
        });
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
            if (!$model->id && !!$model->publish) {
                $model->new_of_category = 1;
                $model->newest = 1;
            }
        });
    }

    public function dataFormIndex()
    {
        return $this->whereNotNull('news.id')->orderBy('id', 'desc');
    }

    public function news_top()
    {
        return $this->orderBy('views', 'desc');
    }
}
