import React from "react";

export default function Address({ states, register, errors }) {

  const getStateOptions = () =>
      states.map((state) => (
          <option key={state.abbreviation} value={state.abbreviation}>
            {state.name}
          </option>
      ));

  const registerOptions = (label) => ({ required: `${label} is required` });

  const Field = ({ label, id, registerName, type = "text", options = null }) => (
      <div className="employee-address-form__field">
        <label htmlFor={id}>{label}</label>
        {type === "select" ? (
            <select id={id} {...register(registerName, registerOptions(label))} className="employee-address-form__select">
              <option value="">Select a {label}</option>
              {options}
            </select>
        ) : (
            <input type={type} id={id} {...register(registerName, registerOptions(label))} className="employee-address-form__input"/>
        )}
        {errors[registerName] && <span className="error">{errors[registerName].message}</span>}
      </div>
  );

  return (
      <div className="employee-address-form">
        <Field label="Street" id="street" registerName="street" />
        <Field label="City" id="city" registerName="city" />
        <Field label="State" id="state" registerName="state" type="select" options={getStateOptions()} />
        <Field label="Zip Code" id="zip-code" registerName="zipCode" />
      </div>
  );
}