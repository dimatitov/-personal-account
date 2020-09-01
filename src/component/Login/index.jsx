import React, { useState } from 'react'
import { Link } from 'react-router-dom'



import './Login.css'

function Login() {

      return (
         <main className="App-header">
            <h1 className="App-header__title">You need to log in</h1>
            <Link className="btn" to='/modal'>Log in</Link>
         </main>
      )
   
}

export default Login