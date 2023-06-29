<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

abstract class RoleBasedMiddleware
{

    abstract function appliedTo(): string;

    public function handle(Request $request, Closure $next): Response
    {

        $user = $request->user();
        if ($user->role != $this->appliedTo()){
            session()->flash('snackbar',[
                "variant"=>'error',
                'message'=>'Anda tidak memiliki akses'
            ]);
            return redirect()->to('/');
        }

        return $next($request);
    }
}
