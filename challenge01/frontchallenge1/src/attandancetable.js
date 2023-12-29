    // src/components/AttendanceTable.js

    import React, { useState, useEffect } from 'react';

    const AttendanceTable = () => {
    const [attendances, setAttendances] = useState([]);

    useEffect(() => {
        // Fetch attendance data from the backend
        fetch('http://localhost:8000/api/')  // Update the API endpoint accordingly
        .then(response => response.json())
        .then(data => setAttendances(data))
        .catch(error => console.error('Error fetching attendance data:', error));
    }, []);

    return (
        <div className="container mt-5">
        <h1 className="mb-4 text-center">Attendance Information</h1>

        <table className="table table-bordered table-striped">
            <thead className="table-dark">
            <tr>
                <th className="text-center">Name</th>
                <th className="text-center">Checkin</th>
                <th className="text-center">Checkout</th>
                <th className="text-center">Action</th>
            </tr>
            </thead>
            <tbody>
            {attendances.map(attendance => (
                <tr key={attendance.id}>
                <td className="text-center">{attendance.employee.name}</td>
                <td className="text-center">{attendance.checkin}</td>
                <td className="text-center">{attendance.checkout || 'N/A'}</td>
                <td className="text-center">
                    <a href={`/${attendance.employee.id}`} className="btn btn-primary">Mark Attendance</a>
                </td>
                </tr>
            ))}
            </tbody>
        </table>

        <div className="text-center mt-3">
            {/* Add Employee and Mark Attendance buttons */}
            {/* You can link these buttons to other components or actions as needed */}
           
        </div>
        </div>
    );
    };

    export default AttendanceTable;
