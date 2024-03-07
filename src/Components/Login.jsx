import React from 'react';
import  styles from "./Login.module.css"
export default function Login() {
  function validate() {
    const password = document.getElementById('password').value;
    if (password.length <= 3 || password.length > 25) {
      document.getElementById('ems').innerHTML = "Password should be 4 to 25 characters";
      return false;
    }
  }

  return (
    <div className="login" style={{marginBottom:"10%"}}> 
      
      <div className="img">
        <img src="img/img33.png"  style ={{marginLeft:"15%",width:"30%" ,marginTop:"5%"}}alt="" />
      </div>
      <div className="section1">
        <div className={styles.container} style={{marginTop:"-25%",marginLeft:"60%"}}>
          <form action="" method="">
            <h1 style={{marginBottom:"30px"}}> Login Form</h1>
            <label htmlFor="email">Email Address:</label><br />
            <input type="email" id="email" name="email" placeholder="Your email.." required /><br />
            <label htmlFor="password">Password</label><br />
            <input type="password" id="password" name="password" placeholder="Enter password" required /><br />
            <span id='ems'></span><br /><br />
            <input type="submit" value="Login" name='submit' id="login" onClick={validate} />
          </form>
        </div>
      </div>
    </div>
  );
}
