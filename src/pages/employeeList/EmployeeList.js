// src/components/EmployeeList/EmployeeList.js
import React, { useState, useEffect } from "react";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Récupération des employés depuis le localStorage
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  return (
    <div className="employee-list">
      <h1>Employee List :</h1>
      {employees.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        <ul>
          {employees.map((employee, index) => (
            <li key={index}>
              {employee.firstName} {employee.lastName}, {employee.street},{" "}
              {employee.city}, {employee.state}, {employee.zipCode},{" "}
              {employee.department}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
