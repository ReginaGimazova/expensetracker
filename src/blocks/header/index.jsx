import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import "../../stylesheets/main.css";

const Header = () => (
  <header className="header">
    <FontAwesomeIcon icon={faHandHoldingUsd} className="icon" />
    <h1 className="header__title">EXPENSE TRACKER</h1>
  </header>
);

export default Header;
