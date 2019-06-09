import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import AuthPage from "./pages/authPage";
import MainPage from "./pages/mainPage";
import CalendarPage from "./pages/historyPage";
import OkToSpendPage from "./pages/okToSpendPage";
import ExpensePage from "./pages/expensesPage";
import RegistrationPage from "./pages/registrationPage";

class App extends Component {
  render() {
    return (
        <HashRouter>
          <Switch>
            <Route path="/auth" component={AuthPage} exact />
            <Route path="/registration" component={RegistrationPage} exact/>
            <Route path="/" component={MainPage} exact />
            <Route path="/history" component={CalendarPage} exact />
            <Route path="/okToSpend" component={OkToSpendPage} exact />
            <Route path="/expense" component={ExpensePage} exact/>
          </Switch>
        </HashRouter>
    );
  }
}

export default App;
