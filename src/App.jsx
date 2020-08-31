import React from 'react';

import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"

import Login from './component/Login'
import Contact from './component/Contact'


import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/contact' component={Contact} />
        <Redirect from='/' to='/login'/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
