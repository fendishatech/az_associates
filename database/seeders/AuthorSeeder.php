<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('authors')->insert([
            "first_name" => "Kidus",
            "last_name" => "Taye",
            "title" => "Dr.",
            "position" => "Technical Expert",
        ]);

        DB::table('authors')->insert([
            "first_name" => "Joseph",
            "last_name" => "Daniel",
            "title" => "Dr.",
            "position" => "Technical Expert",
        ]);
    }
}
