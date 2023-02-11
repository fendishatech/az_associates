<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            "first_name" => "kidus",
            "last_name" => "taye",
            "email" => "kidus@gmail.com",
            "password" => Hash::make("123456"),
            "phone_no" => "0913974307",
            "user_role" => "admin",
            "avatar" => "images/users/kidus.jpg",
        ]);
    }
}
