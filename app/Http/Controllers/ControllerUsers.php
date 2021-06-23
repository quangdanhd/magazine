<?php

namespace App\Http\Controllers;

use App\Models\access_times;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Cache;

class ControllerUsers extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __construct()
    {
        $uniqueID = session_uniqueID();
        $cache_key = 'access_times_' . $uniqueID;
        $access_times = Cache::get($cache_key);
        if ($access_times != date('Y-m-d')) {
            access_times::create([
                'unknown_token' => $uniqueID,
            ]);
            $seconds = 24 * 60 * 60;
            Cache::add($cache_key, date('Y-m-d'), $seconds);
        }
    }
}
