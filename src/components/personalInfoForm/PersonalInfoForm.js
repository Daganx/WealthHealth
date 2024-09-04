import React from "react";

export default function PersonalInfoForm({ register, errors }) {
  return (
    <div className="personal-info-form">
      <div className="personal-info-form__field">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          {...register("firstName", { required: "First name is required" })}
          className="personal-info-form__input"
        />
        {errors.firstName && (
          <span className="error-message">{errors.firstName.message}</span>
        )}
      </div>

      <div className="personal-info-form__field">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          {...register("lastName", { required: "Last name is required" })}
          className="personal-info-form__input"
        />
        {errors.lastName && (
          <span className="error-message">{errors.lastName.message}</span>
        )}
      </div>

      <div className="personal-info-form__field">
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          {...register("dateOfBirth", {
            required: "Date of birth is required",
          })}
          className="personal-info-form__input"
        />
        {errors.dateOfBirth && (
          <span className="error-message">{errors.dateOfBirth.message}</span>
        )}
      </div>

      <div className="personal-info-form__field">
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          {...register("startDate", { required: "Start date is required" })}
          className="personal-info-form__input"
        />
        {errors.startDate && (
          <span className="error-message">{errors.startDate.message}</span>
        )}
      </div>
    </div>
  );
}
