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

/*
 * UZSAKYMAI
 * */ 
Route::prefix('/uzsakymai')->group(function () {
    Route::get('', 'UzsakymaiController@index');
    Route::get('{uzsakymai}', 'UzsakymaiController@show');
    Route::post('store', 'UzsakymaiController@store');
    Route::patch('{uzsakymai}', 'UzsakymaiController@update');
    Route::delete('{uzsakymai}/destroy', 'UzsakymaiController@destroy');
});


Route::resource('testas', 'TestasController');

Route::resource('sandeliai', 'SandeliaiController');

/*
 * Sandeliai
 * */ 
Route::prefix('/sandeliai')->group(function () {
    Route::get('', 'SandeliaiController@index');
    Route::post('store', 'SandeliaiController@store');
});

/*
 * Generuoti
 * */ 
Route::prefix('/generuoti')->group(function () {
    Route::get('', 'GeneruotiController@index');
    Route::post('store', 'GeneruotiController@store');
});

/*
 * Vaztaraščiai
 * */ 
Route::prefix('/vaztarasciai')->group(function () {
    Route::get('', 'VaztarasciaiController@index');
    Route::post('store', 'VaztarasciaiController@store');
});

/*
 * Keliones lapai
 * */ 
Route::prefix('/kelione')->group(function () {
    Route::get('', 'KelioneController@index');
    Route::post('store', 'KelioneController@store');
});

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
 * Akcijos
 * */ 
Route::prefix('/akcijos')->group(function () {
    Route::get('', 'AkcijosController@index');
    Route::get('{akcijos}', 'AkcijosController@show');
    Route::post('store', 'AkcijosController@store');
    Route::post('store_akcija', 'AkcijosController@store_akcija');
    Route::patch('{akcijos}', 'AkcijosController@update');
    Route::delete('{akcijos}/destroy', 'AkcijosController@destroy');
});
/*
 * Analizė
 * */ 
Route::prefix('/analize')->group(function () {
    Route::get('', 'AnalizeController@index');
    Route::get('{analize}', 'AnalizeController@show');
    Route::post('store', 'AnalizeController@store');
    Route::patch('{analize}', 'AnalizeController@update');
    Route::delete('{analize}/destroy', 'AnalizeController@destroy');
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

