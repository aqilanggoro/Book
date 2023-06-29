<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function getRandomBooksAttribute(){
        $q = BookTag::query()->where([
            "tag_id"=>$this->id
        ])
            ->inRandomOrder()
            ->take(5)
            ->get()
            ->pluck("book_id");
        return Book::query()->whereIn('id', $q)->get();
    }

}
