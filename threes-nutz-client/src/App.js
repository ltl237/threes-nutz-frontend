import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Login from "./components/Login"
import Signup from "./components/Signup"

class App extends Component {

  state = {
    currentUser: null
  }

  // componentDidMount() {
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     fetch("http://localhost:3000/api/v1/auto_login", {
  //       headers: {
  //         "Authorization": token
  //       }
  //     })
  //     .then(res => res.json())
  //     .then(response => {
  //       if (response.errors) {
  //         localStorage.removeItem("user_id")
  //         alert(response.errors)
  //       } else {
  //         this.setState({
  //           currentUser: response
  //         })
  //       }
  //     })
  //   }
  // }

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
    console.log(this.state.currentUser);
    return (
      <div className="App">
        <h1>Home</h1>
        <NavBar currentUser={this.state.currentUser} logout={this.logout} />
        <Route path="/login" render={(routerProps) => {
							return <Login setCurrentUser={this.setCurrentUser} {...routerProps}/>
						}} />
        <Route path="/signup" render={(routerProps) => {
							return <Signup setCurrentUser={this.setCurrentUser} {...routerProps}/>
						}} />
      </div>
    );
  }
}

export default App;
