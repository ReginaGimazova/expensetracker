import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import ThemeContext from '../../context/ThemeContext';
import themes from '../../static/themes';
import './header.css';
import '../../static/main.css';
import Button from '../button';

const Header = () => {
  const { state, changeTheme } = useContext(ThemeContext);
  const { theme } = state;

  const toggleTheme = () => {
    if (theme === themes.light) {
      changeTheme(themes.dark);
    } else {
      changeTheme(themes.light);
    }
  };

  return (
    <header className={theme === themes.light ? 'header header_light' : 'header header_dark'}>
      <h1 className="header__title">EXPENSE TRACKER</h1>
      <Link to="/login">LOGIN</Link>
      <Button onclick={toggleTheme} className="button_switch">
        <FontAwesomeIcon icon={theme === themes.light ? faMoon : faSun} />
      </Button>
    </header>
  );
};

export default Header;
