<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class BookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            "title"=>'required|string',
            "description"=>'required|string',
            "isbn"=>'required|string',
            "author"=>'required|string',
            "publisher"=>'required|string',
            "issue"=>'required|date',
            "pages"=>'required|numeric|min:1',
            'tag'=>'required',
            'price'=>'required|numeric',
            'thumbnail'=>['image', Rule::requiredIf(function (){
                return request()->route()->getName() != "backoffice.book.update";
            })],
        ];
    }
}
