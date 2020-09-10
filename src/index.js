import React from 'react';
import ReactDOM from 'react-dom';

// import { createBrowserHistory } from 'history'
import { BrowserRouter } from 'react-router-dom'

import './index.css';

import App from './App';


// const history = createBrowserHistory()

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
),document.getElementById('root')
);

