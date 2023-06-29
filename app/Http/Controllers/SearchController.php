<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\BookTag;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
  public function index(){
    $query = Book::query();
    $search = \request()->input('keyword');
    $tagId = \request()->input('tag');
    $data = [
      "tags"=>Tag::query()->orderBy('name')->get(),
      'books'=>Book::bookSearch($search, $tagId)->paginate(25)
    ];
    return view("search", $data);
//    return Inertia::render('Search/index',$data);
  }
}
