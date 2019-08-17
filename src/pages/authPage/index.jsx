import React from 'react';
import 'react-tabs/style/react-tabs.css';
import MainTemplate from '../../templates/MainTemplate';
import '../../static/main.css';
import Form from '../../blocks/form/_type/_auth';

const MainPage = () => (
  <MainTemplate>
    <div className="container">
      <Form />
    </div>
  </MainTemplate>
);

export default MainPage;
