<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class WelcomeController extends Controller
{
  public function home(){
    return Inertia::render("Welcome");
    return view("welcome");
  }
}
