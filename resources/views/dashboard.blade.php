<x-common-layout>
  <div class="p-4">
    <h1>Pesanan anda</h1>
    <hr>
    <div>
      @foreach($orders as $order)
        @component("components.order-view", $order->toArray())
        @endcomponent
      @endforeach
    </div>
  </div>
</x-common-layout>
