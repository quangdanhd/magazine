<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\View;
use Intervention\Image\Facades\Image;

class NewsController extends Controller
{
    public function data_config()
    {
        // table_name
        $table_name = 'news';
        // PrimaryKey
        $primaryKey = 'id';
        // filed
        $field = [
            'title' => config_field('text'),
            'category_id' => config_field('select'),
            'content' => config_field('tiny_mce'),
            'describe' => config_field('textarea'),
            'image' => config_field('image'),
            'publish' => config_field('boolean'),
        ];
        // hidden column
        $hidden_column = [
            'content',
            'image',
            'url',
            'author_id',
            'new_of_category',
            'newest',
        ];
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
                        'class' => 'col-md-12 col-lg-5',
                        'items' => [
                            0 => [
                                'type' => 'field',
                                'items' => [
                                    'title',
                                    'category_id',
                                    'describe',
                                    'publish',
                                    'image',
                                ],
                            ]
                        ],
                    ],
                    1 => [
                        'type' => 'div',
                        'class' => 'col-md-12 col-lg-7',
                        'items' => [
                            0 => [
                                'type' => 'field',
                                'items' => [
                                    'content',
                                ]
                            ],
                        ]
                    ],
                ],
            ],
        ];
        // select field
        $select = [
            'category_id' => (new \App\Models\news_category)->getCachedCategory()->pluck('name', 'id'),
        ];
        // required
        $required = [
            'title',
            'category_id',
            'describe',
            'content',
            'image',
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
        return config_search_popup('news_id');
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
        $this->this_image($requestData);
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
        $id = isset($requestData['formData']['id']) ? $requestData['formData']['id'] : '';
        $message = $this->this_validate();
        if ($message) {
            return [
                'status' => 'error',
                'message' => $message,
            ];
        }
        $this->this_image($requestData);
        $return = reports_form_update($this->data_config(), $requestData);
        return $return;
    }

    public function this_validate()
    {
        $message = [];
        $validator = Validator::make(
            request()->all()['formData'],
            [
                'title' => [
                    'required',
                    'string',
                    'max:250',
                ],
                'category_id' => [
                    'required',
                    'integer',
                ],
                'describe' => [
                    'required',
                    'string',
                    'max:500',
                ],
                'content' => [
                    'required',
                ],
            ],
            [
                'title.required' => 'Tiêu đề không được để trống.',
                'title.max' => 'Tiêu đề không được vượt quá 250 ký tự.',
                'describe.required' => 'Mô tả không được để trống.',
                'describe.max' => 'Mô tả không được vượt quá 500 ký tự.',
            ]
        );
        if ($validator->fails()) {
            $message[] = $validator->errors()->first();
        }
        if ($message) {
            $message = '<br>' . join('<br>', $message);
        }
        return $message;
    }

    public function this_image(&$requestData)
    {
        $image = isset($requestData['dataImage']['image']) ? $requestData['dataImage']['image'] : '';
        if ($image) {
            $name = get_name_image_upload($image);
            Image::make($image)->save(public_path('images/news/') . $name);
            Image::make($image)->fit(450, 300)->save(public_path('images/news_450x300' . $name));
            $path = '/images/news_450x300/' . $name;
            $requestData['formData']['image'] = $path;
        }
    }

    public function generate()
    {
        $mes = generate_sample_data();
        return View::make('generate')->with('mes', $mes);
    }
}
