import React from 'react';
import './Contact.modules.css';

export default function Contact() {
  function validate() {
    var name = document.getElementById('name').value;

    if (name === "") {
      document.getElementById('nm').innerHTML = "Value can't be empty";
      return false;
    }

    if (name.length <= 3 || name.length > 25) {
      document.getElementById('nm').innerHTML = "User name should be 4 to 25 characters";
      return false;
    }

    
    Alert();
    return true;
  }

  function Alert() {
    alert("Submitted successfully");
  }

  return (
    <div>
      <div className='full'>
        <section className="banner">
          <h1>Get in Touch With Us</h1>
          <p>We're here to answer any questions you may have.</p>
        </section>
        <section className="contact-form">
          <div className="form-container">
            <h2>Your Details</h2>
            <form action="" method="">
              <label htmlFor="name">Name: </label>
              <input type="text" id="name" name="name" style={{width:"100%"}} />
              <br /><br />
              <span id="nm" />
              <label htmlFor="email">Email: </label>
              <input type="email" id="email" name="email" style={{ width: "100%" }} />
              <span id="mail" />
              <label htmlFor="phone">Contact: </label>
              <input type="number" id="phone" name="contact" /><br />
              <span id="ph" />
              <label htmlFor="message">Message: </label>
              <textarea id="message" name="message" rows={4} defaultValue={""} /><br />
              <span id="m" /><br />
              <button type="button" name="submit" className="submit-button" onClick={validate}>Submit</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
