import React from "react";
import MainTemplate from "../../templates/MainTemplate";
import "react-tabs/style/react-tabs.css";
import "../../stylesheets/main.css";
import Form from "../../blocks/form/_type/_auth";

const MainPage = () => (
  <MainTemplate>
    <div className="container">
      <Form />
    </div>
  </MainTemplate>
);

export default MainPage;
