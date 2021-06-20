<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\home_layouts;
use App\Models\news_category;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\View;

class HomeLayoutsController extends Controller
{
    public function index()
    {
        if (request()->method() == 'GET') {
            $obj = [];
            $obj['title'] = 'Bố cục trang chủ';
            $positions = config('constants.home_positions');
            $category = (new news_category)->getCachedCategory()->pluck('name', 'id')->toArray();
            $layout_db = (new home_layouts)->getAll()->toArray();
            $layouts = [];
            foreach ($positions as $key => $value) {
                $layouts[$key] = [
                    'id' => '',
                    'position' => $key,
                    'category_id' => '',
                ];
            }
            $position_key = array_keys($positions);
            foreach ($layout_db as $key => $value) {
                $arr = (array)$value;
                if (in_array($arr['position'], $position_key)) {
                    $layouts[$arr['position']] = $arr;
                }
            }
            $obj['positions'] = $positions;
            $obj['category'] = $category;
            $obj['layouts'] = $layouts;
            $obj['image'] = '/img/home_layouts.jpg';
            if (request()->ajax()) {
                return $obj;
            }
            return View::make('admin/home_layouts')->with('obj', $obj);
        } else {
            foreach (request()->all()['layouts'] as $key => $value) {
                $id = $value['id'];
                $data = [
                    'position' => $value['position'],
                    'category_id' => $value['category_id'],
                ];
                if (!!$id) {
                    home_layouts::find($id)->update($data);
                } else {
                    home_layouts::create($data);
                }
            }
            Cache::put('home-layouts-cached', (new home_layouts)->getAll());
            return [
                'status' => 'success',
                'message' => 'Cập nhật bố cục trang chủ thành công!',
            ];
        }
    }
}
