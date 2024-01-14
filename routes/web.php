<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
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

// User Related Routes
Route::get("/login", [UserController::class, "showLogin"])->name("show_login");
Route::post("/login", [UserController::class, "Login"])->name("login");
Route::get("/register", [UserController::class, "showRegister"]);
Route::post("/register", [UserController::class, "Register"]);
Route::get("/profile", [UserController::class, "profile"]);


// cart related routes
Route::get("/cart", [CartController::class, "index"]);