import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import Form from '../../blocks/form/_type/_registration';
import MainTemplate from '../../templates/MainTemplate';
import '../../static/main.css';

const RegistrationPage = () => {
  const { state } = useContext(ThemeContext);
  const { theme } = state;

  return (
    <MainTemplate>
      <Form theme={theme} />
    </MainTemplate>
  );
};

export default RegistrationPage;
