import React from 'react';
import  a from './Signup.module.css'; // Import your CSS file

import 'bootstrap/dist/css/bootstrap.min.css'; 
export default function SignUp() {
  
  function validate() {
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;

    if (name === "") {
      document.getElementById('emsg').innerHTML = "Value can't be empty";
      return false;
    }

    if (name.length <= 3 || name.length > 25) {
      document.getElementById('emsg').innerHTML = "User name should be 4 to 25 characters";
      return false;
    }

    if (!isNaN(name)) {
      document.getElementById('emsg').innerHTML = "Name can't be numeric";
      return false;
    }

    if (password.length <= 3 || password.length > 25) {
      document.getElementById('ems').innerHTML = "Password should be 4 to 25 characters";
      return false;
    }
  }

  return (
    <div>
     
      <div className="img">
        <img  style ={{marginLeft:"10%",marginTop:"5%",width:"30%"}}src="img/img33.png" alt=""  className='img'/>
      </div>
     
      <div className={a.container}>
      
        <form action="" method="">
        <h1 style={{marginBottom:"30px"}}>SignUP form</h1>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name.." required />
          <span id="emsg"></span><br />
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Your email.." required /><br />
          <label htmlFor="date">DOB</label>
          <input type="date" id="date" name="date" placeholder="Your birth .." required /><br />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter password" required /><br />
          <span id="ems"></span><br /><br />
          <input type="submit" value="sign up" name="signup" id="signup" onClick={validate} />
        </form>
      </div>
    </div>
  );
}
