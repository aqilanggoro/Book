<div class="row mb-2">
  <div class="col-md-2">
    <img class="w-100" src="{{$book['gramedia_thumb']}}" alt="">
  </div>
  <div class="col">
    <h3>
      {{$book['title']}}
    </h3>
    <p>
      @ Rp {{number_format($book['price'])}}
    </p>
    <div class="bg-primary bg-opacity-10 d-flex align-items-center p-3">
      <div class="flex-grow-1">
        <p class="m-0">
          Rp {{number_format($book['price'] * ($book['amount'] ?? 1))}}
        </p>
      </div>
      <div class="d-flex cart-button">
        <form action="{{route("cart.increase", ['book'=>$book['id']])}}" method="post">
          @csrf
          <button type="submit" class="btn btn-icon btn-primary">
            <i class="fa fa-add"></i>
          </button>
        </form>
        <p class="">
          {{$book['amount'] ?? 1}}
        </p>
        <form action="{{route("cart.decrease", ['book'=>$book['id']])}}" method="post">
          @csrf
          <button type="submit" class="btn btn-icon btn-primary">
            <i class="fa fa-minus"></i>
          </button>
        </form>
        <form action="{{route("cart.remove", ['book'=>$book['id']])}}" method="post">
          @csrf
          <button type="submit" class="btn btn-icon btn-danger">
            <i class="fa fa-trash"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
