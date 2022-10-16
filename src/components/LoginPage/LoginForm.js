import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import styles from '../../App.css';
import { Nav, NavItem } from 'react-bootstrap';


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
  // register = useForm();
  // handleSubmit = useForm();

  handleFormSubmit(e) {
    e.preventDefault();
    console.log(e)
    console.log("FORM SUBMIT!");

  }

  render() {
    return (
      <div style={divStyle}>
        <Panel style={panelStyle}>
          <h1 className="title">Rock Rater</h1>
          <Form horizontal className="LoginForm" id="loginForm">
            <FormGroup controlId="formEmail">
              <FormControl type="email" placeholder="Email Address" />
            </FormGroup>
            <FormGroup controlId="formPassword">
              <FormControl type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup style={buttonStyle} controlId="formSubmit" >
              <Button bsStyle="primary" type="submit" onClick={this.handleFormSubmit}>
                Login
              </Button>
            </FormGroup>
            <FormGroup style={buttonStyle} controlId="formSubmit">
              <Nav>
                <NavItem href="/create">Create Account</NavItem>
              </Nav>
            </FormGroup>
          </Form>
        </Panel>
      </div>
    )
  }
}

export default LoginForm;
