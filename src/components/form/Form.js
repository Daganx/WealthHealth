import React, {useState} from "react";
import PersonalInfoForm from "../personalInfoForm/PersonalInfoForm";
import Address from "../adressSelect/AdressSelect";
import DepartmentSelect from "../departmentSelect/DepartmentSelect";
import States from "../../data/states.json";
import DepartmentData from "../../data/department.json";
import Modal from "@daganx/modal-package";
import {useForm} from "react-hook-form";

const FORM_CLASS_NAME = "employee-personal-info-form";
const SUBMIT_BUTTON_CLASS_NAME = "employee-submit-button";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return {isModalOpen, openModal, closeModal};
};

export default function Form({setEmployees}) {
  const {register, handleSubmit, formState: {errors}, reset} = useForm();
  const {isModalOpen, openModal, closeModal} = useModal();

  const handleFormSubmit = (data) => {
    setEmployees((prevEmployees) => [...prevEmployees, data]);
    console.log("Employee saved: ", data);
    reset();
    openModal();
  };

  return (
      <>
        <form className={FORM_CLASS_NAME} onSubmit={handleSubmit(handleFormSubmit)}>
          <PersonalInfoForm register={register} errors={errors}/>
          <Address states={States} register={register} errors={errors}/>
          <DepartmentSelect department={DepartmentData} register={register} errors={errors}/>
          <button type="submit" className={SUBMIT_BUTTON_CLASS_NAME}>
            Submit
          </button>
        </form>
        <Modal isOpen={isModalOpen} onClose={closeModal}/>
      </>
  );
}