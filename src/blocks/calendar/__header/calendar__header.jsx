import React from 'react';
import './calendar__header.scss';

const CalendarHeader = ({ weekDays, days, leftFirstColumn, day, weekDay }) => (
  <thead>
    {weekDays && !days && (
      <tr className="calendar__header">
        {leftFirstColumn && <th />}
        {weekDays &&
          weekDays.map((weekDaysItem, key) => (
            // eslint-disable-next-line react/no-array-index-key
            <th key={key} className="calendar__header_type_simple">
              {weekDaysItem}
            </th>
          ))}
      </tr>
    )}

    {days && weekDays && (
      <tr>
        {leftFirstColumn && <th />}
        {weekDays.map((weekDaysItem, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <th key={key} className="calendar__header_type_composite">
            {weekDaysItem}
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
