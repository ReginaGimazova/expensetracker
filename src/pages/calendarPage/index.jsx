import React, {Component} from 'react';
import {Tabs, TabPanel, TabList, Tab} from 'react-tabs';
import CalendarWeek from '../../blocks/calendar/_type/week';
import CalendarDay from '../../blocks/calendar/_type/day';
import CalendarMonth from '../../blocks/calendar/_type/month';
import MainTemplate from "../../templates/MainTemplate";
import data from "../../data/spending";
import "../../stylesheets/main.css"

class CalendarPage extends Component {
    render() {
        return (
            <MainTemplate>
                <div className="calendarPageContainer">
                    <Tabs>
                        <TabList>
                            <Tab>
                                MONTH
                            </Tab>
                            <Tab>
                                WEEK
                            </Tab>
                            <Tab>
                                DAY
                            </Tab>
                        </TabList>
                        <TabPanel>
                            <CalendarMonth data={data} />
                        </TabPanel>
                        <TabPanel>
                            <CalendarWeek data={data}/>
                        </TabPanel>
                        <TabPanel>
                            <CalendarDay data={data}/>
                        </TabPanel>
                    </Tabs>
                </div>
            </MainTemplate>
        )
    }
}

export default CalendarPage
