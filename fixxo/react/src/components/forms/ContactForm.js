import React from 'react'
import { useContactFormContext } from '../../contexts/ContactFormContext'

const ContactForm = () => {
  const {form, errors, onChangeHandler, onSubmitHandler } = useContactFormContext()

  return (
    <section className="contact-form">
        <div className="container">
            <h1>Come in Contact with Us</h1>
            <form onSubmit={onSubmitHandler} noValidate>
                <div className="contact-form-name">
                    <input id="name" type="text" placeholder="Your Name" value={form.name} onChange={onChangeHandler} />
                    <div className="error">{errors.name}</div>
                </div>
                <div className="contact-form-email">
                    <input id="email" type="email" placeholder="Your Mail" value={form.email} onChange={onChangeHandler} />
                    <div className="error">{errors.email}</div>
                </div>
                <div className="contact-form-comments">
                    <textarea id="comments" placeholder="Comments" value={form.comments} onChange={onChangeHandler}></textarea>
                    <div className="error">{errors.comments}</div>
                </div>
                
                <button className="btn-theme" type="submit">Post Comments</button>
            </form>
        </div>
    </section>
  )
}

export default ContactForm