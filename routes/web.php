<?php

use App\Http\Controllers\Admin\GetNewsController;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\HomeLayoutsController;
use App\Http\Controllers\Admin\MainMenuController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\DataSearch\DataFormIndexSearch;
use App\Http\Controllers\DataSearch\DataTableIndexSearch;
use Illuminate\Support\Facades\Route;

// Login
Route::group(['namespace' => 'Auth'], function () {
    Route::get('login', [LoginController::class, 'index'])->name('login');
    Route::post('login', [LoginController::class, 'login']);
    Route::get('logout', [LoginController::class, 'logout']);
});
// Data Search
Route::group(['namespace' => 'DataSearch'], function () {
    Route::post('form-index', [DataFormIndexSearch::class, 'index']);
    Route::post('data-table-index', [DataTableIndexSearch::class, 'index']);
});
// Admin
Route::group(['namespace' => 'Admin'], function () {
    Route::get('admin', [HomeController::class, 'index'])->name('home');
    // News
    Route::resource('news-manage', '\App\Http\Controllers\Admin\NewsController', [
        'only' => ['index', 'create', 'store', 'edit', 'update']
    ]);
    // Category
    Route::resource('category-manage', '\App\Http\Controllers\Admin\CategoryController', [
        'only' => ['index', 'create', 'store', 'edit', 'update']
    ]);
    // Home layouts
    Route::any('home-layouts', [HomeLayoutsController::class, 'index']);
    // Main menu
    Route::get('menu-manage', [MainMenuController::class, 'index']);
    Route::post('menu-save', [MainMenuController::class, 'menu_save']);
    Route::post('menu-order', [MainMenuController::class, 'menu_order']);
    // Flush Cache
    Route::get('flush-cache', [HomeController::class, 'flush_cache']);
    // generate_sample_data
    Route::get('generate-sample-data', [NewsController::class, 'generate']);
    // User
    //Route::resource('users', '\App\Http\Controllers\UserController', [
    //    'only' => ['index', 'create', 'store', 'edit', 'update']
    //]);
    // Get news form url ***
    //    Route::post('get-news-from-url', [GetNewsController::class, 'create_news']);
    //    Route::get('get-news-category', [GetNewsController::class, 'category']);
});
// Home
Route::get('/', [App\Http\Controllers\HomeController::class, 'index']);
// Latest Pagination
Route::get('latest-pagination', [App\Http\Controllers\HomeController::class, 'latest_pagination']);

// Category
Route::get('category/{url}', [App\Http\Controllers\HomeController::class, 'category']);
// News View
Route::get('{url}', [App\Http\Controllers\HomeController::class, 'show']);
