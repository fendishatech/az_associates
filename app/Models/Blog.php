<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'image',
        'content',
        'published_at',
        'author_id'
    ];

    public function author()
    {
        return $this->belongsTo(Blog::class);
    }
}
