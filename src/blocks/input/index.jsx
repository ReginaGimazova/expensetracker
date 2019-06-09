import React from "react";
import "./input.css";

const Input = ({ id, type, name, placeholder, value, onChange }) => (
  <input
    id={id}
    className="input"
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default Input;
