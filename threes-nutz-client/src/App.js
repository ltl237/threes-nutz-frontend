import React, {Component, Fragment} from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Login from "./components/Login"
import Signup from "./components/Signup"
import LoginSignupContainer from "./containers/LoginSignupContainer"
import PostContainer from "./containers/PostContainer"
import NewPostForm from './components/NewPostForm'
import PostFilter from './components/PostFilter'


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
          alert(response.errors)
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
  }


  render(){
    // <NavBar currentUser={this.state.currentUser} logout={this.logout} />

    return (
      <div className="App">
          {
            this.state.currentUser ?

                <div className="navsl">
                    <p>Welcome to FaceNutz, {this.state.currentUser.username}! <small class="text-muted">(The best social network...)</small></p>

                    <div>
                      <button style={{"margin-right":"5px"}}>My Profile</button>
                      <button onClick={this.logout}>Logout</button>
                    </div>
                </div>

              :
              <div className="navsl"><p>Please Login or SignUp To Get Started...</p></div>
          }
        {
          this.state.currentUser ?
          <div className="container-me">

            <PostContainer />
            <NewPostForm />
          </div>

          :
          <LoginSignupContainer currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>
        }
      </div>
    );
  }
}

export default App;
