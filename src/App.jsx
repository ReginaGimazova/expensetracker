import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
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
          <Route path="/auth" component={AuthPage} exact />
          <Route path="/registration" component={RegistrationPage} exact />
          <Route path="/" component={MainPage} exact />
          <Route path="/history" component={CalendarPage} exact />
          <Route path="/expense" component={ExpensePage} exact />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
