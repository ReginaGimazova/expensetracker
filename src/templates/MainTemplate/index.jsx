import React from "react";
import "./MainTemplate.css";
import Header from "../../blocks/header";

const MainTemplate = ({ children }) => (
  <div className="template">
    <Header />
    <div className="template__content">
        {children}
    </div>
  </div>
);

export default MainTemplate;
