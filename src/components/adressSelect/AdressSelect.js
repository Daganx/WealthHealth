import React from "react";
// Address management component
export default function Address({ states, register, errors }) {
  return (
    <div className="employee-address-form">
      <div className="employee-address-form__field">
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          {...register("street", { required: "Street is required" })}
          className="employee-address-form__input"
        />
        {errors.street && (
          <span className="error">{errors.street.message}</span>
        )}
      </div>
      <div className="employee-address-form__field">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          {...register("city", { required: "City is required" })}
          className="employee-address-form__input"
        />
        {errors.city && <span className="error">{errors.city.message}</span>}
      </div>
      <div className="employee-address-form__field">
        <label htmlFor="state">State</label>
        <select
          id="state"
          {...register("state", { required: "State is required" })}
          className="employee-address-form__select"
        >
          <option value="">Select a State</option>
          {states.map((state) => (
            <option key={state.abbreviation} value={state.abbreviation}>
              {state.name}
            </option>
          ))}
        </select>
        {errors.state && <span className="error">{errors.state.message}</span>}
      </div>
      <div className="employee-address-form__field">
        <label htmlFor="zip-code">Zip Code</label>
        <input
          type="text"
          id="zip-code"
          {...register("zipCode", { required: "Zip Code is required" })}
          className="employee-address-form__input"
        />
        {errors.zipCode && (
          <span className="error">{errors.zipCode.message}</span>
        )}
      </div>
    </div>
  );
}
