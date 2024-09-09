import React, { useState } from "react";
import PersonalInfoForm from "../personalInfoForm/PersonalInfoForm";
import Address from "../adressSelect/AdressSelect";
import DepartmentSelect from "../departmentSelect/DepartmentSelect";
import States from "../../data/states.json";
import DepartmentData from "../../data/department.json"
import Modal from "../modal/Modal";
import { useForm } from "react-hook-form";

export default function Form({ setEmployees }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Function to handle form submission
  const onSubmit = (data) => {
    setEmployees((prevEmployees) => [...prevEmployees, data]);
    console.log("Employee saved: ", data);
    reset();
    setIsModalOpen(true); // Open the modal
  };
  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <form
        className="employee-personal-info-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Personal info form component */}
        <PersonalInfoForm register={register} errors={errors} />
        {/* Address form component */}
        <Address states={States} register={register} errors={errors} />
        {/* Department selection component */}
        <DepartmentSelect department={DepartmentData} register={register} errors={errors} />
        {/* Submit button */}
        <button type="submit" className="employee-submit-button">
          Submit
        </button>
      </form>
      {/* Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
