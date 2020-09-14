import React, {useContext, useState} from 'react'
import { useHistory } from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './Modal.css'
import Context from "../../context"


function Modal(){
    const { setUser } = useContext(Context)
    const history = useHistory()
    const { login } = useLogin()

    const handleSubmitForm = (values) => {
        setUser({name: values.firstName, surname: values.lastName})
        history.push('/contact')
        login()
    }


   return (
       <section className="App-main">
          <div className="modal">
              <Formik
                  initialValues={{
                      firstName: '',
                      lastName: ''
                  }}
                  validationSchema={Yup.object().shape({
                      firstName: Yup.string()
                          .min(2, 'Too Short!')
                          .max(10, 'Too Long!')
                          .required('Name is required'),
                      lastName: Yup.string()
                          .min(2, 'Too Short!')
                          .max(10, 'Too Long!')
                          .required('Surname is required'),
                  })}
                  onSubmit={handleSubmitForm}
              >

                  {({ values, handleChange }) => (
                      <Form className="modal-log">
                        <div className="modal-log__content">
                           <label htmlFor="firstName">Name</label>
                            <Field
                                name="firstName"
                                type="text"
                                value={values.firstName}
                                onChange={handleChange}
                                placeholder="Your name"
                                id="firstName"
                            />
                            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                        </div>

                        <div className="modal-log__content">
                           <label htmlFor="lastName">Surname</label>
                            <Field
                                name="lastName"
                                type="text"
                                value={values.lastName}
                                onChange={handleChange}
                                placeholder="Your surname"
                                id="lastName"
                            />
                            <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                        </div>

                        <button
                            type="submit"
                            className="btn"
                        >
                            Log in
                        </button>
                     </Form>
                )}
              </Formik>
          </div>
       </section>
   )
}

export default Modal

