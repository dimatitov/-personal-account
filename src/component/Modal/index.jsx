import React from 'react'
import './Modal.css'

function Modal() {
   return (
      <section className="App-main">
         <div className="modal">
            <form className="modal-log">

               <div className="modal-log__content">
                  <label for="firstname">Name</label>
                  <input type="text" placeholder="Your name" id="firstname" />
               </div>
               
               <div className="modal-log__content"> 
                  <label for="lastname">Surname</label>
                  <input type="text" placeholder="Your surname" id="lastname" />
               </div>
      
               <button type="submit" className="btn">Log in</button>
            </form>
         </div>
      </section>
   )
}

export default Modal

