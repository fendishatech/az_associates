<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class JobResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'level' => $this->level,
            'postedAt' => $this->posted_at,
            'deadline' => $this->deadline,
            'eduLevel' => $this->edu_level,
            'experienceYr' => $this->experience_yr,
            'description' => $this->description,
        ];
    }
}
