<x-common-layout>
  <div class="row">
    <div class="col-md-8">
      <div class="px-2">
        @include("components.cart-control-list", ["books"=>$books])
      </div>
    </div>
    <div class="col position-relative">
      @php
        $fields = [
            ["name", "Nama penerima"],
            ["phone", "Nomor telepon penerima"],
            ["postal_code", "Kode pos"],
            ["city", "Kota"],
            ["address", "Alamat lengkap", true],
  ];
      @endphp
      <div class="p-2 position-sticky" style="top: 8px">
        <form action="{{route("checkout")}}" method="post">
          @csrf
          @foreach($books->values() as $index => $book)
            @php $items = [ "items[$index][id]"=>$book['id'],"items[$index][amount]"=>$book['amount'] ?? 1,];@endphp
            @foreach($items as $name => $item)
              <input type="hidden" name="{{$name}}" value="{{$item}}">
            @endforeach
          @endforeach
          @foreach($fields as $field)
            @php $id = "field-".$field[0] @endphp
          <div class="mb-4">
            <div class="form-outline">
              <input type="text" id="{{$id}}" class="form-control" name="{{$field[0]}}">
              <label class="form-label" for="{{$id}}">{{$field[1]}}</label>
            </div>
            @error($field[0])
            <p>{{$message}}</p>
            @enderror
          </div>
          @endforeach
          <div class="p-2 bg-primary bg-opacity-10 rounded">
            <div class="d-flex justify-between">
              <p class="m-0">
                Jumlah
              </p>
              <p class="m-0">{{$productTotal}} produk</p>
            </div>
            <div class="d-flex justify-between">
              <p class="m-0">
                Sub total
              </p>
              <p class="m-0">
                Rp {{number_format($subTotal)}}
              </p>
            </div>
          </div>
          <div class="text-center mt-3">
            <button class="btn align-items-center d-flex align-items-center justify-content-center w-100 btn-primary">
              <i class="fa fa-2x mr-3 fa-cash-register"></i>
              <span>Bayar</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</x-common-layout>
