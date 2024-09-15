import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeList from "./pages/employeeList/EmployeeList";
import Index from "./pages/index/Index";

// Extracting Routes into a separate function
function AppRoutes({ employees, setEmployees }) {
  return (
      <Routes>
        <Route path="/" element={<Index setEmployees={setEmployees} />} />
        <Route path="/employee" element={<EmployeeList employees={employees} />} />
      </Routes>
  );
}

function App() {
  const [employees, setEmployees] = useState([]);

  return (
      <Router>
        <section className="App">
          <AppRoutes employees={employees} setEmployees={setEmployees} />
        </section>
      </Router>
  );
}

export default App;