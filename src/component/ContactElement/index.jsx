import React from 'react'

import './ContactElement.css'


const ConactElement = () => {
   return (

      <section>
      
         <div className="contact">
            
            <div className="contact__content">
               Fedor
               <button className="edit">
                  <i className="material-icons">create</i>
               </button>
            </div>

            <div className="contact__content">
               8-800-963-87-88
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

export default ConactElement