import React, { useState } from "react";
import DataTable from "react-data-table-component";
// Table columns
const columns = [
  { name: "First Name", selector: (row) => row.firstName, sortable: true },
  { name: "Last Name", selector: (row) => row.lastName, sortable: true },
  { name: "Start Date", selector: (row) => row.startDate, sortable: true },
  { name: "Department", selector: (row) => row.department, sortable: true },
  { name: "Date of Birth", selector: (row) => row.dateOfBirth, sortable: true },
  { name: "Street", selector: (row) => row.street, sortable: true },
  { name: "City", selector: (row) => row.city, sortable: true },
  { name: "State", selector: (row) => row.state, sortable: true },
  { name: "Zip Code", selector: (row) => row.zipCode, sortable: true },
];
// Search input component
const SearchInput = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    placeholder="Search..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    style={{ marginBottom: "1rem", padding: "0.5rem", width: "100%" }}
  />
);

const EmployeeTable = ({ employees }) => {
  const [searchTerm, setSearchTerm] = useState("");
  // Filter data based on the search term
  const filteredData = employees.filter((employee) =>
    Object.values(employee).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  return (
    <div>
      {/* Search input field */}
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* Employee data table */}
      <DataTable
        title="Employee List"
        columns={columns}
        data={filteredData}
        pagination
      />
    </div>
  );
};

export default EmployeeTable;
