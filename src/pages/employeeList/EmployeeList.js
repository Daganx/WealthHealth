import React from "react";
import EmployeeTable from "../../components/employeeTable/EmployeeTable"; 
import { Link } from "react-router-dom";

export default function EmployeeList({ employees }) {
  return (
    <div className="employee-list">
      <h1>Current Employees</h1>
      {employees.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        <EmployeeTable employees={employees} />
      )}
      <Link to="/">Back</Link>
    </div>
  );
}
