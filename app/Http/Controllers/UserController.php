<?php

namespace App\Http\Controllers;

use inertia;
use Illuminate\Http\Request;

class UserController extends Controller
{

    function showRegister(){
        return inertia("Register");
    }

    function Register(){
        return inertia("Login");
    }
    
    function Login(){
        return inertia("Login");
    }


    function showLogin(){
        return inertia("Login");
    }
}
