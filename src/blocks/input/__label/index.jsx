import React from 'react';
import './input__label.css';

// eslint-disable-next-line jsx-a11y/label-has-for
const Label = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor} className="input__label">
    {children}
  </label>
);

export default Label;
