import React from "react";
import "./input__label.css";

const Label = ({ children, htmlFor }) => <label htmlFor={htmlFor} className="input__label">{children}</label>;

export default Label;
