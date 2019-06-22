import React from 'react';
import './input__label.css';

const Label = ({ children, htmlFor }) => (
  // eslint-disable-next-line jsx-a11y/label-has-for
  <label htmlFor={htmlFor} className="input__label">
    {children}
  </label>
);

export default Label;
