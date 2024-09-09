import React from "react";
import Form from "../../components/form/Form";
import { Link } from "react-router-dom";

export default function Index({ setEmployees }) {
  return (
    <>
      <h1>Welcome to the Employee Management App</h1>
      <Link to="/employee">View Employee</Link>
      <Form setEmployees={setEmployees} />
    </>
  );
}
