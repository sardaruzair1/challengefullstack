// src/components/Attendance.js

import React from 'react';
import AttendanceDropdown from './attandancedp';

const Attendance = () => {
  const handleEmployeeSelection = (selectedEmployee) => {
    // Handle the selected employee as needed
    console.log('Selected Employee:', selectedEmployee);
  };

  return (
    <div>
      <h1>Employee Attendance Information</h1>
      <AttendanceDropdown onSelectEmployee={handleEmployeeSelection} />
    </div>
  );
};

export default Attendance;
