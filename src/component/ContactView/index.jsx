import React from 'react'

import ConactElement from '../ContactElement'

import './ContactView.css'


const ContactView = () => {
   return (
      <section className="contact-container">
         <ConactElement />
         <ConactElement />

         <div className="line"></div>

      </section>
   )
}

export default ContactView


