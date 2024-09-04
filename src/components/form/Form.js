// src/components/Form/Form.js
import React from "react";
import PersonalInfoForm from "../personalInfoForm/PersonalInfoForm";
import Address from "../adressSelect/AdressSelect";
import DepartmentSelect from "../departmentSelect/DepartmentSelect";
import States from "../../data/states.json";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// Gestion de l'envoie du formulaire
export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Sauvegarde des données dans le localStorage
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(data);
    localStorage.setItem("employees", JSON.stringify(employees));

    console.log("Employé sauvegardé : ", data);
    reset();

    navigate("/employee");
  };

  return (
    <form
      className="employee-personal-info-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <PersonalInfoForm register={register} errors={errors} />
      <Address states={States} register={register} errors={errors} />
      <DepartmentSelect register={register} errors={errors} />
      <button type="submit" className="employee-submit-button">
        Valider
      </button>
    </form>
  );
}
