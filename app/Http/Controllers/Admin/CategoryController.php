<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\View;
use Intervention\Image\Facades\Image;

class CategoryController extends Controller
{
    public function data_config()
    {
        // table_name
        $table_name = 'news_category';
        // PrimaryKey
        $primaryKey = 'id';
        // filed
        $field = [
            'name' => config_field('text'),
            'url' => config_field('text'),
        ];
        // hidden column
        $hidden_column = [];
        // default value
        $default_value = [];
        // label
        $label = [];
        // form
        $form = [
            0 => ['type' => 'div',
                'class' => 'col-md-12 col-lg-12 mt-2',
                'items' => [
                    0 => [
                        'type' => 'div',
                        'class' => 'col-md-12 col-lg-7',
                        'items' => [
                            0 => [
                                'type' => 'field',
                                'items' => [
                                    'name',
                                    'url',
                                ],
                            ]
                        ],
                    ],
                    1 => [
                        'type' => 'div',
                        'class' => 'col-md-12 col-lg-5',
                        'items' => [
                            0 => [
                                'type' => 'field',
                                'items' => [
                                ]
                            ],
                        ]
                    ],
                ],
            ],
        ];
        // select field
        $select = [];
        // required
        $required = [
            'name',
            'url',
        ];
        // reference
        $reference = [];
        // primarySearch
        $primarySearch = [];
        // search_popup
        $search_popup = $this->search_popup();
        // table join
        $table_join = $this->table_join();
        // index filter
        $index_filter = $this->index_filter();
        // field_join
        $field_join = $this->field_join();
        return [
            'table_name' => $table_name,
            'primaryKey' => $primaryKey,
            'field' => $field,
            'hidden_column' => $hidden_column,
            'default_value' => $default_value,
            'label' => $label,
            'form' => $form,
            'select' => $select,
            'required' => $required,
            'reference' => $reference,
            'search_popup' => $search_popup,
            'primarySearch' => $primarySearch,
            'table_join' => $table_join,
            'redirect' => true, // true: redirect to index, false: show message
            'index_filter' => $index_filter,
            'import' => false,
            'export' => false,
            'field_join' => $field_join,
        ];
    }

    public function index_filter()
    {
        return config_search_popup('news_category_id');
    }

    public function search_popup()
    {
        return [];
    }

    public function table_join()
    {
        return [];
    }

    public function field_join()
    {
        return [];
    }

    public function index()
    {
        return reports_form_index($this->data_config());
    }

    public function show($id)
    {
        return reports_form_show($id, $this->data_config());
    }

    public function create()
    {
        return reports_form_create($this->data_config());
    }

    public function store(Request $request)
    {
        $requestData = $request->all();
        $message = $this->this_validate();
        if ($message) {
            return [
                'status' => 'error',
                'message' => $message,
            ];
        }
        $return = reports_form_store($this->data_config(), $requestData);
        return $return;
    }

    public function edit($id)
    {
        return reports_form_edit($id, $this->data_config());
    }

    public function update(Request $request)
    {
        $requestData = $request->all();
        $message = $this->this_validate();
        if ($message) {
            return [
                'status' => 'error',
                'message' => $message,
            ];
        }
        $return = reports_form_update($this->data_config(), $requestData);
        return $return;
    }

    public function this_validate()
    {
        $request = request()->all();
        $message = [];
        $id = isset($request['formData']['id']) ? $request['formData']['id'] : '';
        $url = isset($request['formData']['url']) ? $request['formData']['url'] : '';
        $check_url = DB::table('news_category')->select('id')->where('url', $url)->where('id', '!=', $id)->first();
        if ($check_url) {
            $message[] = 'Danh mục không được để url trùng nhau!';
        }
        if ($message) {
            $message = '<br>' . join('<br>', $message);
        }
        return $message;
    }
}
