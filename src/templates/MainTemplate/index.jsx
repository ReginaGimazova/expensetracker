import React from 'react';
import './MainTemplate.css';
import Header from '../../blocks/header';
import Footer from '../../blocks/footer';

const MainTemplate = ({ children }) => {
  return (
    <div className="template">
      <Header />
      <main className="template__content">{children}</main>
      <Footer />
    </div>
  );
};

export default MainTemplate;
