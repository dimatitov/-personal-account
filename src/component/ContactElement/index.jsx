import React from 'react'
import PropTypes from 'prop-types'

import './ContactElement.css'


const ContactElement = ({ name, phone }) => {
   return (
      <section>
         <div className="contact">
            <div className="contact__content">
               {name}
               <button className="edit">
                  <i className="material-icons">create</i>
               </button>
            </div>

            <div className="contact__content">
               {phone}
               <button className="edit">
                  <i className="material-icons">create</i>
               </button>
            </div>

            <button className="delete">
               <i className="material-icons">clear</i>
            </button>
         </div>
      </section>
   )
}

ContactElement.propTypes = {
   name: PropTypes.string.isRequired,
   phone: PropTypes.number.isRequired
}

export default ContactElement