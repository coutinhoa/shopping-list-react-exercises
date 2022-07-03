import React from "react";
import "./Select.css";

export const Select = ({ name, options, onChange, value }) => {
  return (
    <select name={name} onChange={onChange} value={value}>
      {options.map((option) => (
        <option key={`${name}-${option}`} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
