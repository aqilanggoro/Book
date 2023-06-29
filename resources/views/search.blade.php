<x-common-layout>
  <div class="d-flex">
    <div class="w-25">
      <nav class="nav d-block shadow-none">
        @foreach($tags as $tag)
          <div class="nav-item hover:bg-gray-100 @if(request()->input("tag") == $tag->id) bg-gray-100 @endif">
            <a href="{{route("search", ['tag'=>$tag->id, 'keyword'=>request()->input("keyword")])}}" class="nav-link">
              {{$tag->name}}
            </a>
          </div>
        @endforeach
      </nav>
    </div>
    <div class="flex-1">
      <div class="mx-3">
        <form action="{{route("search")}}">
          <div class="form-outline mb-2">
            <input type="text" value="{{request()->input("keyword","")}}" name="keyword" class="form-control form-control-lg" />
            <label class="form-label" for="form12">
              <i class="fas fa-search"></i>
              <span>Pencarian</span>
            </label>
            @if(request()->input("tag"))
              <input type="hidden" value="{{request()->input("tag")}}" name="tag">
            @endif
          </div>
        </form>
        @if(! $books->count())
          <p>
            Kata kunci "{{request()->input("keyword")}}" tidak ditemukan
          </p>
        @endif
        <div class="row">
          @foreach($books as $book)
            <div class="col-md-3 mb-4 d-flex">
              <x-book-card :book=$book></x-book-card>
            </div>
          @endforeach
        </div>
      </div>
      <div class="my-2 mr-2">
        {{$books->appends(request()->input())->links()}}
      </div>
    </div>
  </div>
</x-common-layout>
