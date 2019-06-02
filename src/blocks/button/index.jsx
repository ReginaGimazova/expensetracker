import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ onclick, icon, children, type }) => (
  <button
    className={`button ${type === "submit" ? "button_submit" : ""}`}
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
