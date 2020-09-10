import React from 'react'
import ContactView from '../ContactView'
import Form from '../Form'

import './Contact.css'
import {Link} from "react-router-dom";

const Contact = () => {
   return (
      <section className="contact-component">
            <div className="container">
                <div className="container__head">
                    <div className="users-name">Welcome, Dima Titov</div>
                    <Link type="submit" className="btn btn__contact" to='/login'>Log out</Link>
                </div>
                <ContactView />
                <Form />
            </div>
      </section>
   )
}

export default Contact
