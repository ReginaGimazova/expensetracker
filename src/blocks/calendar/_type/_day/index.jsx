import React, { Component } from 'react';
import dateFns from 'date-fns';
import CalendarHeader from '../../__header/calendar__header';
import CalendarNav from '../../__navigationBar';
import Event from '../../__label/calendar__label';

import './calendar_type_day.css';
import '../../__cell/calendar__cell.css';
import '../../../../styles/main.css';

class CalendarDay extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    selectedDate: new Date(),
    // eslint-disable-next-line react/no-unused-state
    currentWeek: new Date(),
    // eslint-disable-next-line react/no-unused-state
    currentMonth: new Date(),
    currentDay: new Date(),
    // eslint-disable-next-line react/no-unused-state
    currentTime: new Date(),
  };

  dateToShow = () => {
    const dateFormat = 'MMMM YYYY';
    const { currentMonth } = this.state;
    return dateFns.format(currentMonth, dateFormat);
  };

  checkEventDate = (eventDate, time) => {
    const timeFormat = 'HH';
    const { currentDay } = this.state;
    // eslint-disable-next-line no-param-reassign
    eventDate = new Date(eventDate);
    const eventTime = dateFns.format(eventDate, timeFormat);
    return dateFns.isSameDay(eventDate, currentDay) && eventTime === time.substring(0, 2);
  };

  prevDay = () => {
    const { currentDay } = this.state;
    this.setState({
      currentDay: dateFns.subDays(currentDay, 1),
    });
  };

  nextDay = () => {
    const { currentDay } = this.state;
    this.setState({
      currentDay: dateFns.addDays(currentDay, 1),
    });
  };

  getWeekDay = () => {
    const dateFormat = 'dddd';
    const { currentDay } = this.state;
    return dateFns.format(currentDay, dateFormat);
  };

  displayEventInfo = date => {
    const timeFormat = 'HH:mm';
    // eslint-disable-next-line no-param-reassign
    date = new Date(date);
    return dateFns.format(date, timeFormat);
  };

  renderTimeBLocks = () => {
    const { data, handleEvent } = this.props;
    const { currentDay } = this.state;
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
          <td
            className="calendar__cell_type_day"
            onClick={() => this.onDateClick(dateFns.parse(day))}
          >
            {data.map(
              spending =>
                this.checkEventDate(spending.date, time) && (
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

  onDateClick = day => {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      selectedDate: day,
    });
  };

  render() {
    const { currentDay } = this.state;
    return (
      <div className="calendarContainer">
        <CalendarNav date={this.dateToShow()} prevClick={this.prevDay} nextClick={this.nextDay} />
        <div className="container_flex">
          <table className="calendar_type_day">
            <CalendarHeader
              day={currentDay.getDate()}
              weekDay={this.getWeekDay()}
              leftFirstColumn="true"
            />
            <tbody>{this.renderTimeBLocks()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CalendarDay;
