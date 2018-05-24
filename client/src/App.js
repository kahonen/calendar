import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CalendarApp from "./pages/CalendarApp";

export default class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={CalendarApp} />
          <Route exact path="/events" component={CalendarApp} />
        </Switch>
      </Router>
    );
  }
}
 