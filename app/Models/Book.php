<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Book extends Model implements HasMedia
{
  use HasFactory, InteractsWithMedia;
  protected $guarded = ['id'];
  protected $appends = ['tags'];
  protected $casts = [
    'issue'=>'date:d M Y'
  ];
  public function registerMediaCollections(): void
  {
    $this->addMediaCollection('thumbnail')->singleFile();
  }

  public function getTagsAttribute(){
    $relation = BookTag::query()->where('book_id', $this->id)->get()->pluck('tag_id');
    return Tag::query()->whereIn('id', $relation->toArray())->get()->pluck('name');
  }

  public static function bookSearch($search = "", $tagId = null){
    $query = self::query()->orderBy('books.created_at','desc');
    if ($tagId = \request()->input('tag')){
      $query = $query->whereRaw("books.id in (select book_tags.book_id from book_tags where book_tags.tag_id = $tagId)");
    }
    if ($search){
      $query = $query->whereRaw("concat_ws('.',books.title, books.author, books.publisher) like '%$search%'");
    }
    return $query;
//    if (! $search || ! $tagId) return $query;
//    return $query->where('books.id', -1);
  }

}
