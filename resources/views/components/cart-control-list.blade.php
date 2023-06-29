<h3>
  Keranjang belanja
</h3>
<hr>
@foreach($books as $book)
  @component("components.cart-control-item", [
    "book"=>$book
])@endcomponent
@endforeach
