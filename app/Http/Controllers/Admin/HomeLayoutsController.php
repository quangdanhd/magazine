<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\View;

class HomeLayoutsController extends Controller
{
    public function index()
    {
//        Cache::pull('test');
//        $test = (new \App\Models\news_category)->getCachedCategory();
////        Cache::put('test', 'value');
//        dd(1);
//        foreach ($test as $key => $value) {
//            dd($value->name);
//        }
        $obj = [];
        $positions = config('constants.home_positions');
        $category = DB::table('news_category')->select('id', 'name')->pluck('name', 'id')->toArray();
        $obj['positions'] = $positions;
        $obj['category'] = $category;
        $obj['image'] = '/img/home_layouts.jpg';
        return View::make('admin/home_layouts')->with('obj', $obj);
    }
}
