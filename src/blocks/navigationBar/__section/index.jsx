import React from 'react';
import "./navigationBar__section.css";

const NavigationBarSection = ({children}) => (
    <section className="navigationBar__section">
        {children}
    </section>
);

export default NavigationBarSection
