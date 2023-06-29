<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('order_items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('amount');
            $table->unsignedDouble('sub_total');
            $table->unsignedBigInteger('book_id');
            $table->unsignedBigInteger('order_id');
            $table->timestamps();
            $table->foreign('book_id')->on('books')->references('id');
            $table->foreign('order_id')->on('orders')->references('id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_items');
    }
};
