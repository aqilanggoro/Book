<div>
  @guest()
    <p class="text-center">
      Anda perlu login
    </p>
  @endguest
  @if(auth()->check() && auth()->user()->role == "user")
    @foreach(auth()->user()->book_collection as $book)
      <div class="d-flex mb-2">
        <div class="img w-10 mr-1" >
          <img src="{{$book['gramedia_thumb']}}" class="w-100" alt="">
        </div>
        <div>
          <p style="font-size: 12px" class="font-light">
            {{$book->author}}
          </p>
          <p>
            {{$book->title}}
          </p>
        </div>
      </div>
    @endforeach
    @else
  @endif
</div>
