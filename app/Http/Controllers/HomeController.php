<?php

namespace App\Http\Controllers;

use App\Models\home_layouts;
use App\Models\news;
use App\Models\news_category;
use App\Models\news_view;
use Illuminate\Support\Facades\DB;

class HomeController extends ControllerUsers
{
    public function index()
    {
        // $obj = menu_category();
        $obj['title'] = 'Magazine';
        // Positions
        $positions = config('constants.home_positions');
        $position_keys = array_keys($positions);
        // Category
        $category_db = (new news_category)->getCachedCategory()->toArray();
        $category = [];
        foreach ($category_db as $key => $value) {
            $category[$value['id']] = [
                'name' => $value['name'],
                'url' => $value['url'],
            ];
        }
        $obj['category'] = $category;
        // Layouts
        $layout_db = (new home_layouts)->getCachedHomeLayouts()->toArray();
        $layout_category = [];
        foreach ($layout_db as $key => $value) {
            if (in_array($value['position'], $position_keys)) {
                $layout_category[$value['position']] = $value['category_id'];
            }
        }
        // Home data
        $home_data = DB::table('news')->select('id', 'title', 'category_id', 'describe', 'url', 'image', 'newest', 'created_at')->where(function ($query) {
            $query->where('new_of_category', 1)->orWhere('newest', 1);
        })->whereIn('category_id', array_values($layout_category))->where('publish', 1)->orderBy('id', 'desc')->get();
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
                $arr['image'] = str_replace('news_450x300', 'news', $arr['image']);
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

    public function show($url)
    {
        $obj = menu_category();
        $news = DB::table('news')->select('id', 'title', 'describe', 'category_id', 'content', 'created_at', 'updated_at')->where('url', $url)->where('publish', 1)->first();
        if ($news) {
            $obj['title'] = $news->title;
            $obj['detail'] = $news;
            $this->view_node($news->id);
            $this->aside_data($obj, $news->category_id);
            return view('detail')->with('obj', $obj);
        }
        $obj['title'] = '404 | Not Found';
        return view('errors.404_custom')->with('obj', $obj);
    }

    public function category($url)
    {
        $obj = menu_category();
        $category = DB::table('news_category')->select('id')->where('name', $url)->first();
        if ($category) {
            $obj['title'] = ucfirst($url);
            // List
            $take = 20;
            $list = DB::table('news')->select('id', 'title', 'describe', 'image', 'url')->where('category_id', $category->id)->where('publish', 1)->paginate($take);
            $obj['list'] = $list;
            $this->aside_data($obj, $category->id);
            return view('category')->with('obj', $obj);
        }
        $obj['title'] = '404 | Not Found';
        return view('errors.404_custom')->with('obj', $obj);
    }

    public function aside_data(&$obj, $category_id)
    {
        // Top
        $take = 4;
        $top_db = get_top_news();
        $top_db = $top_db->select('id', 'title', 'url', 'image')->take($take)->get();
        $top = [];
        foreach ($top_db as $key => $value) {
            $arr = (array)$value;
            $arr['image'] = str_replace('news_370x208', 'news_237x133', $arr['image']);
            $top[] = $arr;
        }
        $obj['top'] = $top;
        // Recommend
        $take = 5;
        $recommend_db = DB::table('news')->select('id', 'title', 'url', 'image')->where('publish', 1)->where('category_id', $category_id)->orderBy('id', 'desc')->take($take)->get();
        $obj['recommend'] = $recommend_db;
    }

    public function view_node($news_id)
    {
        // views
        $uniqueID = session_uniqueID();
        $view = DB::table('news_view')->select('id')->where('news_id', $news_id)->where('unknown_token', $uniqueID)->first();
        if (!$view) {
            news_view::create([
                'news_id' => $news_id,
                'unknown_token' => $uniqueID,
            ]);
        }
    }
}
