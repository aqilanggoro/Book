<?php

use App\Http\Controllers\ProductPageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SearchController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/',[\App\Http\Controllers\ProductPageController::class, 'homepage'])->name("home");
Route::get('/search',[\App\Http\Controllers\SearchController::class, 'index'])->name("search");
Route::get("/search", [SearchController::class, 'index'])->name('search');
Route::get("/book/{book}", [ProductPageController::class, 'index'])->name('book.show');

Route::post("cart/{book}", [\App\Http\Controllers\CartController::class,'store'])->name("cart");
Route::post("cart/{book}/increase", [\App\Http\Controllers\CartController::class,'increase'])->name("cart.increase");
Route::post("cart/{book}/decrease", [\App\Http\Controllers\CartController::class,'decrease'])->name("cart.decrease");
Route::post("cart/{book}/remove", [\App\Http\Controllers\CartController::class,'remove'])->name("cart.remove");

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
