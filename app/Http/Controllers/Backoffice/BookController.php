<?php

namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use App\Http\Requests\BookRequest;
use App\Models\Book;
use App\Models\BookTag;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Inertia\Inertia;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $search = \request()->input('keyword');
        $tagId = \request()->input('tag');
        return Inertia::render('Backoffice/Book/List',[
            "tags"=>Tag::query()->orderBy('name')->get(),
            'authors'=>Book::query()->select('author')->distinct()->get('author')->pluck('author'),
            'books'=>Book::bookSearch($search, $tagId)->paginate(8)
        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Backoffice/Book/Form',[
            "tags"=>Tag::query()->orderBy('name')->get(),
        ]);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(BookRequest $request)
    {
        $modelData = $request->except(['tag', 'thumbnail']);
        $model= new Book();
        $model->fill(array_merge($modelData, [
            'gramedia_thumb'=>''
        ]));
        $model->save();
        $tag = $this->attachTag($request);
        BookTag::create([
            'book_id'=>$model->id,
            'tag_id'=>$tag->id
        ]);
        $this->attachMedia($model, $request);
        session()->flash('snackbar', [
            "message"=>'Data berhasil di simpan',
            'variant'=>'success'
        ]);
        return redirect()->to(route('backoffice.book.index'));
    }
    private function attachMedia(Book $model,BookRequest $bookRequest){
        if ($bookRequest->hasFile('thumbnail')){
            $model->addMediaFromRequest('thumbnail')->preservingOriginal()->toMediaCollection('thumbnail');
            $model->gramedia_thumb = $model->getFirstMediaUrl('thumbnail');
            $model->save();
        }
    }

    private function attachTag(BookRequest $request){
        $tag = Tag::query()->where(['name'=>$request->input('tag')])->first();
        if (! $tag){
            $tag = Tag::create([
                "name"=>$request->input('tag')
            ]);
        }
        return $tag;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        $book->issueInp = Carbon::parse($book->issue)->format("Y-m-d");
        return Inertia::render('Backoffice/Book/Form',[
            "tags"=>Tag::query()->orderBy('name')->get(),
            'book'=>$book
        ]);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(BookRequest $request, Book $book)
    {
        $modelData = $request->except(['tag', 'thumbnail']);
        $book->fill($modelData);
        $book->save();
        $this->attachTag($request);
        $this->attachMedia($book,$request);
        session()->flash('snackbar', [
            "message"=>'Perubahan data berhasil',
            'variant'=>'success'
        ]);
        return redirect()->to(route('backoffice.book.index'));
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        session()->flash('snackbar', [
            "message"=>'Data berhasil dihapus',
            'variant'=>'success'
        ]);
        $book->delete();
        return redirect()->to(route('backoffice.book.index'));
    }
}
