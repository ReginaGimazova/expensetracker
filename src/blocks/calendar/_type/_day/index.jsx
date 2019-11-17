import React, { useState } from 'react';
import dateFns from 'date-fns';
import CalendarHeader from '../../__header/calendar__header';
import CalendarNav from '../../__navigationBar';
import Event from '../../__label/calendar__label';

import './calendar_type_day.css';
import '../../__cell/calendar__cell.css';
import '../../../../static/styles/main.css';
import Button from '../../../button';

const CalendarDay = props => {
  const [currentDay, setCurrentDay] = useState(new Date());

  const dateToShow = () => {
    const dateFormat = 'MMMM YYYY';
    return dateFns.format(new Date(), dateFormat);
  };

  const checkEventDate = (eventDate, time) => {
    const timeFormat = 'HH';
    // eslint-disable-next-line no-param-reassign
    eventDate = new Date(eventDate);
    const eventTime = dateFns.format(eventDate, timeFormat);
    return dateFns.isSameDay(eventDate, currentDay) && eventTime === time.substring(0, 2);
  };

  const prevDay = () => {
    setCurrentDay(dateFns.subDays(currentDay, 1));
  };

  const nextDay = () => {
    setCurrentDay(dateFns.addDays(currentDay, 1));
  };

  const getWeekDay = () => {
    const dateFormat = 'dddd';
    return dateFns.format(currentDay, dateFormat);
  };

  // eslint-disable-next-line no-unused-vars
  const displayEventInfo = date => {
    const timeFormat = 'HH:mm';
    return dateFns.format(new Date(date), timeFormat);
  };

  const onDateClick = day => {
    console.log(day);
  };

  const renderTimeBLocks = () => {
    const { data, handleEvent } = props;
    const times = [];
    const rows = [];
    const timeFormat = 'HH:mm';
    const startTime = dateFns.startOfDay(currentDay);
    for (let i = 0; i < 24; i += 1) {
      times.push(dateFns.format(dateFns.addHours(startTime, i), timeFormat));
    }

    const day = currentDay.getDate();

    times.map(time =>
      rows.push(
        <tr key={time}>
          <td className="calendar__cell_time">{time}</td>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <td className="calendar__cell_type_day" onClick={() => onDateClick(dateFns.parse(day))}>
            {data.map(
              spending =>
                checkEventDate(spending.date, time) && (
                  <Event event={spending} handleEvent={handleEvent} key={spending.id}>
                    {spending.cost}
                  </Event>
                ),
            )}
          </td>
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
      <CalendarNav date={dateToShow()} prevClick={prevDay} nextClick={nextDay} />
      <div className="container_calendar">
        <table className="calendar_type_day">
          <CalendarHeader
            day={currentDay.getDate()}
            weekDay={getWeekDay()}
            leftFirstColumn="true"
          />
          <tbody>{renderTimeBLocks()}</tbody>
        </table>
      </div>
    </>
  );
};

export default CalendarDay;
