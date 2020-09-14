import React from 'react'
import PropTypes from 'prop-types'

import ContactElement from '../ContactElement'

import './ContactView.css'


const ContactView = ({ contactList }) => {
    console.log('contactList', contactList)
   return (
      <section className="contact-container">
          {contactList.map(contact =>
              <ContactElement
                  key={contact.id}
                  phone={contact.phone}
                  name={contact.name}
              />)
          }

         <div className="line" />

      </section>
   )
}

ContactElement.propTypes = {
    contactList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired
    }))
}

export default ContactView


