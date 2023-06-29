<?php

namespace App\Console\Commands;

use App\Models\Book;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\User;
use Faker\Factory;
use Faker\Generator;
use Illuminate\Console\Command;
use Illuminate\Database\Eloquent\Collection;

class OrderDataSeed extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:order-data-seed';

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
        $books = Book::all();
        $users = User::query()->count() > 100 ? User::query()->whereRole('user')->get() : User::factory()->count(100)->create();
        $faker = Factory::create();
        foreach ($users as $user){
            $this->generate($user, $faker, $books);
        }
    }
    private function generate(User $user,Generator $generator, Collection $items){
        $books = collect($generator->randomElements($items, 2));
        $total = $books->sum('price');
        $modelData = [
            "user_id"=>$user->id,
            'name'=>$user->name,
            'phone'=>$generator->phoneNumber,
            'postal_code'=>$generator->postcode,
            'address'=>$generator->address,
            'city'=>$generator->city,
            'total'=>$total,
            'status'=>false,
        ];
        $items = $books->map(function ($book){
           return new OrderItem([
               "book_id"=>$book->id,
               'amount'=>1,
               'sub_total'=>$book->price
           ]);
        });
        /**
         * @var Order $order
         */
        $order = Order::create($modelData);
        $order->items()->saveMany($items);
    }
}
