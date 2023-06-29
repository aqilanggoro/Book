<?php

namespace App\View\Components;

use App\Http\Controllers\CartController;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class CheckoutView extends Component
{
  public \Illuminate\Support\Collection $books;
  public float $subTotal;
  public int $productAmount;

  /**
   * Create a new component instance.
   */
  public function __construct()
  {
    $c = new CartController();
    $this->books = $c->stack();
    $this->subTotal = $c->stack()->reduce(function ($a, $b){
      return $a + (($b['amount'] ?? 1) * $b['price']);
    }, 0);
    $this->productAmount = $c->stack()->sum(function ($d){
      return $d['amount'] ?? 1;
    });
  }

  public function render(): View|Closure|string
  {
    return view('checkout', [
      "books"=>$this->books,
      "productTotal"=>$this->productAmount,
      "subTotal"=>$this->subTotal
    ]);
  }
}
