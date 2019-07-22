import React from 'react';
import './input.css';

const Input = ({ id, type, name, placeholder, value, onChange, min, step }) => (
  <input
    id={id}
    className="input"
    type={type}
    name={name}
    placeholder={placeholder}
    min={min}
    step={step}
    value={value}
    onChange={onChange}
  />
);

export default Input;
