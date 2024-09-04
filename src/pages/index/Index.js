import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/form/Form";

export default function Index() {
  return (
    <section className="title">
      <h1>HRnet</h1>
      <Link to="/employee">View Employee</Link>
      <h2>Create employee</h2>
      <Form />
    </section>
  );
}
