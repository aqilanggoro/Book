<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>{{ config('app.name', 'Laravel') }}</title>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.bunny.net">
  <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    rel="stylesheet"
  />
  <!-- Google Fonts -->
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="{{url("/mdb/css/mdb.min.css")}}">
  @vite(['resources/css/app.scss'])
</head>
<body class="font-sans antialiased">
<div class="bg-light">
  <main>
    <div class="d-flex vw-100" style="overflow: hidden">
      <div style="width: 20%;height: 100vh; overflow-y: hidden" class="pt-1 d-flex flex-column">
        <div class="bg-white shadow-1-strong mx-2">
          <div class="card-body p-2">
            <ul class="navbar-nav">
              <li class="nav-item mb-2 @if(request()->routeIs("home")) bg-gray-100 @endif px-2 rounded-5 hover:bg-gray-100">
                <a class="nav-link active" aria-current="home" href="{{route("home")}}">
                  <i class="fa fa-home mr-5"></i>
                  <span>Halaman awal</span>
                </a>
              </li>
              <li class="nav-item px-2 @if(request()->routeIs("search")) bg-gray-100 @endif rounded-5 hover:bg-gray-100">
                <a class="nav-link" aria-current="home" href="{{route("search")}}">
                  <i class="fa fa-search mr-5"></i>
                  <span>Pencarian</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        @if(request()->routeIs("checkout") != "checkout")
          <div class="flex-grow-1 p-2 d-flex flex-column ">
            <div class="flex-grow-1 d-flex flex-column shadow-1-strong bg-white">
              <ul id="sidebar-tab" class="nav nav-justified nav-tabs mb-3" role="tablist">
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    id="cart-tab"
                    data-mdb-toggle="tab"
                    href="#cart-tab-content"
                    role="tab"
                    aria-controls="cart-tab-content"
                    aria-selected="true"
                  >Keranjang</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="collection-tab"
                    data-mdb-toggle="tab"
                    href="#collection-tab-content"
                    role="tab"
                    aria-controls="collection-tab-content"
                    aria-selected="false"
                  >Koleksi buku</a
                  >
                </li>
              </ul>
              <div style="overflow-y: auto" class="tab-content " id="sidebar-tab-content">
                <div
                  class="tab-pane show flex-grow-1 active fade"
                  id="cart-tab-content"
                  role="tabpanel"
                  aria-labelledby="cart-tab"
                  style="overflow-y: hidden"
                >
                  <x-cart-manager></x-cart-manager>
                </div>
                <div class="tab-pane fade" id="collection-tab-content" role="tabpanel" aria-labelledby="collection-tab">
                  @component("components.user-book-collection")@endcomponent
                </div>
              </div>
            </div>
          </div>
        @endif
      </div>
      <div class="flex-1 d-flex flex-column" style="height: 100vh; overflow-y: auto;position: relative">
        <div class="shadow-1-strong bg-white ml-1 mr-3 mt-1 mb-3 mr-2 flex-1">
          <x-user-bar></x-user-bar>
          {{ $slot }}
        </div>
      </div>
    </div>
  </main>
</div>
<script src="{{url("/mdb/js/mdb.min.js")}}"></script>
</body>
</html>
