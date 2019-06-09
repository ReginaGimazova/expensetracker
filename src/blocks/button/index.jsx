import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import "./_type/_submit/button_type_submit.css";
import "./_type/_yellow/button_type_yellow.css";

const Button = ({ onclick, icon, children, type }) => (
  <button
    className={`button ${type === "submit" ? "button_type_submit" : "button_type_yellow"}`}
    type="button"
    onClick={onclick}
  >
    {icon && <span>{icon}</span>}
    {children}
  </button>
);

export default Button;

Button.propTypes = {
  onclick: PropTypes.func,
  icon: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  onclick: undefined,
  icon: "",
  type: "",
};
