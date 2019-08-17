import React from 'react';
import MainTemplate from '../../templates/MainTemplate';
import NavigationBar from '../../blocks/navigationBar';
import ExpenseContent from '../../blocks/expenseContent';
import '../../static/main.css';

const expensePage = () => (
  <MainTemplate>
    <div className="container_flex container">
      <NavigationBar />
      <div className="contentWrap contentWrap_white">
        <ExpenseContent />
      </div>
    </div>
  </MainTemplate>
);

export default expensePage;
