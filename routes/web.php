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

//Send E-mail
Route::get('send_email','SendController@attachment_email');
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


/*
 *PERKELIMAI
 * */ 
Route::prefix('/perkelimai')->group(function () {
    Route::get('', 'PerkelimaiController@index');
    Route::get('{perkelimai}', 'PerkelimaiController@show');
    Route::post('store', 'PerkelimaiController@store');
    Route::patch('{perkelimai}', 'PerkelimaiController@update');
    Route::delete('{perkelimai}/destroy', 'PerkelimaiController@destroy');
});

//Route::resource('testas', 'TestasController');
Route::prefix('/testas')->group(function () {
    Route::get('', 'TestasController@index');
    Route::get('idx', 'TestasController@idx');
});

Route::prefix('/pvz')->group(function () {
    Route::get('', 'PvzController@index');
    //Route::get('idx', 'PvzController@idx');
});

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
* Generuoti
* */ 
Route::prefix('/intepreke')->group(function () {
   Route::get('', 'IntePrekeController@index');
   Route::post('store_lt', 'IntePrekeController@store_lt');
   Route::post('store_lv', 'IntePrekeController@store_lv');
   Route::post('store_ee', 'IntePrekeController@store_ee');
   Route::post('store', 'IntePrekeController@store');
});

/*
 * Vaztaraščiai
 * */ 
Route::prefix('/vaztarasciai')->group(function () {
    Route::get('', 'VaztarasciaiController@index');
    Route::post('store', 'VaztarasciaiController@store');
});

/*
 * Inte
 * */ 
Route::prefix('/inte')->group(function () {
    Route::get('', 'InteController@index');
    Route::post('store', 'InteController@store');
    Route::post('store_bankas', 'InteController@store_bankas');
    Route::post('store_pardavimai', 'InteController@store_pardavimai');
});

/*
 * GPAIS
 * */ 
Route::prefix('/gpais')->group(function () {
    Route::get('', 'GpaisController@index');
    Route::post('store', 'GpaisController@store');
});

/*
 * Inte
 * */ 
Route::prefix('/visilikuciai')->group(function () {
    Route::get('', 'VisiLikuciaiController@index');
    //Route::post('store', 'InteController@store');
});

/*
 * LT to EE
 * */ 
Route::prefix('/replace')->group(function () {
    Route::get('', 'replaceController@index');
    //Route::post('store', 'InteController@store');
});

/*
 * Grazinimu formavimas
 * */ 
Route::prefix('/grazinimai')->group(function () {
    Route::get('', 'GrazinimaiController@index');
    Route::get('grazinimai_lv', 'GrazinimaiController@grazinimai_lv');
    Route::post('sepa', 'GrazinimaiController@sepa');
    Route::post('sepa_LV', 'GrazinimaiController@sepa_LV');
    Route::post('store', 'GrazinimaiController@store');
    Route::post('store_LV', 'GrazinimaiController@store_LV');
    Route::post('store_bankas', 'GrazinimaiController@store_bankas');
    Route::post('store_grazinimai', 'GrazinimaiController@store_grazinimai');
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

