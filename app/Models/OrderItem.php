<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $hidden = ['book', 'user'];
    protected $appends = ['title', 'price', 'author', 'publisher', 'img'];

    private function bookAttributeValue($k){
        return $this->book->$k;
    }

    public function book(){
        return $this->belongsTo(Book::class);
    }

    public function getTitleAttribute(){
        return $this->bookAttributeValue('title');
    }

    public function getPriceAttribute(){
        return $this->bookAttributeValue('price');
    }
    public function getAuthorAttribute(){
        return $this->bookAttributeValue('author');
    }
    public function getPublisherAttribute(){
        return $this->bookAttributeValue('publisher');
    }
    public function getImgAttribute(){
        return $this->bookAttributeValue('gramedia_thumb');
    }

}
