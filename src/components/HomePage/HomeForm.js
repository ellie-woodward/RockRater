import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';


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


class HomeForm extends Component {

    handleFormSubmit(e) {
        e.preventDefault();
        console.log(e)
        console.log("FORM SUBMIT!");
    
      }
  render() {
    return (
    <div style={divStyle}>
        <Panel style={panelStyle}>
        <h1 className="title">Home</h1>
          <Form horizontal className="CreateForm" id="routeCode">
            <FormGroup controlId="formCode">
              <FormControl type="id" placeholder="Route Code" />
            </FormGroup>
            <FormGroup style={buttonStyle} controlId="formSubmit" >
              <Button bsStyle="primary" type="submit" onClick={this.handleFormSubmit}>
                Go to Route Page
              </Button>
            </FormGroup>
          </Form>
        </Panel>
    </div>
    );
  }
}

export default HomeForm;