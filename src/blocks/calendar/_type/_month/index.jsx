import React, { useState } from 'react';
import dateFns from 'date-fns';
import CalendarHeader from '../../__header/calendar__header';
import CalendarNav from '../../__navigationBar';
import Event from '../../__label/calendar__label';
import Button from '../../../button';

import './calendar_type_month.css';
import '../../../../static/main.css';

const CalendarMonth = props => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const dateToShow = () => {
    return dateFns.format(currentMonth, 'MMMM YYYY');
  };

  const prevMonth = () => {
    setCurrentMonth(dateFns.subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(dateFns.addMonths(currentMonth, 1));
  };

  const checkEventDate = (eventDate, day) => {
    return dateFns.isSameDay(new Date(eventDate), day);
  };

  const weekDays = () => {
    const days = [];
    const startDate = dateFns.startOfWeek(currentMonth);
    for (let i = 0; i < 7; i += 1) {
      days.push(dateFns.format(dateFns.addDays(startDate, i), 'dddd'));
    }
    return days;
  };

  // eslint-disable-next-line no-unused-vars
  const displayEventInfo = date => {
    return dateFns.format(new Date(date), 'HH:mm');
  };

  const onDateClick = day => {
    console.log(day);
  };

  const renderDays = () => {
    const { data, handleEvent } = props;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(currentMonth);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = 'D';
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i += 1) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
          <td
            className={`calendar__cell_type_month
                            ${dateFns.isToday(day) ? 'calendar__cell_today' : ''}`}
            key={day}
            onClick={() => onDateClick(dateFns.parse(cloneDay))}
          >
            <div className="calendar__cellHeader_type_month">
              <span>{formattedDate}</span>
            </div>

            {/* eslint-disable-next-line no-loop-func */}
            {data.map(
              // eslint-disable-next-line no-loop-func
              spending =>
                checkEventDate(spending.date, day) && (
                  <Event event={spending} handleEvent={handleEvent} key={spending.id} type="month">
                    {spending.cost}
                  </Event>
                ),
            )}
          </td>,
        );

        day = dateFns.addDays(day, 1);
      }
      rows.push(<tr key={day}>{days}</tr>);
      days = [];
    }
    return <tbody className="calendar__body_type_month">{rows}</tbody>;
  };

  const changeView = () => {
    const { setViewType } = props;
    setViewType('list');
  };

  return (
    <>
      <Button onclick={changeView} className="calendar__button button_simple">
        switch to list view
      </Button>
      <CalendarNav date={dateToShow()} prevClick={prevMonth} nextClick={nextMonth} />
      <div className="container_calendar">
        <table className="calendar_type_month">
          <CalendarHeader weekDays={weekDays()} />
          {renderDays()}
        </table>
      </div>
    </>
  );
};

export default CalendarMonth;
