import React, {Component} from 'react';
import dateFns from "date-fns";
import CalendarHeader from '../../__header/calendar__header'
import CalendarNav from "../../../navigationBar";
import TimeCell from '../../__timeCell/calendar__timeCell';
import Event from "../../__label/calendar__label";

import '../../../../stylesheets/main.css'
import './calendar_type_week.scss'

class CalendarWeek extends Component {

    state = {
        currentMonth: new Date(),
        selectedDate: new Date(),
        currentWeek: new Date(),
        currentDay: new Date()
    };
    
    componentDidMount() {
        this.days();
    }
    
    dateToShow () {
        const dateFormat = "MMMM YYYY";
        return dateFns.format(this.state.currentWeek, dateFormat)
    };
    
    prevWeek = () => {
        this.setState({
            currentWeek: dateFns.subWeeks(this.state.currentWeek, 1)
        });
    };
    
    nextWeek = () => {
        this.setState({
            currentWeek: dateFns.addWeeks(this.state.currentWeek, 1)
        })
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
    
    
    days = () => {
        const days = [];
        const dateFormat = "D";
        const startDate = dateFns.startOfWeek(this.state.currentWeek);
        for (let day = 0; day < 7; day ++){
            days.push(dateFns.format(dateFns.addDays(startDate, day), dateFormat))
        }
        return days;
    };
    
    checkEventDate = (eventDate, currentDate, time) => {
        const timeFormat = 'HH';
        eventDate = new Date(eventDate);
        let eventTime = dateFns.format(eventDate, timeFormat);
        return dateFns.isSameDay(eventDate, currentDate) && eventTime === time.substring(0,2)
    };
    
    displayEventInfo = (date) => {
        const timeFormat = 'HH:mm';
        date = new Date(date);
        return dateFns.format(date, timeFormat);
    };
    
    renderTimeBLocks = () => {
        const {data} = this.props;
        const times = [];
        const rows = [];
        const startDate = dateFns.startOfWeek(new Date());
        const timeFormat = "HH:mm";
        let startTime = dateFns.startOfDay(this.state.currentDay);
        for (let i = 0; i < 24; i ++) {
            times.push(dateFns.format(dateFns.addHours(startTime, i), timeFormat))
        }
        let day = startDate.getDate();
        const days = Array(7).fill(0).map((e, i) => i++);
       
        times.map((time) => (
            rows.push(
               <tr key={time}>
                   <TimeCell>{time}</TimeCell>
                   {days.map((d) => (
                       <td
                           className="calendar__cell_type_week"
                           key={d}
                           onClick={() => this.onDateClick(dateFns.parse(day))}
                       >
                           {data.map((spending) => (
                               this.checkEventDate(spending.date, dateFns.addDays(startDate, d), time ) && (
                                   <Event event={spending} handleEvent={this.props.handleEvent} key={spending.id}>{spending.cost}</Event>
                               )
                           ))}
                       </td>
                       
                   ))}
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
                    prevClick={this.prevWeek}
                    nextClick={this.nextWeek}
                />
                <div className="flexContainer">
                    <table className="calendar_type_week">
                        <CalendarHeader weekDays={this.weekDays()} days={this.days()} leftFirstColumn="true"/>
                        <tbody>
                            {this.renderTimeBLocks()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default CalendarWeek
