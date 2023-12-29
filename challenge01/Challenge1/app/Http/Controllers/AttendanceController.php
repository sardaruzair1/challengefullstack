<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Models\Employee;
use Illuminate\Http\Request;

class AttendanceController extends Controller
{
    public function markAttendance()
    {
        $employees = Employee::all();
        return $employees;
    }

    public function storeAttendance(Request $request)
    {
        $request->validate([
            'employee_id' => 'required|exists:employees,id',
        ]);

        Attendance::create([
            'employee_id' => $request->input('employee_id'),
            'checkin' => now(),
        ]);

        return $request->input();
    }
    public function index()
    {
        $attendances = Attendance::with('employee')->get();
        return $attendances;
    }

    public function uploadExcel(Request $request)
    {
        // Implement logic to handle the upload of Excel attendance data
    }

    public function getEmployeeAttendance($employeeId)
    {
        $employee = Employee::findOrFail($employeeId);
        $attendances = $employee->attendances;

        return view('attendance.employee', compact('employee', 'attendances'));
    }
}
