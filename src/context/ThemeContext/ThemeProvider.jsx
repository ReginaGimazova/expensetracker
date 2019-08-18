import React, { useReducer } from 'react';
import themes from '../../static/themes';
import reducer from '../../store/reducer';
import ThemeContext from '.';
import * as actionTypes from '../../store/actionTypes';

const ThemeProvider = ({ children }) => {
  const initialState = {
    theme: themes.light,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const changeTheme = theme => {
    dispatch({ type: actionTypes.SET_THEME, payload: theme });
  };

  return (
    <ThemeContext.Provider value={{ state, dispatch, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
