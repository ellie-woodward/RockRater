import React, { Component, useEffect} from 'react';
import { useState } from 'react';
import ReactDOM from "react-dom";

const buttonStyle = {
  marginBottom: 5,
  marginTop: 2
};



class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      route: "/"
    };

    // const [email, setEmail] = useState([]);
    // useEffect (() => {
    //   fetch("http://127.0.0.1:4999/getUsers",{
    //     'methods': 'GET',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //   .then(resp => resp.json())
    //   .then(resp => console.log(resp))
    //   .catch(error => console.log(error))
    // },[]);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    const { email, password, route} = this.state;
    if (email == "Setter" && password == "passwordSetter"){
      this.setState({route: "/setter"});
    }
  }

  render() {
    return (
      <div className="loginform">
        <h1 className="title">Rock Rater</h1>
        <form style={buttonStyle} action={this.state.route} onSubmit={this.handleSubmit}>
        <div className="input-container ic1">
          <input className="input" type="text" value={this.state.email} onChange={this.handleEmailChange} placeholder="Email Address" required="required"/>
        </div>
        <div className="input-container ic2">
          <input className="input" type="password"  value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password" required="required"/>
        </div>
        <input className="submit" type="submit" value="Login"/>
        </form>
        <div className="input-container ic2">
          <form style={buttonStyle} action="/create">
            <div className="subtitle">Don't have an account?</div>
            <input className="submit"  type="submit" value="Create Account" />
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;
