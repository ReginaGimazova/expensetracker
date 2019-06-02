import React from "react";
import "./switchButton.css";

const NavigationButton = ({ type, prevClick, nextClick }) => (
  <div>
    {type === "prev" && (
      <button className="navigation-button" onClick={prevClick}>
        <span className="material-icons">chevron_left</span>
      </button>
    )}

    {type === "next" && (
      <button className="navigation-button" onClick={nextClick}>
        <span className="material-icons">chevron_right</span>
      </button>
    )}
  </div>
);

export default NavigationButton;
