import React from 'react';
import {Link} from 'react-router-dom';
import Form from '../../components/form/Form';

function TitleSection() {
  return (
      <section className="title-container pacifico-regular">
        <h1 className="title">HRnet</h1>
      </section>
  );
}

function ViewEmployeeLink() {
  return (
      <Link className="link-employee" to="/employee">
        VIEW EMPLOYEE
      </Link>
  );
}

export default function IndexPage({setEmployees}) {
  return (
      <>
        <TitleSection/>
        <Form setEmployees={setEmployees}/>
        <ViewEmployeeLink/>
      </>
  );
}