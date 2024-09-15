import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/form/Form';

function TitleSection() {
  return (
      <section className="title-container">
        <h1 className="title">HRnet</h1>
      </section>
  );
}

function ViewEmployeeLink() {
  return (
      <Link className="link-employee" to="/employee">
        View Employee
      </Link>
  );
}

export default function IndexPage({ setEmployees }) {
  return (
      <>
        <TitleSection />
        <ViewEmployeeLink />
        <Form setEmployees={setEmployees} />
      </>
  );
}