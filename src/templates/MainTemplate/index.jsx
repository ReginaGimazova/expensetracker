import React from "react";
import "./MainTemplate.css";
import Header from "../../blocks/header";

const MainTemplate = ({ children }) => (
  <div className="template">
    <Header />
    {children}
  </div>
);

export default MainTemplate;
