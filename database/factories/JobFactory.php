<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Job>
 */
class JobFactory extends Factory
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
            'level' => "4",
            'posted_at' => $this->faker->dateTime(),
            'deadline' => $this->faker->dateTime(),
            'edu_level' => "BSc/MSc",
            'experience_yr' => 3,
            'description' => $this->faker->text()
        ];
    }
}
