import React, { useState } from 'react'
import PropTypes from 'prop-types'



import './Form.css'

const Form = ({ onAddContact }) => {

   const [name, setName] = useState('')
   const [phone, setPhone] = useState('')

   const handleSubmit = (event) => {
      event.preventDefault()

      if(name && phone) {
         onAddContact(name, phone)
         setPhone('')
         setName('')
      }
   }

   const handleChangeName = (event) => {
      let name = event.target.value
      setName(name)
   }

   const handleChangePhone = (event) => {
      let phone = event.target.value
      setPhone(phone)
   }

   return (
      <section>
         <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-container">
               <input
                   type="text"
                   placeholder="Name"
                   className="form-name"
                   value={name}
                   onChange={handleChangeName}
               />
               <input
                   type="text"
                   placeholder="Phone"
                   value={phone}
                   onChange={handleChangePhone}
               />
            </div>
            
            <button type="submit" className="form-btn">
               <i className="material-icons">add</i>
            </button>
         </form>

         
      </section>
   )
}

Form.propTypes = {
   onAddContact: PropTypes.func.isRequired
}

export default Form