<?php

namespace App\Console\Commands;

use App\Models\Book;
use App\Models\BookTag;
use App\Models\Tag;
use App\Models\User;
use Database\Factories\BookTagFactory;
use Database\Factories\TagFactory;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class DataSeeder extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:data-seeder';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        Artisan::call('migrate:fresh');
        User::factory()->create([
            "email"=>'admin@app.com'
        ]);
        $this->feedTag();
    }
    private function feedTag(){
        Http::get('https://www.gramedia.com');
        $r = Http::get("https://www.gramedia.com/api/algolia/categories/tree/?tree=CT5641209026258962106");
        $master = $r->json()[0];
        $this->saveTag($master);
    }
    private function feedBook(Tag $tag, $slug){
        $r = Http::get("https://www.gramedia.com/api/algolia/search/product/",[
            "per_page"=>100,
            'category'=>$slug,
            'page'=>1,
            'type'=>'book'
        ]);
        $books = [];
        $booksraw = collect($r->json())->filter(function ($i){
            return isset($i['type']) && $i['type'] == 'book';
        });
        foreach ($booksraw as $book){
            $books[]= $this->saveBook($book, $tag);
        }
        return $books;
    }
    private function saveBook($raw, Tag $tag){
        $author = isset($raw['authors'][0]) ?$raw['authors'][0]['title'] : "";
        $thumb = $raw['thumbnail'] ?? "";
        $p = [
            'title'=>$raw['name'],
            'gramedia_thumb'=>$thumb
        ];
        if ($author){
            $p['author'] = $author;
        }
        /**
         * @var Book $b;
         */
        $b = Book::factory()->create($p);
        BookTag::create([
            "book_id"=>$b->id,
            'tag_id'=>$tag->id
        ]);
        return $b;
    }
    private function saveTag($master){
        foreach ($master['subCategory'] as $tag){
            $c = Tag::query()->where('name', $tag['title'])->count();
            if (! $c){
                $m = Tag::create([
                    'name'=>$tag['title']
                ]);
                $this->feedBook($m, $tag['slug']);
                if (count($tag['subCategory'])){
                    $this->saveTag($tag);
                }
            }
        }
    }
}
