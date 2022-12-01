import React, { Component} from 'react';
// import { useState, useEffect } from 'react';
// import ReactDOM from "react-dom";

const buttonStyle = {
  marginBottom: 5,
  marginTop: 2
};
const curUser = [];

function handleData(data){
  for (let i = 0; i <= 100; i++) {
    if (data[i] != null){
      curUser.push([data[i].email, data[i].password]);
    }
  }
}


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      route: "/home"
    };

    const data =  fetch("http://127.0.0.1:4999/getUsers",{
      'methods': 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    },[]);
    const array = data.then(response => response.json());
    array.then(success => handleData(success));

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleResponseChange(event) {
    this.setState({response: event.target.value});
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    const { email, password, route} = this.state;
    if (email === "Setter" && password === "passwordSetter"){
      this.setState({route: "/setter"});
    }
    else{
      const status = "invalid";
      for (let i = 0; i < curUser.length; i++) {
        if (curUser[i][0] === email && curUser[i][1] === password){
          status = "sucess";
          break;
        }
        else{
          console.log( curUser[i][0]);
        }
      }
      if (status === "invalid"){
        alert("Email or Password is incorrect. Please try again!");
        this.setState({route: "/"});
        event.preventDefault();
      }
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
