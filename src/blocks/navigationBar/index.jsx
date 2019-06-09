import React from "react";
import NavigationBarSection from './__section';
import "./navigationBar.css";
import NavigationBarItem from './__item';

const NavigationBar = () => (
  <aside className="navigationBar">
    <NavigationBarSection>
        <NavigationBarItem path="/analysis" className="navigationBar__item">Expense analysis</NavigationBarItem>
        <NavigationBarItem path="/history" className="navigationBar__item">Expense history</NavigationBarItem>
        <NavigationBarItem path="/income" className="navigationBar__item">Income</NavigationBarItem>
        <NavigationBarItem path="/okToSpend" className="navigationBar__item">Ok to spend</NavigationBarItem>
        <NavigationBarItem path="/expense" className="navigationBar__item">Expense</NavigationBarItem>
    </NavigationBarSection>
  </aside>
);

export default NavigationBar;
