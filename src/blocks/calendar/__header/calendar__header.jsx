import React from "react";
import "./calendar__header.scss";

const CalendarHeader = ({ weekDays, days, leftFirstColumn, day, weekDay }) => (
  <thead>
    {weekDays && !days && (
      <tr className="calendar__header">
        {leftFirstColumn&& <th />}
        {weekDays &&
          weekDays.map((weekDay, key) => (
            <th key={key} className="calendar__header_type_simple">
              {weekDay}
            </th>
          ))}
      </tr>
    )}

    {days && weekDays && (
      <tr>
        {leftFirstColumn && <th />}
        {weekDays.map((weekDay, key) => (
          <th key={key} className="calendar__header_type_composite">
            {weekDay}
            <p>{days[key]}</p>
          </th>
        ))}
      </tr>
    )}

    {day && weekDay && (
      <tr>
        {leftFirstColumn && <th />}
        <th className="calendar__header_type_composite">
          {weekDay.toUpperCase()}
          <p>{day}</p>
        </th>
      </tr>
    )}
  </thead>
);

export default CalendarHeader;
