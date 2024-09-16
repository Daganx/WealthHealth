import React from "react";

const FormField = ({id, label, type, register, validation, error}) => (
    <div className="personal-info-form__field">
      <label htmlFor={id}>{label}</label>
      <input
          type={type}
          id={id}
          {...register(id, validation)}
          className="personal-info-form__input"
      />
      {error && <span className="error-message">{error.message}</span>}
    </div>
);

export default function PersonalInfoForm({register, errors}) {
  return (
      <div className="personal-info-form">
        <FormField
            id="firstName"
            label="First Name"
            type="text"
            register={register}
            validation={{required: "First name is required"}}
            error={errors.firstName}
        />
        <FormField
            id="lastName"
            label="Last Name"
            type="text"
            register={register}
            validation={{required: "Last name is required"}}
            error={errors.lastName}
        />
        <FormField
            id="dateOfBirth"
            label="Date of Birth"
            type="date"
            register={register}
            validation={{required: "Date of birth is required"}}
            error={errors.dateOfBirth}
        />
        <FormField
            id="startDate"
            label="Start Date"
            type="date"
            register={register}
            validation={{required: "Start date is required"}}
            error={errors.startDate}
        />
      </div>
  );
}