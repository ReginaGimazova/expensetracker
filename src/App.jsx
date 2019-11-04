import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import config from './config/routes';
import ThemeProvider from './context/ThemeContext/ThemeProvider';
import AuthPage from './pages/authPage';
import MainPage from './pages/mainPage';
import CalendarPage from './pages/historyPage';
import ExpensePage from './pages/expensesPage';
import RegistrationPage from './pages/registrationPage';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route path={config.login} component={AuthPage} exact />
          <Route path={config.joinUs} component={RegistrationPage} exact />
          <Route path={config.home} component={MainPage} exact />
          <Route path={config.history} component={CalendarPage} exact />
          <Route path={config.expenses} component={ExpensePage} exact />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
