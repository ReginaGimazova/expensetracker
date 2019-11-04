import React from 'react';
import './grid.css';

const gridColumnClasses = {
  1: 'grid__col_whole',
  0.5: 'grid__col_half',
  0.25: 'grid__col_quarter',
};

const gridRowClasses = {
  1: 'grid__row_whole',
  0.5: 'grid__row_half',
};

const Grid = ({ children, column = 'grid__col_whole', row = 'grid__row_whole' }) => (
  <div className={`${gridColumnClasses[column]} ${gridRowClasses[row]}`}>{children}</div>
);

export default Grid;
