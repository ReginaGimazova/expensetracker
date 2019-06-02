import React from 'react';
import {Link} from 'react-router-dom';
import './navigationSection.scss';

const NavigationSection = ({title, type, path}) => (
    <section className={`navigationSection ${type === 'left' ? 'navigationSection_type_left' : 'navigationSection_type_right'}`}>
        <Link to={path} className="navigationSection__title">{title.toUpperCase()}</Link>
    </section>
);

export default NavigationSection
