<?php

namespace Database\Factories;

use App\Http\Requests\BookRequest;
use App\Models\Book;
use App\Models\BookTag;
use App\Models\Tag;
use Faker\Generator;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BookTag>
 */
class BookTagFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
        ];
    }

    public static function run(){
        $tags = Tag::all();

        $faker = \Faker\Factory::create();
        $books = Book::all();
        foreach ($books as $book){
            $n = $faker->numberBetween(1,3);
            $selectedTags = $tags->shuffle()->take($n);
            foreach ($selectedTags as $tag){
                BookTag::create([
                    'book_id'=>$book->id,
                    'tag_id'=>$tag->id
                ]);
            }
        }
    }
}
