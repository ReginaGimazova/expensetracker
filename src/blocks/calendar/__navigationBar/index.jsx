import React from 'react';
import NavigationButton from './__switchButton';
import './calendar__navigationBar.css';

const CalendarNav = ({ prevClick, nextClick, date }) => (
  <div className="calendar__nav">
    <NavigationButton type="prev" prevClick={prevClick} />
    <NavigationButton type="next" nextClick={nextClick} />
    <h2 className="calendar__nav__title">{date}</h2>
  </div>
);

export default CalendarNav;
