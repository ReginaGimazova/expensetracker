import React from 'react';
import Grid from '../grid';
import './mainContent.css';
import image from '../../static/images/rectangle.jpg';

const MainContent = () => {
  return (
    <div className="gridContainer">
      <Grid column="1" row="1">
        <p className="text">
          <h2>
            Hello! I am <span className="text_yellow">Expense Tracker! </span>
          </h2>
          <h3>I help save money and spend wisely :)</h3>
        </p>
      </Grid>
      <Grid column="0.5" row="1">
        <img className="image_gray" alt="gray rectangle" src={image} />
      </Grid>
      <Grid column="0.25" row="0.5">
        <img className="image_gray" alt="gray rectangle" src={image} />
      </Grid>
      <Grid column="0.25" row="0.5">
        <img className="image_gray" alt="gray rectangle" src={image} />
      </Grid>
      <Grid column="0.5" row="0.5">
        <img className="image_gray" alt="gray rectangle" src={image} />
      </Grid>
    </div>
  );
};

export default MainContent;
