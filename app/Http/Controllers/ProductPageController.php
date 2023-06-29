<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\BookTag;
use App\Models\Tag;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class ProductPageController extends Controller
{

    public function homepage(){
        $tags = Tag::query()->inRandomOrder()->take(4)->get()->map(function (Tag $tag){
            $tag->append(['random_books']);
            return $tag;
        });
        $data = [
          'tags'=>$tags,
          'canLogin' => Route::has('login'),
          'canRegister' => Route::has('register'),
          'laravelVersion' => Application::VERSION,
          'phpVersion' => PHP_VERSION,
        ];
        return view("Welcome", $data);
//        return Inertia::render('Welcome', $data);
    }

    public function index(Book $book){
        $q = BookTag::query()->where('book_id', $book->id)->get()->pluck('tag_id');
        $recomendations = Book::query()->whereIn('id',
            BookTag::query()->whereIn('tag_id', $q)->pluck('book_id')
        )->take(10)->get();
        $data = [
          "product"=>$book,
          "recomendations"=>$recomendations
        ];
        return view('book', $data);
//        return Inertia::render('Product',$data);
    }
}
