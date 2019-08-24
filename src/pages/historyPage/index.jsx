import React from 'react';
import { Tabs, TabPanel, TabList, Tab } from 'react-tabs';
import CalendarWeek from '../../blocks/calendar/_type/_week';
import CalendarDay from '../../blocks/calendar/_type/_day';
import CalendarMonth from '../../blocks/calendar/_type/_month';
import MainTemplate from '../../templates/MainTemplate';
import NavigationBar from '../../blocks/navigationBar';
import data from '../../data/spending';
import '../../static/main.css';

const CalendarPage = () => (
  <MainTemplate>
    <NavigationBar />
    <div className="mainContentWrap  mainContentWrap_white">
      <Tabs>
        <TabList>
          <Tab>MONTH</Tab>
          <Tab>WEEK</Tab>
          <Tab>DAY</Tab>
        </TabList>
        <TabPanel>
          <CalendarMonth data={data} />
        </TabPanel>
        <TabPanel>
          <CalendarWeek data={data} />
        </TabPanel>
        <TabPanel>
          <CalendarDay data={data} />
        </TabPanel>
      </Tabs>
    </div>
  </MainTemplate>
);

export default CalendarPage;
