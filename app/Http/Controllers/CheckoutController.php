<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Book;
use App\Models\Order;
use App\Models\OrderItem;
use App\View\Components\CheckoutView;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CheckoutController extends Controller
{
  public function index(){
    $c = new CheckoutView();
    return $c->render();
//        return Inertia::render('Checkout/index', []);
  }

  public function store(OrderRequest $request){
    $data = $request->validated();
    $items = $request->input('items');
    $orderData = $request->except('items');
    $orderList = collect($items)->map(function ($d){
      $book = Book::find($d['id']);
      $subTotal = $book->price * $d['amount'];
      return [
        'book'=>$book,
        'model'=>new OrderItem([
          'book_id'=>$book->id,
          'sub_total'=>$subTotal,
          'amount'=>$d['amount']
        ]),
        'sub_total'=>$subTotal
      ];
    });
    $total = $orderList->sum('sub_total');
    /**
     * @var Order $order
     */
    $order = Order::create(
      array_merge($orderData, [
        'user_id'=>auth()->id(),
        'total'=>$total,
        'status'=>0
      ])
    );
    $order->items()->saveMany($orderList->map(function ($d){
      return $d['model'];
    })->values());
    session()->flash("snackbar", [
      "variant"=>'success',
      'message'=>'Pesanan anda berhasil disimpan'
    ]);
    CartController::clear();
    return Redirect::to(route('home'));
  }
}
