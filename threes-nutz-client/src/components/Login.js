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
      console.log(response);
      console.log(this.state);
      if (response.errors) {
        alert(response.errors)
      } else {
        localStorage.setItem("token", response.jwt)
        this.props.setCurrentUser(response.user)
      }
    })
  }

  render() {
    return(
      <div className="login-div">
        <br/><br/><br/>
        <h1>Please Enter Your Login Details</h1>
        <form onSubmit={this.handleSubmit} className="form-style-9">
          <input onChange={this.handleChange} type="text" name="username" placeholder="username..."></input>
          <input onChange={this.handleChange} type="password" name="password" placeholder="password..."></input>
          <input type="submit" value="Login"></input>
        </form>
      </div>
    )
  }

}

export default Login;
