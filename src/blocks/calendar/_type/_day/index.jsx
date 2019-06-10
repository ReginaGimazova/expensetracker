import React, {Component} from 'react';
import dateFns from "date-fns";
import CalendarHeader from '../../__header/calendar__header'
import CalendarNav from "../../__navigationBar";
import Event from "../../__label/calendar__label";

import "./calendar_type_day.css";
import "../../__cell/calendar__cell.css";
import '../../../../stylesheets/main.css';

class CalendarDay extends Component {
    
    state = {
        selectedDate: new Date(),
        currentWeek: new Date(),
        currentMonth: new Date(),
        currentDay: new Date(),
        currentTime: new Date(),
    };
    
    dateToShow () {
        const dateFormat = "MMMM YYYY";
        return dateFns.format(this.state.currentMonth, dateFormat)
    };
    
    checkEventDate = (eventDate, time) => {
        const timeFormat = 'HH';
        eventDate = new Date(eventDate);
        let eventTime = dateFns.format(eventDate, timeFormat);
        return dateFns.isSameDay(eventDate, this.state.currentDay) &&
            eventTime === time.substring(0,2);
    };
    
    prevDay = () => {
        this.setState({
            currentDay: dateFns.subDays(this.state.currentDay, 1),
        })
    };
    
    nextDay = () => {
        this.setState({
            currentDay: dateFns.addDays(this.state.currentDay, 1)
        })
    };
    
    getWeekDay = () => {
        const dateFormat = "dddd";
        return dateFns.format(this.state.currentDay, dateFormat)
    };
    
    displayEventInfo = (date) => {
        const timeFormat = "HH:mm";
        date = new Date(date);
        return dateFns.format(date, timeFormat)
    };
    
    renderTimeBLocks = () => {
        const {data} = this.props;
        const times = [];
        const rows = [];
        const timeFormat = "HH:mm";
        let startTime = dateFns.startOfDay(this.state.currentDay);
        for (let i = 0; i < 24; i ++) {
            times.push(dateFns.format(dateFns.addHours(startTime, i), timeFormat))
        }
        
        let day = this.state.currentDay.getDate();
        
        times.map((time) => (
            rows.push(
                <tr key={time}>
                    <td className="calendar__cell_time">
                        {time}
                    </td>
                    <td
                        className="calendar__cell_type_day"
                        onClick={() => this.onDateClick(dateFns.parse(day))}
                    >
                        {data.map((spending) => (
                            this.checkEventDate(spending.date, time) && (
                                <Event event={spending} handleEvent={this.props.handleEvent} key={spending.id} >{spending.cost}</Event>
                            )
                        ))}
                        
                    </td>
                </tr>
            )
        ));
        
        return rows
    };
    
    onDateClick = day => {
        this.setState({
            selectedDate: day
        });
    };
    
    render() {
        return(
            <div className="container">
                <CalendarNav
                    date={this.dateToShow()}
                    prevClick={this.prevDay}
                    nextClick={this.nextDay}
                />
                <div className="container_flex">
                    <table className="calendar_type_day">
                        <CalendarHeader day={this.state.currentDay.getDate()} weekDay={this.getWeekDay()} leftFirstColumn="true"/>
                        <tbody>
                            {this.renderTimeBLocks()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default CalendarDay
