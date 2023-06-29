<?php

namespace App\View\Components;

use App\Http\Controllers\CartController;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class CartManager extends Component
{
  private CartController $cartController;
  public array $books;
  /**
   * Create a new component instance.
   */
  public function __construct()
  {
    $this->books = (new CartController())->stack()->toArray();
  }

  /**
   * Get the view / contents that represent the component.
   */
  public function render(): View|Closure|string
  {
    return view('components.cart-manager');
  }
}
