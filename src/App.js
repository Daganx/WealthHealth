import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeList from "./pages/employeeList/EmployeeList";
import Index from "./pages/index/Index";

function App() {
  const [employees, setEmployees] = useState([]);

  return (
    <Router>
      <section className="App">
        <Routes>
          <Route path="/" element={<Index setEmployees={setEmployees} />} />
          <Route
            path="/employee"
            element={<EmployeeList employees={employees} />}
          />
        </Routes>
      </section>
    </Router>
  );
}

export default App;
