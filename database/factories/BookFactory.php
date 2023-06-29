<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "price"=>$this->faker->numberBetween(50,100) * 10000,
            'author'=>$this->faker->name,
            'title'=>$this->faker->text(50),
            'publisher'=>$this->faker->company,
            'issue'=>$this->faker->dateTimeBetween('-5 year'),
            'pages'=>$this->faker->numberBetween(100,200),
            'isbn'=>$this->faker->isbn10(),
            'description'=>$this->faker->realTextBetween(3000, 4000)
        ];
    }
}
