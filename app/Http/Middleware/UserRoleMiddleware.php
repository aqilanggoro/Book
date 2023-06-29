<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class UserRoleMiddleware extends RoleBasedMiddleware
{
    function appliedTo(): string
    {
        return "user";
    }
}
