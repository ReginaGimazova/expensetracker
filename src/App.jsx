import React, { Component } from "react";
import { Route, BrowserRouter, Switch, HashRouter } from "react-router-dom";
import MainPage from "./pages/mainPage";

class App extends Component {
  render() {
    return (
        <HashRouter>
          <Switch>
            <Route path="/" component={MainPage} exact />
          </Switch>
        </HashRouter>
    );
  }
}

export default App;
