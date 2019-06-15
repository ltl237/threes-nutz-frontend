import React from 'react';
import '../App.css';

class Signup extends React.Component {

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
    fetch("http://localhost:3000/api/v1/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify({
        user: this.state
      })
		})
		.then(res => res.json())
		.then((response) => {
			if (response.errors){
				alert(response.errors)
			} else {
				localStorage.setItem("token", response.jwt)
				this.props.setCurrentUser(response.user)
			}
		})
  }

  render() {
    return (
      <div className="signup-div">
        <h1> Sign Up here !</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Desired Username</label>
          <input onChange={this.handleChange} type="text" name="username"></input>
          <br/>
          <label>Desired Password</label>
          <input onChange={this.handleChange} type="password" name="password"></input>
          <br/>
          <input type="submit" value="Signup"></input>
        </form>
      </div>
    );
  }

}

export default Signup;
