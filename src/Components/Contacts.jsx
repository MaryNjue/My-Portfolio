import React from 'react'
import './Contacts.css'

const Contacts = () => {
  return (
    <section id ="contact">
        <h1 className="contactTittle">Contact Me</h1>
        <span className="ContactDesc">Please fill out this form to discuss any work opportunities</span>
        <form action="" className="contactform">
            <input type="text" className="name" placeholder='Your name' />
            <input type="text" className="email" placeholder='Your Email'/>
            <textarea className='msg' name="message" rows="5" placeholder='Your message'></textarea>
            <button type='submit' value='send' className="submitbtn">Submit</button>
            <div className="links">
                <img src="" alt="" className="links" />
                <img src="" alt="" className="links" />
                <img src="" alt="" className="links" />
                <img src="" alt="" className="links" />
            </div>
        </form>
    </section>
  )
}

export default Contacts
