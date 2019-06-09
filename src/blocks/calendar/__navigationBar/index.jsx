import React from "react";
import NavigationButton from "./__switchButton";
import "./calendar__navigationBar.css";

const CalendarNav = props => (
  <div className="calendar__nav">
    <NavigationButton type="prev" prevClick={props.prevClick} />
    <NavigationButton type="next" nextClick={props.nextClick} />
    <h2 className="calendar__nav__title">{props.date}</h2>
  </div>
);

export default CalendarNav;
