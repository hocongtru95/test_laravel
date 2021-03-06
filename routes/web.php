<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('create', function () {
    $book = new \App\Book;
    $book->title = 'My book';
    $book->description = "This my description This my description";
    $book->save();
});
Route::get('get_all', function () {
    return \App\Book::all();
});

Route::get('delete', function () {
    $book = \App\Book::find(1);
    if ($book) $book->delete();
});


Route::get('home', 'HomeController@index');
Route::get('home/heart', 'HomeController@heart');
Route::get('pdf', 'HomeController@pdfJs');

Route::get('lazy-load', function () {
    return view('lazyload_jquery');
});

Route::get('banner', function () {
    return view('banner.index');
});

Route::get('banner-data', function () {
    return view('banner.banner-data');
});

Route::get('jwplayer', function () {
    return view('jwplayer');
});

Route::get('adnative', function () {
    return view('adnative.index');
});
