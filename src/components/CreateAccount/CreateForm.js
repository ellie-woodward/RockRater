import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
// import styles from '../../App.css';
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


class CreateForm extends Component {

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
          <Form horizontal className="CreateForm" id="createForm">
            <FormGroup controlId="formName">
              <FormControl type="name" placeholder="Full Name" />
            </FormGroup>
            <FormGroup controlId="formEmail">
              <FormControl type="email" placeholder="Email Address" />
            </FormGroup>
            <FormGroup controlId="formPassword">
              <FormControl type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup controlId="formPasswordConfirm">
              <FormControl type="password" name="confirm" placeholder="Confirm Password" />
            </FormGroup>
            <h2 className="headers">Choose your prefered climbing movements:</h2>
            <p className="subHeaders">Ctrl click to select multiple</p>
            <FormGroup controlId="climbingMovements">
                <select formControlName="climbingMovements" multiple="true">
                    
                    <option >Dynamic</option>
                    <option >Flexible</option>
                    <option >Stemmy/Pressy</option>
                    <option >Powerful</option>
                    <option >Don't know</option>
                </select>
            </FormGroup>
            <FormGroup controlId="climbingWall">
                <select class="custom-select" formControlName="Wall">
                    <option value=""> Choose your prefered wall type </option>
                    <option >Slab</option>
                    <option >Flat</option>
                    <option >Overhang</option>
                    <option >Don't know</option>
                </select>
            </FormGroup>
            <FormGroup controlId="climbingWall">
                <select class="custom-select" formControlName="Wall">
                    <option value=""> Choose your prefered climbing hold style</option>
                    <option >Crimp</option>
                    <option >Sloper</option>
                    <option >Pinch</option>
                    <option >Pocket/Mono</option>
                    <option >Edge</option>
                    <option >Undercling</option>
                    <option >Crack</option>
                    <option >Don't know</option>
                </select>
            </FormGroup>
            <FormGroup style={buttonStyle} controlId="formSubmit" >
              <Button bsStyle="primary" type="submit" onClick={this.handleFormSubmit}>
                Create Account
              </Button>
            </FormGroup>
          </Form>
        </Panel>
    </div>
    );
  }
}

export default CreateForm;
