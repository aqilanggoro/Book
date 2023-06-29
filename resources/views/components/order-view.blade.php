<div class="p-3">
  <div class="d-flex w-100">
    <div>
      <h4 class="m-0">
        Nomor pesanan : <span class="text-uppercase">{{$invoice_number}}</span>
      </h4>
      <p class="m-0">
        Tanggal pesan : {{$created_at}}
      </p>
    </div>
    <div class="ml-auto">
      <a
        data-mdb-toggle="collapse"
        href="#order-list-{{$id}}"
        role="button"
        aria-expanded="false"
        aria-controls="order-list-{{$id}}"
        class="btn text-capitalize btn-primary bg-opacity-25 btn-sm">
        Tampilkan pesanan
      </a>
    </div>
  </div>
  <div class="collapse" id="order-list-{{$id}}">
    <div class="row">
      @foreach($items as $item)
        <div class="col-md-6 mb-2">
          <div class="p-2 mb-2 bg-primary bg-opacity-10">
            <div class="d-flex w-100">
              <div style="width: 50px">
                <img class="w-100" src="{{$item['img']}}" alt="">
              </div>
              <div class="px-2">
                <p class="m-0">
                  {{$item['title']}}
                </p>
                <p class="m-0" style="font-size: 12px">
                  {{$item['author']}}
                </p>
              </div>
            </div>
            <div class="d-flex py-2 w-100 justify-content-between">
              <p class="m-0">
                Qty : {{$item['amount']}}
              </p>
              <p class="m-0">
                Subtotal : Rp {{number_format($item['sub_total'])}}
              </p>
            </div>
          </div>
        </div>
      @endforeach
    </div>
    <p>
      Total :
    </p>
  </div>
  <p class="m-0">
    Detail pengiriman
  </p>
  @php
    $rows = [
        "Nama penerima"=>$name,
        "Nomor telepon"=>$phone,
        "Kota & Kode pos"=>$city . " " . $postal_code
  ];
  @endphp
  <div class="p-3 bg-primary bg-opacity-10">
    @foreach($rows as $label => $row)
      <div class="d-flex justify-content-between">
        <p class="m-0">
          {{$label}}
        </p>
        <p class="m-0">
          {{$row}}
        </p>
      </div>
    @endforeach
    <p class="m-0">
      Alamat lengkap
    </p>
    <p class="m-0">
      {{$address}}
    </p>
    <div class="d-flex justify-content-between">
      <p class="m-0">
        Total
      </p>
      <h3 class="m-0">
        Rp {{number_format($total)}}
      </h3>
    </div>
  </div>
</div>
