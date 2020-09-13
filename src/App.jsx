import React, {useState} from 'react';

import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom"
import Context from "./context";

import Login from './component/Login/index'
import Contact from './component/Contact/index'
import Modal from './component/Modal/index';


import './App.css';


function App(props) {
  const [user, setUser] = useState({name: '', surname: ''})
  const { history } = props

  return (
    <div className="App">
      <Context.Provider value={{user, setUser}}>
        <Switch>
          <Route history={history} path='/login' component={Login} />
          <Route history={history} path='/contact' component={Contact} />
          <Route history={history} path='/modal' component={Modal}/>
          <Redirect from='/' to='/login'/>
        </Switch>
      </Context.Provider>
    </div>
  );
}

export default withRouter(App);
