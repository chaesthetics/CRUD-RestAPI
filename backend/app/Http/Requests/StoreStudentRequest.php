<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreStudentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            // 'fullname' => ['required', 'min:3', 'max:30', Rule::unique('students')->ignore($this->student)], 
            'firstname' => ['required', 'min:3', 'max:30'],
            'lastname' => ['required', 'min:3', 'max:30'],
            'course' => ['required'],
            'area' => ['required'],
            'city' => ['required'],
            'zip' => ['required'],
        ];
    }
}
