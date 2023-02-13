<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\API\V1\AuthorController;
use App\Http\Controllers\API\V1\BlogController;
use App\Http\Controllers\Api\V1\ExperienceController;
use App\Http\Controllers\API\V1\JobController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::apiResource('/users', UserController::class);
    Route::apiResource('/authors', AuthorController::class);
    Route::apiResource('/blogs', BlogController::class);
    Route::apiResource('/jobs', JobController::class);
    // Route::apiResource('/experiences', ExperienceController::class);
});

Route::post('/login', [AuthController::class, 'login']);

// PUBLIC ROUTES
Route::get('/public/experiences', [ExperienceController::class, 'index']);
Route::get('/public/experiences/{id}', [ExperienceController::class, 'show']);
Route::get('/public/blogs', [BlogController::class, 'index']);
Route::get('/public/blogs/{id}', [BlogController::class, 'show']);
Route::get('/public/jobs', [JobController::class, 'index']);
Route::get('/public/jobs/{id}', [JobController::class, 'show']);
Route::post('/public/jobs/apply/', [JobController::class, 'apply']);
