import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GoFast from "./components/layout/GoFast";
import Save from "./components/layout/Save";
import Wallet from "./components/layout/Wallet";
import CreateOperator from "./components/layout/CreateOperator";
import SettingsExtra from "./components/layout/SettingsExtra";
import Settings from "./components/layout/Settings";
import UpdateOperator from "./components/layout/UpdateOperator";
import Camera from "./components/layout/Camera";
import Dashboard from "./components/layout/Dashboard";
import Login from "./components/authentification/Login";
import Signup from "./components/authentification/Signup";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/gofast" component={GoFast} />
          <Route exact path="/wallet" component={Wallet} />
          <Route exact path="/save" component={Save} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/camera" component={Camera} />
          <Route exact path="/createoperator" component={CreateOperator} />
          <Route exact path="/settingsextra" component={SettingsExtra} />
          <Route exact path="/updateoperator" component={UpdateOperator} />
        </Router>
      </div>
    );
  }
}

export default App;
