<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pizza>
 */
class PizzaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $toppingChoices = ['Pepperoni', 'Mushroom', 'Black Olive', 'Green Pepper', 'Onion', 'Sausage', 'Extra Cheese'];
        return [
            'id' => rand(11111, 99999),
            'user_id' => rand(1, 10),
            'size' => Arr::random(['Small', 'Medium', 'Large', 'Extra Large']),
            'crust' => Arr::random(['Thin', 'Thick', 'Garlic']),
            'toppings' => json_encode(Arr::random($toppingChoices, 4)),
            'status' => Arr::random(['Ordered', 'Prepping' , 'Baking', 'Checking' ,'Ready']),
        ];
    }
}
