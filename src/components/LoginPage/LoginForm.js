import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import styles from '../../App.css';


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: -100
};

const panelStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  border: 0,
  paddingLeft: 20,
  paddingRight: 20,
  width: 500,
};

const buttonStyle = {
  marginBottom: 5,
  marginTop: 2
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''

    };

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
    // event.preventDefault();
  }

  render() {
    return (
      <div className="loginform">
        <h1 className="title">Rock Rater</h1>
        <form style={buttonStyle} action="/" onSubmit={this.handleSubmit}>
        <div className="input-container ic1">
          <input className="input" type="text" value={this.state.email} onChange={this.handleEmailChange} placeholder="Email Address"/>
        </div>
        <div className="input-container ic2">
          <input className="input" type="password"  value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password"/>
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
