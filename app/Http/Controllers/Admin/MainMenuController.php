<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\news_category;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\View;

class MainMenuController extends Controller
{
    private function data_config()
    {
        return [
            'parent_deep' => 2, // menu level limit
        ];
    }

    public function index()
    {
        $obj = [];
        $obj['title'] = 'Menu Manage';
        // Menu
        $menu_db = DB::table('main_menu')->select('id', 'title', 'parent_id', 'order', 'link_type', 'category_id', 'link', 'active')->orderBy('order', 'asc')->orderBy('id', 'asc')->get();
        // Menu Tree
        $menu = $this->make_menu_tree($menu_db);
        // Menu Indent
        $menu_indent = $this->menu_indent($menu);
        $obj['menu'] = $menu_indent['new_menu'];
        // Parent select
        $obj['parent_deep'] = $this->data_config()['parent_deep'];
        $obj['parent_select'] = $menu_indent['parent_select'];
        // Category select
        $category_db = (new news_category)->getCachedCategory()->pluck('name', 'id')->toArray();
        $obj['category'] = $category_db;
        // Category link select
        $category_link_db = (new news_category)->getCachedCategory()->pluck('url', 'id')->toArray();
        $obj['category_link'] = $category_link_db;
        if (request()->ajax()) {
            return $obj;
        } else {
            return View::make('admin/menu_manage')->with('obj', $obj);
        }
    }

    public function make_menu_tree($menu_db)
    {
        $menu = [];
        $menu_arr = [];
        foreach ($menu_db as $key => $value) {
            $menu_arr[((array)$value)['id']] = (array)$value;
        }
        $menu_arr_2 = $menu_arr;
        // Root
        foreach ($menu_arr as $key => $value) {
            if (!$value['parent_id']) {
                $menu[$value['id']] = $value;
                unset($menu_arr_2[$key]);
            }
        }
        foreach ($menu as $key => $value) {
            $this->menu_tree($menu[$key], $menu_arr_2);
        }
        return $menu;
    }

    private function menu_tree(&$tree_child, &$menu_arr_2)
    {
        $child = [];
        foreach ($menu_arr_2 as $key => $value) {
            if ($value['parent_id'] == $tree_child['id']) {
                $child[$value['id']] = $value;
                unset($menu_arr_2[$key]);
            }
        }
        if ($child) {
            $tree_child['child'] = $child;
            foreach ($tree_child['child'] as $key => $value) {
                $this->menu_tree($tree_child['child'][$key], $menu_arr_2);
            }
        }
    }

    private function menu_indent($menu)
    {
        $new_menu = [];
        $parent_select = [];
        $indent = -1;
        $this->menu_indent_child($new_menu, $parent_select, $menu, $indent);
        return [
            'new_menu' => $new_menu,
            'parent_select' => $parent_select,
        ];
    }

    private function menu_indent_child(&$new_menu, &$parent_select, $child, $indent)
    {
        $parent_deep = $this->data_config()['parent_deep'];
        $indent++;
        foreach ($child as $key => $value) {
            $arr = $value;
            if (isset($value['child'])) {
                unset($arr['child']);
            }
            $arr['indent'] = $indent;
            $new_menu[] = $arr;
            if (isset($value['child'])) {
                $this->menu_indent_child($new_menu, $parent_select, $value['child'], $indent);
            }
            if ($indent < $parent_deep) {
                $parent_select[$arr['id']] = $arr['title'];
            }
        }
    }

    public function menu_save()
    {
        $request = request()->all();
        $new_data = isset($request['newData']) ? $request['newData'] : [];
        $update_data = isset($request['updateData']) ? $request['updateData'] : [];
        // Validate
        $errors = [];
        if ($new_data) {
            $new_errors = $this->menu_validator($new_data);
            $errors = array_merge($errors, $new_errors);
        }
        if ($update_data) {
            $update_errors = $this->menu_validator($update_data);
            $errors = array_merge($errors, $update_errors);
        }
        if ($errors) {
            $errors = '<br>' . join('<br>', $errors);
            return [
                'status' => 'error',
                'message' => $errors,
            ];
        }
        // New
        foreach ($new_data as $key => $value) {
            (new \App\Models\main_menu)->create($value);
        }
        // Update
        foreach ($update_data as $key => $value) {
            (new \App\Models\main_menu)->find($value['id'])->update($value);
        }
        return [
            'status' => 'success',
            'message' => 'Lưu menu thành công!',
        ];
    }

    private function menu_validator($data)
    {
        $errors = [];
        $validator = Validator::make(
            $data,
            [
                '*.title' => 'required|string|max:50',
                '*.parent_id' => 'nullable|integer',
                '*.order' => 'nullable|integer',
                '*.category_id' => 'nullable|integer',
                '*.link' => 'nullable|string|max:500',
                '*.active' => 'nullable|min:0|max:1',
            ],
            []
        );
        if ($validator->fails()) {
            foreach ($validator->errors()->toArray() as $key => $value) {
                foreach ($value as $k_2 => $val_2) {
                    $errors[] = $val_2;
                }
            }
        }
        return $errors;
    }

    public function menu_order()
    {
        $request = request()->all();
        $id = isset($request['id']) ? $request['id'] : '';
        $order = isset($request['order']) ? $request['order'] : '';
        $menu = DB::table('main_menu')->select('order', 'parent_id')->where('id', $id)->first();
        if ($menu) {
            $menu = ((array)$menu);
            $parent_id = $menu['parent_id'];
            $order_menu = $menu['order'];
            $order_to = $menu['order'];
            $order_replace = $menu['order'];
            if ($order == 'up' || $order == 'down') {
                // Up
                if ($order == 'up') {
                    $order_to--;
                    if ($order_to < 0) {
                        $order_to = 0;
                    }
                    $order_replace = $order_to + 1;
                }
                // Down
                if ($order == 'down') {
                    $order_to = DB::table('main_menu')->select('id')->where('parent_id', $parent_id)->where('order', '<=', $order_menu)->count();
                    $count_all = DB::table('main_menu')->select('id')->where('parent_id', $parent_id)->count();
                    if ($order_to > $count_all - 1) {
                        $order_to = $count_all - 1;
                    }
                    $order_replace = $order_to - 1;
                }
                DB::table('main_menu')->where('parent_id', $parent_id)->where('order', $order_to)->update(['order' => $order_replace]);
                (new \App\Models\main_menu)->find($id)->update(['order' => $order_to]);
                return [
                    'status' => 'success',
                    'message' => 'Sắp xếp menu thành công!',
                ];
            }
        }
        return '';
    }
}
