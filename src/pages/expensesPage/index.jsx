import React from 'react';
import MainTemplate from '../../templates/MainTemplate';
import NavigationBar from '../../blocks/navigationBar';
import ExpenseContent from '../../blocks/expenseContent';
import '../../static/main.css';

const expensePage = () => (
  <MainTemplate>
    <div className="container_flex">
      <NavigationBar />
      <div className="mainContentWrap  mainContentWrap _white">
        <ExpenseContent />
      </div>
    </div>
  </MainTemplate>
);

export default expensePage;
