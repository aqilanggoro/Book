<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        return Inertia::render('Orders/index');
    }
    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
    }
    public function store(Order $order){
        $order->status = 1;
        $order->save();
        session()->flash('snackbar', [
            "variant"=>'success',
            'message'=>'Pembarayan pesanan berhasil'
        ]);
        return redirect()->back();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}
