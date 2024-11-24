<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Pizza extends Model
{
    protected $fillable = [
        'size',
        'crust',
        'toppings',
        'status'
    ];

    protected $appends = [
        'chef'
    ];

    protected $casts = [
        'toppings' => 'array'
    ];

    protected $hidden = [
        'user'
    ];

    /**
     * Get the user that created the pizza.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the chef's name
     */
    public function getChefAttribute(): string
    {
        return $this->user ? $this->user->name : 'Unassigned';
    }
}
