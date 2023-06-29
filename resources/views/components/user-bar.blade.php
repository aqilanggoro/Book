@auth()
  <div class="p-2 w-100">
    <div class="d-flex">
      @if(!request()->routeIs("home"))
        <a onclick="history.back()" class="btn hover-shadow">
          <i class="fa fa-arrow-left"></i>
          <span class="ml-2">Kembali</span>
        </a>
      @endif
      <div class="ml-auto">
        <div class="btn-group shadow-1">
          <a href="{{route("dashboard")}}" class="btn mr-2">
            <i class="fa fa-user"></i>
            <span class="ml-2">
          {{auth()->user()->name}}
          </span>
          </a>
          <form method="post" action="{{route('logout')}}">
            <button class="btn">
              <i class="fa-solid fa-right-from-bracket"></i>
              <span class="ml-2">
          Keluar
          </span>
            </button>
            @csrf
          </form>
        </div>
      </div>
    </div>
  </div>
@endauth
@guest()
  <div class="p-4 pb-0 w-100">
    <a href="{{route("login")}}" class="btn btn-primary">
      <i class="fa fa-user"></i>
      <span class="ml-2">
      Login
      </span>
    </a>
  </div>
@endguest
