import React from 'react'
import pay from './Pay.module.css';
export default function Contact() {
  return (
  <div>
  <div  className={pay.full}>
    <section className={pay.banner}>
      {/* <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230822131732/images.png" alt="Welcome to our Contact Us page" /> */}
      <h1 style={{color:"white"}}>Make Instant Payment</h1>
      
    </section>
    <section className="contact-form">
      <div className='form-container'>
        <h2>Your Details</h2>
        <form action="" method="">
          <label htmlFor="name">Enter your Consumer number </label>
          <input type="number" id="name" name="name" />
          <br /><br />
          <span id="nm" />
          <label htmlFor="name">Mobile Number</label>
          <input type="number" id="name" name="name" />
          
          <label htmlFor="phone">E- mail Id </label>
          <input type="name" id="phone" name="contact" /><br />
          
          <span id="m" /><br />
          <button type="submit" name="submit" className="submit-button" >Submit</button>
        </form>
      </div>
    </section>
  </div></div>

  )
}
