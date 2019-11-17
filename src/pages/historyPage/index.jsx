import React, { useState } from 'react';
import { Tabs, TabPanel, TabList, Tab } from 'react-tabs';
import CalendarWeek from '../../blocks/calendar/_type/_week';
import CalendarDay from '../../blocks/calendar/_type/_day';
import CalendarMonth from '../../blocks/calendar/_type/_month';
import HistoryList from '../../blocks/historyList';
import MainTemplate from '../../templates/MainTemplate';
import NavigationBar from '../../blocks/navigationBar';

import data from '../../data/spending';
import '../../static/styles/main.css';

const CalendarPage = () => {
  const [viewType, setViewType] = useState('calendar');
  return (
    <MainTemplate>
      <NavigationBar />
      {viewType === 'calendar' && (
        <div className="mainContentWrap  mainContentWrap_white">
          <Tabs>
            <TabList>
              <Tab>MONTH</Tab>
              <Tab>WEEK</Tab>
              <Tab>DAY</Tab>
            </TabList>
            <TabPanel>
              <CalendarMonth data={data} setViewType={setViewType} />
            </TabPanel>
            <TabPanel>
              <CalendarWeek data={data} setViewType={setViewType} />
            </TabPanel>
            <TabPanel>
              <CalendarDay data={data} setViewType={setViewType} />
            </TabPanel>
          </Tabs>
        </div>
      )}
      {viewType === 'list' && (
        <div className="mainContentWrap">
          <HistoryList setViewType={setViewType} />
        </div>
      )}
    </MainTemplate>
  );
};

export default CalendarPage;
