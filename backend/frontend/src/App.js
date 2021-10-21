import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './components/layout2/Footer';
import GoFast from './components/layout2/GoFast';
import { Provider } from 'react-redux';

import './App.css';
import Save from './components/layout2/Save';
import Wallet from './components/layout2/Wallet';
import CreateOperator from './components/layout2/CreateOperator';
import SettingsExtra from './components/layout2/SettingsExtra';
import Settings from './components/layout2/Settings';
import UpdateOperator from './components/layout2/UpdateOperator';
import Camera from './components/layout2/Camera';
if(localStorage.jwtToken){
  
}


class App extends Component {
  render(){
    return (
        <Router>
          <div className="App">
            <Route exact path="/" component={Camera} />
            <Route exact path="/gofast" component={GoFast}/>
            <Route  exact path="/save" component={Save}/>
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/camera" component={Camera} />
            <Route exact path="/createoperator" component={CreateOperator} />
            <Route exact path="/settingsextra" component={SettingsExtra} />
            <Footer/>
          </div>
        </Router>
      );
  }
}

export default App;
