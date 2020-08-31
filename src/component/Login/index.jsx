import React from 'react'

import Modal from '../Modal'

import './Login.css'

const Login = () => {
   return (
      <main className="App-header">
         <h1 className="App-header__title">You need to log in</h1>
         <button className="btn">Log in</button>
         <Modal />
      </main>
   )
}

export default Login