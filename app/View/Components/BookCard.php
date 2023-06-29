<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class BookCard extends Component
{
  public $img;
  public $author;
  public $title;
  public $url;
  /**
   * Create a new component instance.
   */
  public function __construct(public $book)
  {
    $this->img = $this->book->gramedia_thumb;
    $this->author = $this->book->author;
    $this->title = $this->book->title;
    $this->url = route("book.show", ['book'=>$this->book->id]);
  }

  /**
   * Get the view / contents that represent the component.
   */
  public function render(): View|Closure|string
  {
    return view('components.book-card');
  }

}
