import React, {Fragment, Component} from 'react';
import '../App.css';
import Login from "../components/Login"
import Signup from "../components/Signup"

class LoginSignup extends Component {

  state = {
    signupIsClicked: false
  }

  handleClick = (event) => {
    console.log("clicked")
  }

  changeSignup = () => {
    this.setState({
      signupIsClicked: !this.state.signupIsClicked
    })
  }

  render() {
    return (
      <div className="login-div">

          <button onClick={this.changeSignup}>Sign Up!</button>
          {
            this.state.signupIsClicked
            ?
            <Signup handleSignupSubmit={this.props.handleSignupSubmit}/>
            :
            <Login handleLoginSubmit={this.props.handleLoginSubmit}/>

          }

      </div>
    );
  }
}

export default LoginSignup;
