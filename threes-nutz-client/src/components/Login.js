import React, {Fragment, Component} from 'react';
import '../App.css';


function Login(props) {

  const handleClick = (event) => {
    event.preventDefault()
    let loginUserObj = {
      username: event.target.firstChild.nextSibling.value,
      password: event.target.firstChild.nextSibling.nextSibling.nextSibling.value

    }
    props.handleLoginSubmit(loginUserObj)
  }

  return (
    <div className="login-div">

      <form onSubmit={handleClick}>
        <label>Username</label>
        <input type="text" name="username"></input>
        <label>Password</label>
        <input type="text" name="password"></input>
        <input type="submit" value="Login"></input>
      </form>

    </div>
  );
}

export default Login;
