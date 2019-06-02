import React, {Component} from 'react';
import dateFns from "date-fns";
import CalendarHeader from '../../__header/calendar__header'
import CalendarNav from "../../../navigationBar";
import Event from '../../__label/calendar__label';

import './calendar_type_month.css';
import '../../../../stylesheets/main.css';

class CalendarMonth extends Component {
    
    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
    };

    dateToShow () {
        const dateFormat = "MMMM YYYY";
        return dateFns.format(this.state.currentMonth, dateFormat)
    };
    
    prevMonth = () => {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        })
    };
    
    nextMonth = () => {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        })
        
    };
    
    checkEventDate = (eventDate, day) => {
        eventDate = new Date(eventDate);
        return dateFns.isSameDay(eventDate, day)
    };
    
    weekDays = () => {
        const dateFormat = "dddd";
        const days = [];
        let startDate = dateFns.startOfWeek(this.state.currentMonth);
        for (let i = 0; i < 7; i ++){
            days.push(
                dateFns.format(dateFns.addDays(startDate, i), dateFormat)
            )
      }
      return days;
    };
    
    displayEventInfo = (date) => {
        const timeFormat = "HH:mm";
        date = new Date(date);
        return dateFns.format(date, timeFormat);
    };
    
    renderDays = () => {
        const {currentMonth, selectDate} = this.state;
        const {data} = this.props;
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(currentMonth);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);
        
        const dateFormat = "D";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";
        
        while (day <= endDate) {
            for (let i = 0; i < 7; i ++){
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    <td
                        className={`calendar__cell_type_month
                            ${dateFns.isToday(day)
                            ? "calendar__cell_today"
                            : ''
                        }`}
                        key = {day}
                        onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
                    >
                        <div className="calendar__cellHeader_type_month">
                            <span>{formattedDate}</span>
                        </div>
                        
                        {data.map((spending) => (
                            this.checkEventDate(spending.date, day) && (
                                <Event
                                    event={spending}
                                    handleEvent={this.props.handleEvent}
                                    key={spending.id}
                                    type='month'
                                >
                                    {this.displayEventInfo(spending.date)}
                                </Event>
                            )
                        ))}
                    </td>
                );
                
                day = dateFns.addDays(day, 1);
            }
            rows.push(
                <tr key={day}>
                    {days}
                </tr>
            );
            days = [];
        }
        return <tbody className="calendar__body_type_month">{rows}</tbody>
    };
    
    onDateClick = day => {
        this.setState({
            selectedDate: day
        });
    };
    
    render() {
        return(
            <div>
                <CalendarNav
                    date={this.dateToShow()}
                    prevClick={this.prevMonth}
                    nextClick={this.nextMonth}
                />
                <div className="container">
                    <table className="calendar_type_month">
                        <CalendarHeader weekDays={this.weekDays()} />
                        {this.renderDays()}
                    </table>
                </div>
            </div>
        )
    }
}

export default CalendarMonth
