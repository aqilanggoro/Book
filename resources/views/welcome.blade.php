<x-common-layout>
  <div class="bg-white p-4" style="top: 0;left: 0;position: sticky;z-index: 2">
    <form action="{{route("search")}}">
      <div class="form-outline">
        <input name="keyword" type="text" id="form12" class="form-control form-control-lg" />
        <label class="form-label" for="form12">
          <i class="fas fa-search"></i>
          <span>
        Pencarian
        </span>
        </label>
      </div>
    </form>
  </div>
  <div class="p-4">
    <div class="d-flex mt-4 flex-wrap my-2 justify-between">
      @foreach($tags as $tag)
        <a href="{{route("search", ['tag'=>$tag->id])}}" class="p-3 py-2 bg-blue-50 hover:bg-blue-200 mb-2" role="button" style="width: calc(25% - 10px)">
          <span class="m-0 font-semibold">
            {{$tag->name}}
          </span>
        </a>
      @endforeach
    </div>
    @foreach($tags as $tag)
      <h3 class="h4">
        {{$tag->name}}
      </h3>
      <hr>
    <div class="row mb-3">
        @foreach($tag->random_books as $book)
        <div class="col-lg-2 col-md-3 d-flex">
          <x-book-card :book=$book></x-book-card>
        </div>
        @endforeach
    </div>
    @endforeach

  </div>
</x-common-layout>
{{--<div class="py-12">--}}
{{--  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">--}}
{{--    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">--}}
{{--      <div class="p-6 text-gray-900">--}}
{{--        {{ __("You're logged in!") }}--}}
{{--      </div>--}}
{{--    </div>--}}
{{--  </div>--}}
{{--</div>--}}
