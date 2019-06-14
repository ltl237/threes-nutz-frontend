import React, {Fragment, Component} from 'react';
import '../App.css';


function Signup(props) {

  const handleClick = (event) => {

    event.preventDefault()
    let loginUserObj = {
      username: event.target.firstChild.nextSibling.value,
      password: event.target.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.value

    }
    // debugger
    console.log(loginUserObj)
    props.handleSignupSubmit(loginUserObj)
  }

  return (
    <div className="signup-div">
      <h1> Sign Up here !</h1>
      <form onSubmit={handleClick}>
        <label>Desired Username</label>

        <input type="text" name="username"></input>
        <br></br>
        <label>Desired Password</label>
        <input type="text" name="password"></input>
        <br></br>
        <input type="submit" value="Signup"></input>
      </form>

    </div>
  );
}

export default Signup;
