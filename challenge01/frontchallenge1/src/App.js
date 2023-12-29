import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Header';
import Register from './AddEmployee';
import Attendance from './attandancemark';

import AttendanceTable from './attandancetable';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Note the change here

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
     
        
        <Routes> {/* Wrap your routes in <Routes> */}
          <Route path="/register" element={<Register />} />
          <Route path="/attandancemark" element={<Attendance />} />
          <Route path="/attendancetable" element={<AttendanceTable/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
