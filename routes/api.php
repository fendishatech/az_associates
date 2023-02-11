<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\API\V1\AuthorController;
use App\Http\Controllers\API\V1\BlogController;
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
