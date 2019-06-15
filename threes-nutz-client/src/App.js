import React, {Component, Fragment} from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Login from "./components/Login"
import Signup from "./components/Signup"
import LoginSignupContainer from "./containers/LoginSignupContainer"

class App extends Component {

  state = {
    currentUser: null
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    console.log("TOKEN: ", token)
    if (token) {
      fetch("http://localhost:3000/api/v1/auto_login", {
        headers: {
          "Authorization": token
        }
      })
      .then(res => res.json())
      .then(response => {
        if (response.errors) {
          localStorage.removeItem("user_id")
          // alert(response.errors)
        } else {
          this.setState({
            currentUser: response
          })
        }
      })
    }
  }

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  logout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem("token")
    this.props.history.push("/login")
  }


  render(){
    // <NavBar currentUser={this.state.currentUser} logout={this.logout} />

    return (
      <div className="App">
        <div className="nav">
          {
            this.state.currentUser ?
              <Fragment>
                <div>{this.state.currentUser.username}</div>

              </Fragment>
              :
              <div><p>LOGO</p></div>
          }
        </div>

        <LoginSignupContainer currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>
        
      </div>
    );
  }
}

export default App;
