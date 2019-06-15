import React from 'react';
import '../App.css';


class Login extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
				"Accepts": "application/json"
      },
      body: JSON.stringify({
        user: this.state
      })
    })
    .then(res => res.json())
    .then(response => {
      if (response.errors) {
        console.log(response.errors)
      } else {
        localStorage.setItem("token", response.jwt)
        this.props.setCurrentUser(response.user)
        console.log("Login.js response: ", response)
      }
    })
  }

  render() {

    return(
      <div className="login-div">
        <br/><br/><br/>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input onChange={this.handleChange} type="text" name="username" placeholder="username..."></input>
          <br></br>
          <label>Password</label>
          <input onChange={this.handleChange} type="text" name="password" placeholder="password..."></input>
          <br></br>
          <input type="submit" value="Login"></input>
        </form>
      </div>
    )
  }

}

export default Login;
