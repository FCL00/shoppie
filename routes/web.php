<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get("/", function(){
    return inertia("Home");
});

Route::get("/product", function(){
    return inertia("Product");
});

Route::get("/profile", function(){
    return inertia("Profile");
});

Route::get("/login", function(){
    return inertia("Login");
});


