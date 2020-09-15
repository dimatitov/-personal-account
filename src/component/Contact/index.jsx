import React, { useContext, useState } from 'react'
import ContactView from '../ContactView'
import Form from '../Form'
import Context from '../../context'
import contacts from '../../contacts'

import './Contact.css'
import { Link } from 'react-router-dom'

const Contact = () => {
  const { user } = useContext(Context)
  const [contactList, setContactList] = useState(contacts)

  const handleEdit = (id, name, phone) => {
    setContactList((contactList) =>
      contactList.map((contact) =>
        contact.id === id ? { ...contact, name, phone } : contact,
      ),
    )
  }

  const handleAddContact = (name, phone) => {
    setContactList(
      contactList.concat([
        {
          id: Date.now(),
          name,
          phone,
        },
      ]),
    )
  }

  const handleDelete = (id) => {
    setContactList((contactList) => contactList.filter((contact) => contact.id !== id))
  }

  return (
    <section className="contact-component">
      <div className="container">
        <div className="container__head">
          <div className="users-name">Welcome, {`${user.name} ${user.surname}`}</div>
          <Link type="submit" className="btn btn__contact" to="/login">
            Log out
          </Link>
        </div>
        <Form onAddContact={handleAddContact} />

        <ContactView
          contactList={contactList}
          onDeleteContact={handleDelete}
          onEditContact={handleEdit}
        />
      </div>
    </section>
  )
}

export default Contact
