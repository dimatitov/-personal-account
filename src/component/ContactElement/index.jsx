import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'

import './ContactElement.css'


const ContactElement = ({ name, phone, id, onDelete }) => {
   const [isEditMode, setIsEditMode] = useState(false)
   const firstInputElement = useRef(null)
   console.log(firstInputElement.current)

   const handleChangeMode = () => {
      setIsEditMode(isEditMode => !isEditMode)
      if(!isEditMode) {
         firstInputElement.current.disabled=false
         firstInputElement.current.focus()
      }
   }


   return (
      <section>
         <div className="contact">
            <div className="contact-text-and-edit">
               <div className="contact-text">
                  <input className="contact__content" value={name} disabled={!isEditMode} ref={firstInputElement} />
                  <input className="contact__content" value={phone} disabled={!isEditMode} />
               </div>

               <button className="edit" onClick={handleChangeMode}>
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
   onDelete: PropTypes.func.isRequired
}

export default ContactElement