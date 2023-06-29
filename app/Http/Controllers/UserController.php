<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
  public function dashboard(){
    $data = [
      'orders'=>auth()->user()->orders,
      'collections'=>auth()->user()->book_collection
    ];
    return view('dashboard', $data);
//    return Inertia::render('Dashboard',$data);
  }
}
