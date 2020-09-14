import React from 'react'
import PropTypes from 'prop-types'

import ContactElement from '../ContactElement'

import './ContactView.css'


const ContactView = ({ contactList, onDeleteContact }) => {
    console.log('contactList', contactList)
   return (
      <section className="contact-container">
          <div className="line" />

          {contactList.sort((a, b) => a.name > b.name ? 1 : -1).map(contact =>
              <ContactElement
                  key={contact.id}
                  id={contact.id}
                  phone={contact.phone}
                  name={contact.name}
                  onDelete={onDeleteContact}
              />)
          }
      </section>
   )
}

ContactElement.propTypes = {
    contactList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }))
}

export default ContactView


