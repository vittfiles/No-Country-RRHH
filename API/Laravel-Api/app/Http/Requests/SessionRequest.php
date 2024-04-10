<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Encryption\Encrypter;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Foundation\Http\FormRequest;

class SessionRequest extends FormRequest
{
    protected function prepareForValidation()
    {
        $encrypter = new Encrypter(base64_decode(Env('SECOND_KEY')), 'AES-256-CBC');
        $this->merge([
            'email' => $encrypter->decrypt($this->email),
            'password' => $encrypter->decrypt($this->password)
        ]);
    }

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'email' => 'required|email',
            'password' => [
                'required',
                'string',
                'min:8',
                'regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/'
            ],
        ];
    }
    public function messages()
    {
        return [
            'email.required' => 'El email es obligatorio',
            'email.email' => 'El email ingresado no es un email válido',
            'password.required' => 'El password es obligatorio',
            'password.min' => 'La contraseña debe tener al menos :min caracteres',
            'password.regex' => 'La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un dígito, un carácter especial y tener una longitud mínima de 8 caracteres.',
        ];
    }
}
