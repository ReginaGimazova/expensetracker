import React, { useState, useEffect } from 'react';
import dateFns from 'date-fns';
import CalendarHeader from '../../__header/calendar__header';
import CalendarNav from '../../__navigationBar';
import Event from '../../__label/calendar__label';

import '../../../../static/styles/main.css';
import './calendar_type_week.scss';
import Button from '../../../button';

const CalendarWeek = props => {
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const days = () => {
    const daysArray = [];
    const startDate = dateFns.startOfWeek(currentWeek);
    for (let day = 0; day < 7; day += 1) {
      daysArray.push(dateFns.format(dateFns.addDays(startDate, day), 'D'));
    }
    return daysArray;
  };

  useEffect(() => {
    days();
  }, []);

  const dateToShow = () => {
    return dateFns.format(currentWeek, 'MMMM YYYY');
  };

  const prevWeek = () => {
    setCurrentWeek(dateFns.subWeeks(currentWeek, 1));
  };

  const nextWeek = () => {
    setCurrentWeek(dateFns.addWeeks(currentWeek, 1));
  };

  const weekDays = () => {
    const daysArray = [];
    const startDate = dateFns.startOfWeek(new Date());
    for (let i = 0; i < 7; i += 1) {
      daysArray.push(dateFns.format(dateFns.addDays(startDate, i), 'dddd'));
    }
    return daysArray;
  };

  const checkEventDate = (eventDate, currentDate, time) => {
    const eventTime = dateFns.format(new Date(eventDate), 'HH');
    return (
      dateFns.isSameDay(new Date(eventDate), currentDate) && eventTime === time.substring(0, 2)
    );
  };

  // eslint-disable-next-line no-unused-vars
  const displayEventInfo = date => {
    return dateFns.format(new Date(date), 'HH:mm');
  };

  const onDateClick = day => {
    console.log(day);
  };

  const renderTimeBLocks = () => {
    const { data, handleEvent } = props;
    const times = [];
    const rows = [];
    const startDate = dateFns.startOfWeek(new Date());
    const startTime = dateFns.startOfDay(new Date());
    for (let i = 0; i < 24; i += 1) {
      times.push(dateFns.format(dateFns.addHours(startTime, i), 'HH:mm'));
    }
    const day = startDate.getDate();
    const daysArray = Array(7)
      .fill(0)
      // eslint-disable-next-line no-return-assign,no-param-reassign
      .map((e, i) => (i += 1));

    times.map(time =>
      rows.push(
        <tr key={time}>
          <td className="calendar__cell_time">{time}</td>
          {daysArray.map(d => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
            <td
              className="calendar__cell_type_week"
              key={d}
              onClick={() => onDateClick(dateFns.parse(day))}
            >
              {data.map(
                spending =>
                  checkEventDate(spending.date, dateFns.addDays(startDate, d), time) && (
                    <Event event={spending} handleEvent={handleEvent} key={spending.id}>
                      {spending.cost}
                    </Event>
                  ),
              )}
            </td>
          ))}
        </tr>,
      ),
    );

    return rows;
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
      <CalendarNav date={dateToShow()} prevClick={prevWeek} nextClick={nextWeek} />
      <table className="calendar_type_week">
        <CalendarHeader weekDays={weekDays()} days={days()} leftFirstColumn="true" />
        <tbody>{renderTimeBLocks()}</tbody>
      </table>
    </>
  );
};

export default CalendarWeek;
