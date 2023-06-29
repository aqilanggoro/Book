<?php

use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/dashboard', [UserController::class, 'dashboard'])->name('dashboard');
Route::get('/checkout', [CheckoutController::class, 'index'])->name('checkout');
Route::post('/checkout', [CheckoutController::class, 'store'])->name('checkout.store');
Route::redirect('/orders','dashboard')->name('orders');
Route::post('/order/{order}', [OrderController::class, 'store'])->name('orders.payment');
