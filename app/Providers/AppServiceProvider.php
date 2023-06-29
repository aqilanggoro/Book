<?php

namespace App\Providers;

use Illuminate\Support\Carbon;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        Carbon::setLocale('id');
        setlocale(LC_ALL, 'IND');
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
    }
}
