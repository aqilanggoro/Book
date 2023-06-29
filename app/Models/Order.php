<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $with = ['items'];
    protected $appends = ['invoice_number'];

    protected $casts = [
        'created_at'=>'date:M, D Y'
    ];

    public function getInvoiceNumberAttribute(){
        return 'inv-'. $this->id. Carbon::parse($this->created_at)->format('ymd');
    }

    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }
}
