import React from "react";

// Gestion du sélecteur de département
export default function DepartmentSelect({ register, errors }) {
  return (
    <div className="department-select">
      <label htmlFor="department">Department</label>
      <select
        id="department"
        {...register("department", { required: "Department is required" })}
        className="department-select__dropdown"
      >
        <option value="">Select a Department</option>
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
        <option value="Engineering">Engineering</option>
        <option value="Human Resources">Human Resources</option>
        <option value="Legal">Legal</option>
      </select>
      {errors.department && (
        <span className="error">{errors.department.message}</span>
      )}
    </div>
  );
}
