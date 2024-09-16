import React, {useState} from "react";
import DataTable from "react-data-table-component";

const columns = [{name: "First Name", selector: row => row.firstName, sortable: true}, {
  name: "Last Name",
  selector: row => row.lastName,
  sortable: true
}, {name: "Start Date", selector: row => row.startDate, sortable: true}, {
  name: "Department",
  selector: row => row.department,
  sortable: true
}, {name: "Date of Birth", selector: row => row.dateOfBirth, sortable: true}, {
  name: "Street",
  selector: row => row.street,
  sortable: true
}, {name: "City", selector: row => row.city, sortable: true}, {
  name: "State",
  selector: row => row.state,
  sortable: true
}, {name: "Zip Code", selector: row => row.zipCode, sortable: true},];

const SearchInput = ({searchTerm, setSearchTerm}) => (<input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{marginBottom: "1rem", padding: "0.5rem", width: "100%"}}
    />);

const EmployeeTable = ({employees}) => {
  return (<DataTable
          title="Employee List"
          columns={columns}
          data={employees}
          pagination
      />);
};

const EmployeeTableContainer = ({employees}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredEmployees = employees.filter(employee => Object.values(employee).some(value => value.toString().toLowerCase().includes(searchTerm.toLowerCase())));

  return (<div className="data-table-parent">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <EmployeeTable employees={filteredEmployees}/>
      </div>);
};

export default EmployeeTableContainer;