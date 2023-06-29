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
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->unsignedDouble('price');
            $table->unsignedBigInteger('pages');
            $table->string('title');
            $table->string('isbn');
            $table->text('description');
            $table->string('author');
            $table->string('publisher');
            $table->string('gramedia_thumb')->nullable();
            $table->timestamp('issue');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
