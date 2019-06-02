import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import MainPage from "./pages/mainPage";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" component={MainPage} exact />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
