import React from 'react'
import ContactView from '../ContactView'
import Form from '../Form'

import './Contact.css'

const Contact = () => {
   return (
      <section className="contact-component">
         <div className="container">
            <div className="users-name">Welcome, Dima Titov</div>
            <ContactView />
            <Form />
         </div>
      </section>
   )
}

export default Contact
