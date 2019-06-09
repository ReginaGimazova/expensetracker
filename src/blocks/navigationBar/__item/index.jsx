import React from 'react';
import {Link} from 'react-router-dom';
import "./navigationBar__item.css"

const NavigationBarItem = ({path, children}) => (
    <Link to={path} className="navigationBar__item">{children}</Link>
);

export default NavigationBarItem
