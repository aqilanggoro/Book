<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(): bool
  {
    return auth()->check();
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
   */
  public function rules(): array
  {
    return [
      'items'=>'required|array|min:1',
      'items.*.amount'=>'required|numeric|min:1',
      'items.*.id'=>'required|exists:books,id',
      'name'=>'required|string',
      'address'=>'required|string',
      'city'=>'required|string',
      'phone'=>'required|string',
      'postal_code'=>'required|string'
    ];
  }
}
