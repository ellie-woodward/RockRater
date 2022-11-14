import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';
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

class RouteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeName: '',
      setter: '',
      grade: '',
      number: '',
      color: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSetterChange = this.handleSetterChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleSetterChange(event) {
    this.setState({setter: event.target.value});
  }

  handleGradeChange(event) {
    this.setState({grade: event.target.value});
  }

  handleNumberChange(event) {
    this.setState({number: event.target.value});
  }
  handleColorChange(event) {
    this.setState({color: event.target.value});
  }

  handleSubmit(event) {
    // event.preventDefault();
  }

  render() {
    return (
      <div className="setterform">
        <h1 className="title">Rock Rater</h1>
        <form style={buttonStyle} action="/" onSubmit={this.handleSubmit}>
        <div className="input-container ic1">
           <input className="input" type="text" value={this.state.routeName} onChange={this.handleRouteNameChange} placeholder="Route Name"/>
        </div>
        <div className="input-container ic2">
          <input className="input" type="text"  value={this.state.setter} onChange={this.handleSetterChange} placeholder="Route Setter's Name"/>
        </div>
        <div className="input-container ic2">
          <input className="input" type="text"  value={this.state.grade} onChange={this.handleGradeChange} placeholder="Route Grade"/>
        </div>
        <div className="input-container ic2">
          <input className="input" type="text"  value={this.state.number} onChange={this.handleNumberChange} placeholder="Belay Number"/>
        </div>
        <div className="input-container ic2">
          <input className="input" type="text"  value={this.state.color} onChange={this.handleColorChange} placeholder="Route Color"/>
        </div>
        </form>
        <form action="/setter" >
          <input className="submit" type="submit" value="Create Route"/>
        </form>
      </div>
    )
  }
}

export default RouteForm;
