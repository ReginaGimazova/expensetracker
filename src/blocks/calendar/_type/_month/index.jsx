import React, { Component } from 'react';
import dateFns from 'date-fns';
import CalendarHeader from '../../__header/calendar__header';
import CalendarNav from '../../__navigationBar';
import Event from '../../__label/calendar__label';

import './calendar_type_month.css';
import '../../../../stylesheets/main.css';

class CalendarMonth extends Component {
  state = {
    currentMonth: new Date(),
    // eslint-disable-next-line react/no-unused-state
    selectedDate: new Date(),
  };

  dateToShow = () => {
    const dateFormat = 'MMMM YYYY';
    const { currentMonth } = this.state;
    return dateFns.format(currentMonth, dateFormat);
  };

  prevMonth = () => {
    const { currentMonth } = this.state;
    this.setState({
      currentMonth: dateFns.subMonths(currentMonth, 1),
    });
  };

  nextMonth = () => {
    const { currentMonth } = this.state;
    this.setState({
      currentMonth: dateFns.addMonths(currentMonth, 1),
    });
  };

  checkEventDate = (eventDate, day) => {
    // eslint-disable-next-line no-param-reassign
    eventDate = new Date(eventDate);
    return dateFns.isSameDay(eventDate, day);
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

  displayEventInfo = date => {
    const timeFormat = 'HH:mm';
    // eslint-disable-next-line no-param-reassign
    date = new Date(date);
    return dateFns.format(date, timeFormat);
  };

  renderDays = () => {
    const { currentMonth } = this.state;
    const { data, handleEvent } = this.props;
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
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <div className="calendar__cellHeader_type_month">
              <span>{formattedDate}</span>
            </div>

            {/* eslint-disable-next-line no-loop-func */}
            {data.map(
              // eslint-disable-next-line no-loop-func
              spending =>
                this.checkEventDate(spending.date, day) && (
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

  onDateClick = day => {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      selectedDate: day,
    });
  };

  render() {
    return (
      <div>
        <CalendarNav
          date={this.dateToShow()}
          prevClick={this.prevMonth}
          nextClick={this.nextMonth}
        />
        <div className="calendarContainer">
          <table className="calendar_type_month">
            <CalendarHeader weekDays={this.weekDays()} />
            {this.renderDays()}
          </table>
        </div>
      </div>
    );
  }
}

export default CalendarMonth;
