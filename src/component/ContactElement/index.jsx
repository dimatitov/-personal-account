import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'

import './ContactElement.css'


const ContactElement = ({ name, phone, id, onDelete, onEdit }) => {
   const [isEditMode, setIsEditMode] = useState(false)
   const [nameField, setNameField] = useState(name)
   const [phoneField, setPhoneField] = useState(phone)
   const firstInputElement = useRef(null)

   const toggleMode = () => {
      setIsEditMode(isEditMode => !isEditMode)
      if(!isEditMode) {
         firstInputElement.current.disabled=false
         firstInputElement.current.focus()
      }
   }

   const handleSave = () => {
      onEdit(id, nameField, phoneField)
      toggleMode()
   }

   return (
      <section>
         <div className="contact">
            <div className="contact-text-and-edit">
               <div className="contact-text">
                  <input
                      value={nameField}
                      disabled={!isEditMode}
                      ref={firstInputElement}
                      onChange={(event) =>
                          setNameField(event.target.value)}
                  />
                  <input
                      value={phoneField}
                      disabled={!isEditMode}
                      onChange={(event) =>
                          setPhoneField(event.target.value)}
                  />
               </div>

               <button className="edit" onClick={isEditMode ? handleSave : toggleMode}>
                  <i className="material-icons">{isEditMode ? "save" : "create"}</i>
               </button>
            </div>

            <button className="delete" onClick={() => onDelete(id)}>
               <i className="material-icons">clear</i>
            </button>
         </div>
      </section>
   )
}

ContactElement.propTypes = {
   name: PropTypes.string.isRequired,
   phone: PropTypes.number.isRequired,
   id: PropTypes.number.isRequired,
   onDelete: PropTypes.func.isRequired,
   onEdit: PropTypes.func.isRequired
}

export default ContactElement