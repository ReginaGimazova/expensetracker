import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import AuthPage from "./pages/authPage";
import MainPage from "./pages/mainPage";
import CalendarPage from "./pages/calendarPage";

class App extends Component {
  render() {
    return (
        <HashRouter>
          <Switch>
            <Route path="/authentication" component={AuthPage} exact />
            <Route path="/" component={MainPage} exact />
            <Route path="/calendar" component={CalendarPage} exact />
          </Switch>
        </HashRouter>
    );
  }
}

export default App;
