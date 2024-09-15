import React from "react";

export default function Address({ states, register, errors }) {
  const renderField = (label, id, registerName, type = "text", options = null) => (
      <div className="employee-address-form__field">
        <label htmlFor={id}>{label}</label>
        {type === "select" ? (
            <select id={id} {...register(registerName, { required: `${label} is required` })} className="employee-address-form__select">
              <option value="">Select a {label}</option>
              {options}
            </select>
        ) : (
            <input type={type} id={id} {...register(registerName, { required: `${label} is required` })} className="employee-address-form__input" />
        )}
        {errors[registerName] && <span className="error">{errors[registerName].message}</span>}
      </div>
  );

  const stateOptions = states.map((state) => (
      <option key={state.abbreviation} value={state.abbreviation}>
        {state.name}
      </option>
  ));

  return (
      <div className="employee-address-form">
        {renderField("Street", "street", "street")}
        {renderField("City", "city", "city")}
        {renderField("State", "state", "state", "select", stateOptions)}
        {renderField("Zip Code", "zip-code", "zipCode")}
      </div>
  );
}