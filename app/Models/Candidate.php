<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candidate extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'cv_file',
        'edu_level',
        'experience_yr',
        'job_id'
    ];

    public function job()
    {
        return $this->belongsTo(Job::class);
    }
}
