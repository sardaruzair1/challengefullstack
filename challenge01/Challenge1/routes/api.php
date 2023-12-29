<?php

use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\EmployeeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::options('{any}', function () {
    return response('', 200)
        ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
})->where('any', '.*');


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/employee/store', [EmployeeController::class, 'store'])->name('employee.store');
Route::get('/attendance/mark', [AttendanceController::class, 'markAttendance'])->name('attendance.mark');
Route::post('/attendance/mark', [AttendanceController::class, 'storeAttendance'])->name('attendance.store');
Route::get('/', [AttendanceController::class, 'index'])->name('attendance.index');