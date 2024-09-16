import React from "react";
import EmployeeTable from "../../components/employeeTable/EmployeeTable";
import {Link} from "react-router-dom";

const NO_EMPLOYEES_MESSAGE = "No employees added yet.";

function renderEmployeeContent(employees) {
  return employees.length === 0 ? <p>{NO_EMPLOYEES_MESSAGE}</p> : <EmployeeTable employees={employees}/>;
}

export default function EmployeeList({employees}) {
  return (
      <div className="employee-list-container">
        <h1 className="title">Current Employees</h1>
        {renderEmployeeContent(employees)}
        <Link to="/">Back</Link>
      </div>
  );
}