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
        $menu = [];
        $menu_arr = [];
        if (!$menu_db->isEmpty()) {
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
        }
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
}
