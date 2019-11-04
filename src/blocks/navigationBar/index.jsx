import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import NavigationBarItem from './__item';
import './navigationBar.css';

const NavigationBar = () => {
  return (
    <Menu>
      <NavigationBarItem path="/analysis">Expense analysis</NavigationBarItem>
      <NavigationBarItem path="/history">Expense history</NavigationBarItem>
      <NavigationBarItem path="/income">Income</NavigationBarItem>
      <NavigationBarItem path="/okToSpend">Ok to spend</NavigationBarItem>
      <NavigationBarItem path="/expense">Add expenses</NavigationBarItem>
    </Menu>
  );
};

export default NavigationBar;
