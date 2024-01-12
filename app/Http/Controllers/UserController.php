<?php

namespace App\Http\Controllers;


use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Redirect;

class UserController extends Controller
{
    function profile(){
        session()->flash('success', 'Make sure to update your profile');
        return Inertia::render("Profile");
    }

    function showRegister(){
        return inertia("Register");
    }

    function Register(UserRequest $request){
        $incomingData = $request->validated();

        $user = User::create($incomingData);
        //auth()->login(user);

        // flash message
        session()->flash('success', 'You have successfully registered please login');
        return redirect("login");
    }
    
    function Login(){
        return inertia("Login");
    }


    function showLogin(){
        return inertia("Login");
    }
}
