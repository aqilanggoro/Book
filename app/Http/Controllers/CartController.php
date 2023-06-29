<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class CartController extends Controller
{

  public function stack(){
    $session = session()->get("user-cart", []);
    return collect($session);
  }
  private function commit($stack){
    session()->put('user-cart', $stack->toArray());
  }

  private function commitAmmount(Book $book, bool $increase = true){
    return $this->stack()->map(function ($d) use ($book, $increase){
      if ($d['id'] != $book->id) return $d;
      $amount = $d['amount'] ?? 1;
      if (! $increase && $amount == 1) return $d;
      $d['amount'] =$increase ? ($amount + 1) : ($amount - 1) ;
      return $d;
    });
  }

  public function increase(Book $book){
    $check = $this->stack()->first(fn($c)=>$c['id'] == $book->id);
    if ($check){
      $this->commit($this->commitAmmount($book));
    }
    return redirect()->back();
  }
  public function decrease(Book $book){
    $check = $this->stack()->first(fn($c)=>$c['id'] == $book->id);
    if ($check){
      $this->commit($this->commitAmmount($book, false));
    }
    return redirect()->back();
  }
  public function remove(Book $book){
    $check = $this->stack()->first(fn($c)=>$c['id'] == $book->id);
    if ($check){
      $this->commit($this->stack()->filter(fn($item)=>$item['id'] != $book->id));
    }
    return redirect()->back();
  }

  public static function clear(){
    session()->put('user-cart', []);
  }
  public function store(Book $book){
    $check = $this->stack()->first(fn($c)=>$c['id'] == $book->id);
    $stack = $this->stack();
    $stack->when($check == null, fn()=>$this->commit(
      $stack->add($book)
    ));
    return redirect()->back();
  }

  public function delete(Book $book){
    $this->commit(
      $this->stack()->filter(fn($i)=>$i->id != $book->id)
    );
    return redirect()->back();
  }
}
