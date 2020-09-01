import React from 'react';

import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom"

import Login from './component/Login/index'
import Contact from './component/Contact/index'
import Modal from './component/Modal/index';


import './App.css';


class App extends React.Component {
  render() {
    const { history } = this.props
    return (
      <div className="App">
        <Switch>
          <Route history={history} path='/login' component={Login} />
          <Route history={history} path='/contact' component={Contact} />
          <Route history={history} path='/modal' component={Modal}/>
          <Redirect from='/' to='/login'/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
