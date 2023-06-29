<x-common-layout>
  @php $book = $product @endphp
  <div class="py-4 px-3">
    <div class="row">
      <div class="col-md-2">
        <div class="mui-card">
          <img class="" style="width: 100%" src="{{$product->gramedia_thumb}}" alt="">
        </div>
      </div>
      <div class="col">
        <div class="d-flex align-items-center justify-content-between w-3/4">
          <p class="m-0 font-bold">
            {{$book->author}}
          </p>
          <button style="border-radius: 50%;height: 75px;width: 75px" class="btn btn-light btn-rounded shadow-none">
            <i class="fa-solid fa-3x fa-square-share-nodes"></i>
          </button>
        </div>
        <h1 class="display-4 p-0" style="font-weight: 100">
          {{$book->title}}
        </h1>
        <p class="font-bold">
          Detail buku
        </p>
        <hr>
        <div class="row text-black-50">
          @php
            $details = [
                "jumlah halaman"=> $book->pages. " Halaman",
                "penerbit"=> $book->publisher,
                "Tanggal terbit"=> $book->issue,
                "ISBN"=> $book->isbn,
];
          @endphp
          @foreach($details as $title=>$value)
            <div class="col-md-6">
              <p class="m-0 font-semibold">
                {{$title}}
              </p>
              <p class="text-black-50">
                {{$value}}
              </p>
            </div>
          @endforeach
        </div>
        <div class="text-center w-3/4">
          <form method="post" action={{route("cart", ['book'=>$book->id])}}>
            @csrf
            <button type="submit" class="btn align-items-center d-inline-flex btn-secondary">
              <i class="fa mr-2 fa-2x fa-shopping-cart"></i>
              <span>
            Tambahkan ke keranjang
            </span>
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="bg-blue-200 rounded-8 my-3 bg-opacity-10 p-6">
      <p style="font-size: 14px!important;" class="text-justify truncate-description" id="description-container">
        {{$book->description}}
      </p>
      <div>
        <button onclick="toggleDescription()" class="btn text-capitalize btn-sm btn-primary">
          Baca selengkapnya
        </button>
      </div>
    </div>
    <p class="font-bold">
      Detail buku
    </p>
    <div class="row">
      @foreach($recomendations as $book)
        <div class="g-md-3 col-lg-2 col-md-3 d-flex">
          <x-book-card :book=$book></x-book-card>
        </div>
      @endforeach
    </div>
  </div>

  <script>
    function toggleDescription(){
      document.getElementById("description-container").classList.toggle("truncate-description")
    }
  </script>
</x-common-layout>
