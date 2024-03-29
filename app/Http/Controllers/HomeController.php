<?php

namespace App\Http\Controllers;

use App\Models\home_layouts;
use App\Models\main_menu;
use App\Models\news;
use App\Models\news_category;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class HomeController extends ControllerUsers
{
    public function index()
    {
        $obj = [];
        $obj['menu'] = (new main_menu)->getCachedMenu();
        $obj['title'] = 'Magazine';
        // Positions
        $positions = config('constants.home_positions');
        $position_keys = array_keys($positions);
        // Category
        $obj['category'] = $this->all_category_data();
        // Layouts
        $layout_db = (new home_layouts)->getCachedHomeLayouts()->toArray();
        $layout_category = [];
        foreach ($layout_db as $key => $value) {
            if (in_array($value['position'], $position_keys)) {
                $layout_category[$value['position']] = $value['category_id'];
            }
        }
        // Home data
        $home_data = Cache::get('home-data-cached');
        if (!$home_data) {
            $home_data = DB::table('news')->select('id', 'title', 'category_id', 'describe', 'url', 'image', 'newest', 'created_at')->where(function ($query) {
                $query->where('new_of_category', 1)->orWhere('newest', 1);
            })->whereIn('category_id', array_values($layout_category))->where('publish', 1)->orderBy('id', 'desc')->get();
            Cache::put('home-data-cached', $home_data);
        }
        $feat = [];
        $position_1 = [];
        $position_2 = [];
        $position_3 = [];
        $position_4 = [];
        $position_5 = [];
        foreach ($home_data as $key => $value) {
            $arr = (array)$value;
            // Newest
            if (!!$arr['newest']) {
                $arr['image'] = $this->replace_image_size($arr['image']);
                $feat[] = $arr;
            }
            if ($layout_category[0] == $arr['category_id']) {
                $position_1[] = $arr;
            }
            if ($layout_category[1] == $arr['category_id']) {
                $position_2[] = $arr;
            }
            if ($layout_category[2] == $arr['category_id']) {
                $position_3[] = $arr;
            }
            if ($layout_category[3] == $arr['category_id']) {
                $position_4[] = $arr;
            }
            if ($layout_category[4] == $arr['category_id']) {
                $position_5[] = $arr;
            }
        }
        $obj['feat'] = $feat;
        $obj['position_1'] = $position_1;
        $obj['position_2'] = $position_2;
        $obj['position_3'] = $position_3;
        $obj['position_4'] = $position_4;
        $obj['position_5'] = $position_5;
        // Popular
        $popular = (new news)->getCachedNewsPopular()->toArray();
        $obj['popular'] = $popular;
        return view('home')->with('obj', $obj);
    }

    public function latest_pagination()
    {
        $page = isset(request()['page']) ? request()['page'] : '';
        if (request()->ajax() && !!$page) {
            $take = 6;
            $skip = $take * $page;
            $items_db = DB::table('news')->select('id', 'title', 'category_id', 'url', 'image', 'created_at')->where('publish', 1)->orderBy('id', 'desc')->skip($skip)->take(($take + 1))->get()->toArray();
            $items = [];
            foreach ($items_db as $key => $value) {
                if ($key < $take) {
                    $items[] = (array)$value;
                }
            }
            // Category
            $obj['category'] = $this->all_category_data();
            $obj['items'] = $items;
            // Html
            $html = (string)view('interface_front/loop_grid_pagination')->with('obj', $obj);
            // Next page
            $next_page = true;
            if (sizeof($items_db) <= $take) {
                $next_page = false;
            }
            return [
                'html' => $html,
                'next_page' => $next_page,
            ];
        }
        $obj['title'] = '404 | Not Found';
        return view('errors.404_custom')->with('obj', $obj);
    }

    public function show($url)
    {
        $obj = [];
        $obj['menu'] = (new main_menu)->getCachedMenu();
        $cache_keys = 'news-show-data-cached';
        $cache_items = 10;
        $data_cached = Cache::get($cache_keys);
        if ($data_cached == null) {
            $cache = [];
        } else {
            $cache = $data_cached;
        }
        if (isset($cache[$url])) {
            $obj = $cache[$url];
        } else {
            $news = DB::table('news')->select('id', 'title', 'describe', 'image', 'category_id', 'content', 'created_at')->where('url', $url)->where('publish', 1)->first();
            if ($news) {
                $obj['title'] = $news->title;
                $obj['detail'] = $news;
                $this->view_node($news->id);
                // Latest
                $obj['latest'] = $this->news_latest();
                // Category
                $obj['category'] = $this->all_category_data();
                // Related
                $take = 3;
                $related_db = DB::table('news')->select('id', 'title', 'url', 'image', 'created_at')->where('publish', 1)->where('category_id', $news->category_id)->orderBy('id', 'desc')->take($take)->get()->toArray();
                $related = array_map(function ($a) {
                    return (array)$a;
                }, $related_db);
                $obj['related'] = $related;
                $cache[$url] = $obj;
                if (sizeof($cache) > $cache_items) {
                    array_shift($cache);
                }
                $seconds = 24 * 60 * 60;
                Cache::put($cache_keys, $cache, $seconds);
            }
        }
        if (isset($obj['detail'])) {
            return view('detail')->with('obj', $obj);
        }
        $obj['title'] = '404 | Not Found';
        return view('errors.404_custom')->with('obj', $obj);
    }

    public function category($url)
    {
        $obj = [];
        $obj['menu'] = (new main_menu)->getCachedMenu();
        $category = DB::table('news_category')->select('id')->where('name', $url)->first();
        if ($category) {
            $obj['title'] = ucfirst($url);
            // List
            $take = 10;
            $list = DB::table('news')->select('id', 'title', 'describe', 'image', 'url', 'created_at')->where('category_id', $category->id)->where('publish', 1)->paginate($take);
            $obj['list'] = $list;
            // Latest
            $obj['latest'] = $this->news_latest();
            // Category
            $obj['category'] = $this->all_category_data();
            return view('category')->with('obj', $obj);
        }
        $obj['title'] = '404 | Not Found';
        return view('errors.404_custom')->with('obj', $obj);
    }

    public function view_node($news_id)
    {
        // views
        $uniqueID = session_uniqueID();
        $view = DB::table('news_view')->select('id')->where('news_id', $news_id)->where('unknown_token', $uniqueID)->first();
        if (!$view) {
            (new \App\Models\news_view)->create([
                'news_id' => $news_id,
                'unknown_token' => $uniqueID,
            ]);
        }
    }

    public function all_category_data()
    {
        $category_db = (new news_category)->getCachedCategory()->toArray();
        $category = [];
        foreach ($category_db as $key => $value) {
            $category[$value['id']] = [
                'name' => $value['name'],
                'url' => $value['url'],
            ];
        }
        return $category;
    }

    public function replace_image_size($img)
    {
        return str_replace('news_450x300', 'news', $img);
    }

    public function news_latest()
    {
        $latest_db = (new news)->getCachedNewsLatest()->toArray();
        $latest = [];
        foreach ($latest_db as $key => $value) {
            $arr = (array)$value;
            $latest[] = $arr;
        }
        return $latest;
    }
}
