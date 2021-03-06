import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const userLogin = {
      email: this.state.email,
      password: this.state.password
    };
    axios.post("http://localhost:5000/api/login", userLogin).then(res => {
      console.log("Res", res.data);
      if (res.data.loginFailed) {
        toast.warn("Email or Password incorrect");
        return;
      } else if (res.data.email === "Email does not exist") {
        toast.warn("Email does not exist");
        return;
      } else if (res.data) {
        toast.success("Login Success!");
        // window.location.replace("/");
      }
    });
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div className='login'>
        <div className='login-container'>
          <img className='logo' src='/images/puck.png' alt='puck' />
          <h4 className='title'>
            Shinny Squad <br />
            Sign In
          </h4>
          <div>
            <a href='/auth/google'>
              <img
                className='google-login-button'
                src='/images/google-login-2.png'
                alt='login with google'
              />
            </a>
          </div>
          <div>
            <a href='/auth/facebook'>
              <img
                className='facebook-login-button'
                src='/images/facebook-login.png'
                alt='login with facebook'
              />
            </a>
          </div>
          <form onSubmit={this.handleOnSubmit} className='login-form'>
            <input
              onChange={this.handleOnChange}
              value={this.state.email}
              type='email'
              name='email'
              placeholder='Email'
            />
            <input
              onChange={this.handleOnChange}
              value={this.state.password}
              type='password'
              name='password'
              placeholder='Password'
            />
            <button className='login-button'>Sign In</button>
          </form>

          <div className='forgot-password'>Forgot Your Password?</div>
          <a href='/register' className='register'>
            Register here
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
