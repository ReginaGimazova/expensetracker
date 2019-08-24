import React, { Component } from 'react';
import dateFns from 'date-fns';
import CalendarHeader from '../../__header/calendar__header';
import CalendarNav from '../../__navigationBar';
import Event from '../../__label/calendar__label';

import '../../../../static/main.css';
import './calendar_type_week.scss';

class CalendarWeek extends Component {
  state = {
    currentMonth: new Date(),
    // eslint-disable-next-line react/no-unused-state
    selectedDate: new Date(),
    currentWeek: new Date(),
    currentDay: new Date(),
  };

  componentDidMount() {
    this.days();
  }

  dateToShow = () => {
    const dateFormat = 'MMMM YYYY';
    const { currentWeek } = this.state;
    return dateFns.format(currentWeek, dateFormat);
  };

  prevWeek = () => {
    const { currentWeek } = this.state;
    this.setState({
      currentWeek: dateFns.subWeeks(currentWeek, 1),
    });
  };

  nextWeek = () => {
    const { currentWeek } = this.state;
    this.setState({
      currentWeek: dateFns.addWeeks(currentWeek, 1),
    });
  };

  weekDays = () => {
    const dateFormat = 'dddd';
    const days = [];
    const { currentMonth } = this.state;
    const startDate = dateFns.startOfWeek(currentMonth);
    for (let i = 0; i < 7; i += 1) {
      days.push(dateFns.format(dateFns.addDays(startDate, i), dateFormat));
    }
    return days;
  };

  days = () => {
    const days = [];
    const dateFormat = 'D';
    const { currentWeek } = this.state;
    const startDate = dateFns.startOfWeek(currentWeek);
    for (let day = 0; day < 7; day += 1) {
      days.push(dateFns.format(dateFns.addDays(startDate, day), dateFormat));
    }
    return days;
  };

  checkEventDate = (eventDate, currentDate, time) => {
    const timeFormat = 'HH';
    // eslint-disable-next-line no-param-reassign
    eventDate = new Date(eventDate);
    const eventTime = dateFns.format(eventDate, timeFormat);
    return dateFns.isSameDay(eventDate, currentDate) && eventTime === time.substring(0, 2);
  };

  displayEventInfo = date => {
    const timeFormat = 'HH:mm';
    return dateFns.format(new Date(date), timeFormat);
  };

  renderTimeBLocks = () => {
    const { data, handleEvent } = this.props;
    const { currentDay } = this.state;
    const times = [];
    const rows = [];
    const startDate = dateFns.startOfWeek(new Date());
    const timeFormat = 'HH:mm';
    const startTime = dateFns.startOfDay(currentDay);
    for (let i = 0; i < 24; i += 1) {
      times.push(dateFns.format(dateFns.addHours(startTime, i), timeFormat));
    }
    const day = startDate.getDate();
    const days = Array(7)
      .fill(0)
      // eslint-disable-next-line no-return-assign,no-param-reassign
      .map((e, i) => (i += 1));

    times.map(time =>
      rows.push(
        <tr key={time}>
          <td className="calendar__cell_time">{time}</td>
          {days.map(d => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
            <td
              className="calendar__cell_type_week"
              key={d}
              onClick={() => this.onDateClick(dateFns.parse(day))}
            >
              {data.map(
                spending =>
                  this.checkEventDate(spending.date, dateFns.addDays(startDate, d), time) && (
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

  onDateClick = day => {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      selectedDate: day,
    });
  };

  render() {
    return (
      <div>
        <CalendarNav date={this.dateToShow()} prevClick={this.prevWeek} nextClick={this.nextWeek} />
        <div className="container_flex">
          <table className="calendar_type_week">
            <CalendarHeader weekDays={this.weekDays()} days={this.days()} leftFirstColumn="true" />
            <tbody>{this.renderTimeBLocks()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CalendarWeek;
