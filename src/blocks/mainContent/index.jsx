import React from 'react';
import './mainContent.css';
import '../../static/styles/grid.css';
import image from '../../static/images/rectangle.jpg';

const MainContent = () => {
  return (
    <div className="container">
      <section className="gridContainer">
        <div className="column-12">
          <p className="text">
            <h2>
              Hello! I am <span className="text_yellow">Expense Tracker! </span>
            </h2>
            <h3>I help you save money :)</h3>
          </p>
        </div>

        <div>
          <div className="column-6">
            <img className="image_gray" alt="gray rectangle" src={image} />
          </div>
          <div className="column-3">
            <img className="image_gray" alt="gray rectangle" src={image} />
          </div>
          <div className="column-3">
            <img className="image_gray" alt="gray rectangle" src={image} />
          </div>
        </div>
      </section>

      <section className="gridContainer gridContainer_type2">
        <img className="image_gray" alt="gray rectangle" src={image} />
        <img className="image_gray" alt="gray rectangle" src={image} />
        <img className="image_gray" alt="gray rectangle" src={image} />
        <img className="image_gray" alt="gray rectangle" src={image} />
        <img className="image_gray" alt="gray rectangle" src={image} />
        <img className="image_gray" alt="gray rectangle" src={image} />
      </section>

      <section className="gridContainer gridContainer_type3">
        <img className="image_gray" alt="gray rectangle" src={image} />
        <img className="image_gray" alt="gray rectangle" src={image} />
        <img className="image_gray" alt="gray rectangle" src={image} />
        <img className="image_gray" alt="gray rectangle" src={image} />
        <img className="image_gray" alt="gray rectangle" src={image} />
        <img className="image_gray" alt="gray rectangle" src={image} />
        <img className="image_gray" alt="gray rectangle" src={image} />
        <img className="image_gray" alt="gray rectangle" src={image} />
      </section>
    </div>
  );
};

export default MainContent;
