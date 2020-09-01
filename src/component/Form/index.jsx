import React from 'react'

import './Form.css'

const From = () => {
   return (
      <section>
         <form className="contact-form">
            <div className="form-container">
               <input type="text" placeholder="Name" className="form-name"/>
               <input type="number" placeholder="Phone"/>
            </div>
            
            <button type="submit" className="form-btn">
               <i className="material-icons">add</i>
            </button>
         </form>

         
      </section>
   )
}

export default From