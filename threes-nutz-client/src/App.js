import React, {Fragment, Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import LoginSignupContainer from "./containers/LoginSignupContainer"
const url = 'http://localhost:3001/api/v1/users'

class App extends Component {

  state = {
    userObjLoggedIn: {}
  }

  handleLoginSubmit = (userObj) => {
    this.setState({
      userObjLoggedIn: userObj
    })
  }

  handleSignupSubmit = (userObj) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: userObj.username,
          password: userObj.password
        }
      })
    })
    .then(res => res.json())
    .then(console.log)
  }

  render(){
    console.log(this.state.userObjLoggedIn)
    return (
      <div className="App">

        Hello World
        <LoginSignupContainer handleSignupSubmit={this.handleSignupSubmit} userObjLoggedIn={this.state.userObjLoggedIn} handleLoginSubmit={this.handleLoginSubmit}/>
      </div>
    );
  }
}

export default App;
