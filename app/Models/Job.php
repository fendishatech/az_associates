<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'level',
        'posted_at',
        'deadline',
        'edu_level',
        'experience_yr',
        'description'
    ];

    public function candidate()
    {
        return $this->hasMany(Candidate::class);
    }
}
