<?php

namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index(){
        return Inertia::render('Backoffice/Order/List',[
            "orders"=>Order::query()->paginate()
        ]);
    }
    public function update(Order $order){
        $order->status = true;
        $order->save();
        session()->flash('snackbar',[
            "message"=>'Data pembayaran berhasil diubah',
            'variant'=>'info'
        ]);
        return redirect()->back();
    }
}
