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
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::resource('photos', 'PhotoController');

/*
 * CSV
 * */ 
Route::prefix('/csv')->group(function () {
    Route::get('', 'CSVController@index');
    Route::get('{csv}', 'CSVController@show');
    Route::post('store', 'CSVController@store');
    Route::post('CSV_store', 'CSVController@CSV_store');
    Route::patch('{csv}', 'CSVController@update');
    Route::delete('{csv}/destroy', 'CSVController@destroy');
});

/*
 * Statistika
 * */ 
Route::prefix('/statistika')->group(function () {
    Route::get('', 'StatistikaController@index');
    Route::get('{statistika}', 'StatistikaController@show');
    Route::post('store', 'StatistikaController@store');
    Route::patch('{statistika}', 'StatistikaController@update');
    Route::delete('{statistika}/destroy', 'StatistikaController@destroy');
});

/*
 * Pardavimai
 * */ 
Route::prefix('/pardavimai')->group(function () {
    Route::get('', 'PardavimaiController@index');
    Route::get('{pardavimai}', 'PardavimaiController@show');
    Route::post('store', 'PardavimaiController@store');
    Route::patch('{pardavimai}', 'PardavimaiController@update');
    Route::delete('{pardavimai}/destroy', 'PardavimaiController@destroy');
});

/*
 * Likutis
 * */ 
Route::prefix('/likutis')->group(function () {
    Route::get('', 'LikutisController@index');
    Route::get('{likutis}', 'LikutisController@show');
    Route::post('store', 'LikutisController@store');
    Route::patch('{likutis}', 'LikutisController@update');
    Route::delete('{likutis}/destroy', 'LikutisController@destroy');
});

/*
 * Prekes
 * */ 
Route::prefix('/prekes')->group(function () {
    Route::get('', 'PrekesController@index');
    Route::get('{prekes}', 'PrekesController@show');
    Route::post('store', 'PrekesController@store');
    Route::patch('{prekes}', 'PrekesController@update');
    Route::delete('{prekes}/destroy', 'PrekesController@destroy');
});

/*
 * Clients management
 * */
Route::prefix('/clients')->group(function () {
    Route::get('', 'ClientsController@index');
    Route::get('{client}', 'ClientsController@show');
    Route::post('store', 'ClientsController@store');
    Route::patch('{client}', 'ClientsController@update');
    Route::post('destroy', 'ClientsController@destroyMass');
    Route::delete('{client}/destroy', 'ClientsController@destroy');
});

/*
 * Current user
 * */
Route::prefix('/user')->group(function () {
    Route::get('', 'CurrentUserController@show');
    Route::patch('', 'CurrentUserController@update');
    Route::patch('/password', 'CurrentUserController@updatePassword');
});
