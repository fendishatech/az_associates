<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog>
 */
class BlogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $this->faker->title(),
            'image' => "/images/blogs/blog_default.jpg",
            'content' => $this->faker->text(),
            'published_at' => $this->faker->dateTime(),
            'author_id' => 1
        ];
    }
}
