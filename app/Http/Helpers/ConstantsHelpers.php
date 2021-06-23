<?php

use App\Models\news;
use App\Models\news_category;
use Illuminate\Support\Facades\DB;

function get_db_column()
{
    $table = '';
    $field_name = DB::getSchemaBuilder()->getColumnListing($table);
    foreach ($field_name as $key => $value) {
        echo "'" . $value . "',<br>";
    }
    get_db_column_type($table);
    dd(1);
    return;
}

function get_db_column_type($table)
{
    echo '<br><br><br>';
    $field_name = DB::getSchemaBuilder()->getColumnListing($table);
    $field_type = [];
    foreach ($field_name as $key => $value) {
        // $f_type = DB::getSchemaBuilder()->getColumnType($table, $value);
        $f_type = 'text';
        $field_type[$value] = $f_type;
        echo "'" . $value . "'" . ' => ' . "'" . $f_type . "',<br>";
    }
    dd(1);
    return;
}

function get_top_news()
{
    return DB::table('news')->where('publish', 1)->orderBy('views', 'desc');
}

function session_uniqueID()
{
    return session_client_ip();
    //    if (session_status() === PHP_SESSION_NONE) {
    //        session_start();
    //    }
    //    if (!isset($_SESSION['uniqueID'])) {
    //        $_SESSION['uniqueID'] = uniqid('', true) . '-' . time();
    //    }
    //    return $_SESSION['uniqueID'];
}

function session_client_ip()
{
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}

function menu_category()
{
    // Category
    $category_db = DB::table('news_category')->select('id', 'name')->orderBy('id', 'asc')->pluck('name', 'id')->toArray();
    $obj['category'] = $category_db;
    $obj['category_show'] = 9;
    return $obj;
}

function generate_sample_data()
{
    $count = DB::table('news')->select('id')->count();
    if (!$count) {
        return 'Tạo 1 tin tức mới để làm dữ liệu mẫu, và thử lại tính năng này!';
    }
    if ($count > 1) {
        return 'Không sử dụng được tính năng tạo dữ liệu mẫu. Dữ liệu tin tức trong database có nhiều hơn 1 bản ghi!';
    }
    $news = DB::table('news')->select('title', 'category_id', 'content', 'describe', 'image', 'publish', 'new_of_category', 'url')->orderBy('id', 'desc')->first();
    if ($news) {
        $data = (array)$news;
        $category = DB::table('news_category')->orderBy('id', 'asc')->pluck('id')->toArray();
        foreach ($category as $key => $value) {
            $new_data = $data;
            $new_data['category_id'] = $value;
            for ($i = 0; $i <= 4; $i++) {
                $new_data['url'] = $data['url'] . '-' . $key . '-' . $i;
                news::create($new_data);
            }
        }
    }
    return 'Tạo dữ liệu mẫu thành công!';
}

function get_name_image_upload($image)
{
    return time() . '.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
}

function config_field($key)
{
    return config('constants.field.' . $key);
}

function convert_name($str)
{
    $str = preg_replace("/([àáạảãâầấậẩẫăằắặẳẵ])/", 'a', $str);
    $str = preg_replace("/([èéẹẻẽêềếệểễ])/", 'e', $str);
    $str = preg_replace("/([ìíịỉĩ])/", 'i', $str);
    $str = preg_replace("/([òóọỏõôồốộổỗơờớợởỡ])/", 'o', $str);
    $str = preg_replace("/([ùúụủũưừứựửữ])/", 'u', $str);
    $str = preg_replace("/([ỳýỵỷỹ])/", 'y', $str);
    $str = preg_replace("/(đ)/", 'd', $str);
    $str = preg_replace("/([ÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴ])/", 'A', $str);
    $str = preg_replace("/([ÈÉẸẺẼÊỀẾỆỂỄ])/", 'E', $str);
    $str = preg_replace("/([ÌÍỊỈĨ])/", 'I', $str);
    $str = preg_replace("/([ÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠ])/", 'O', $str);
    $str = preg_replace("/([ÙÚỤỦŨƯỪỨỰỬỮ])/", 'U', $str);
    $str = preg_replace("/([ỲÝỴỶỸ])/", 'Y', $str);
    $str = preg_replace("/(Đ)/", 'D', $str);
    return $str;
}

function explode_filter()
{
    return config('constants.explode_filter');
}

function config_search_popup($key)
{
    if ($key == 'news_id') {
        return [
            'search_table' => 'news',
            'primaryKey' => 'id',
            'search_filter' => [
                'title' => config_field('text'),
                'category_id' => config_field('select'),
                'publish' => config_field('select'),
                'created_at' . explode_filter() . 'from' => config_field('date'),
                'created_at' . explode_filter() . 'to' => config_field('date'),
            ],
            'search_autofill' => [
                'news_id' => 'id',
            ],
            'join' => [],
            'field_join' => [],
            'query' => [
                'category_id' => '=',
                'publish' => '=',
                'created_at' . explode_filter() . 'to' => '<=',
                'created_at' . explode_filter() . 'from' => '>=',
            ],
            'select' => [
                'category_id' => (new news_category)->getCachedCategory()->pluck('name', 'id'),
                'publish' => [
                    '0' => 'no',
                    '1' => 'yes',
                ],
            ],
            'default_search' => [
                'publish' => '1',
            ],
            'hidden_column' => []
        ];
    }
    if ($key == 'news_category_id') {
        return [
            'search_table' => 'news_category',
            'primaryKey' => 'id',
            'search_filter' => [
                'name' => config_field('text'),
                'url' => config_field('text'),
            ],
            'search_autofill' => [
                'news_category_id' => 'id',
            ],
            'join' => [],
            'field_join' => [],
            'query' => [],
            'select' => [],
            'default_search' => [],
            'hidden_column' => []
        ];
    }
    return [];
}
