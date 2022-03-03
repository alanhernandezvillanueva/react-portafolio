import React, { useState } from 'react';
import './style.css'



function ContactForm() {
    const [formState, setFormState] = useState({name:'', email:'', message: ''});
    const { name, email, message } = formState;
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
      }
      
      console.log(formState);


    return (
        <section>
          <h1 className="contactForm">Reach Out</h1>
          <form id="contact-form">
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" defaultValue={name} onChange={handleChange} name="name" />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" defaultValue={email} name="email" />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" defaultValue={message} rows="5"  />
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
        );
    // JSX
    }
    
    export default ContactForm;