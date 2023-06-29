<div>
  @if(! count($books))
    <div class="flex-1 d-flex flex-column justify-content-center align-items-center">
      <p>
        Belum ada produk yang di tambahkan
      </p>
    </div>
  @else
    <div class="bg-white flex-grow-1 px-2" style="height: 300px;overflow-y: auto">
      @foreach($books as $book)
        <div class="d-flex my-2 hover:bg-gray-100">
          <div class="col-md-2">
            <img class="w-100" src="{{$book['gramedia_thumb']}}" alt="">
          </div>
          <div class="col p-2">
            <p style="font-size: 12px"  class="m-0"> {{$book['title']}}</p>
            <p class="m-0">Rp{{number_format($book['price'])}}</p>
          </div>
        </div>
      @endforeach
    </div>
    <div class="p-2 text-center">
      <a href="{{route( auth()->check() ? "checkout" : "login")}}" class="btn btn-primary">
        Pembayaran
      </a>
    </div>
  @endif

</div>
