<?php


use App\Http\Controllers\Backoffice\BookController;
use App\Http\Controllers\Backoffice\DashboardController;
use App\Http\Controllers\Backoffice\OrderController;
use Illuminate\Support\Facades\Route;



Route::redirect('', "/backoffice/book")->name('backoffice.dashboard');
Route::resource('book', BookController::class)->names('backoffice.book');
Route::resource('order', OrderController::class)->names('backoffice.order');
