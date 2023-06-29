<?php

namespace Database\Factories;

use App\Models\Tag;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tag>
 */
class TagFactory extends Factory
{
    const items = [
        "pendidikan",
        "agama",
        'bisnis & ekonomi',
        'industri',
        'olahraga',
        'kamus',
        'hukum',
        'medis',
        'teknik',
        'sains',
        'novel',
        'komik',
        'romansa',
        'sastra',
        'horor',
        'thriller',
        'novel',
        'puisi',
        'ilmiah',
        'klasik',
        'remaja',
        'musik',
        'seni',
        'biografi',
        'filsafat'
    ];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name'=>$this->faker->unique()->randomElements(self::items)
        ];
    }

    static function run(){
        foreach (self::items as $item){
            Tag::create([
                'name'=>$item
            ]);
        }
    }
}
