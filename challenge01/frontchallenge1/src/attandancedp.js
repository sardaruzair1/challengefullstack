// src/components/AttendanceDropdown.js

import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const AttendanceDropdown = ({ onSelectEmployee }) => {
  const [employeeList, setEmployeeList] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    // Fetch employee names from the backend
    fetch('http://localhost:8000/api/attendance/mark')  // Update the API endpoint accordingly
      .then(response => response.json())
      .then(data => setEmployeeList(data))
      .catch(error => console.error('Error fetching employee names:', error));
  }, []);

  const handleEmployeeChange = (e) => {
    const selectedId = e.target.value;
    const employee = employeeList.find(emp => emp.id == selectedId);

    setSelectedEmployee(employee);
    onSelectEmployee(employee);
  };

  const markAttendance = () => {
    if (selectedEmployee) {
      fetch('http://localhost:8000/api/attendance/mark', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          employee_id: selectedEmployee.id,
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Attendance marked successfully:', data);
          // You can perform additional actions if needed
        })
        .catch(error => console.error('Error marking attendance:', error));
    }
  };

  return (
    <div className='col-sm-4 offset-sm-4'>
      <label className='h1'>Select Employee:</label>
      <select className='form-control' onChange={handleEmployeeChange} value={selectedEmployee ? selectedEmployee.id : ''}>
        <option value="" disabled>Select an employee</option>
        {employeeList.map(employee => (
          <option key={employee.id} value={employee.id}>{employee.name}</option>
        ))}
      </select>

      {selectedEmployee && (
        <div>
          <h2>Selected Employee: {selectedEmployee.name}</h2>
          {/* You can display additional information about the selected employee here */}
        </div>
      )}
      <Button className='m-3' onClick={markAttendance}>Mark</Button>
    </div>
  );
};

export default AttendanceDropdown;
