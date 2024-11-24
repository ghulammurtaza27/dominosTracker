<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pizza;
use Inertia\Inertia;
use Inertia\Response;

class PizzaController extends Controller
{
    public function index(): Response
    {
        $pizzas = Pizza::all();
        return Inertia::render('Pizzas/All', [
            'pizzas' => $pizzas,
        ]);
    }

    public function edit(Pizza $pizza): Response
    {
        return Inertia::render('Pizzas/Edit', [
            'pizza' => $pizza
        ]);
    }

    public function update(Request $request, Pizza $pizza)
    {
        $validated = $request->validate([
            'size' => 'required',
            'crust' => 'required',
            'toppings' => 'required',
            'status' => 'required',
        ]);

        $pizza->update($validated);

       
    }
}
