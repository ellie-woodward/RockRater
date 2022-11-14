import React, { Component } from 'react';
// import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
// import styles from '../../App.css';
// import { Nav, NavItem } from 'react-bootstrap';


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: -100
};

const panelStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  width: 500,
  alignItems: 'center',
  marginTop: -100
};

const buttonStyle = {
  marginBottom: 5,
  marginTop: 2
};

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      movements: '',
      wall: '',
      hold: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmChange = this.handlePasswordConfirmChange.bind(this);
    this.handleMovementsChange = this.handleMovementsChange.bind(this);
    this.handleWallChange = this.handleWallChange.bind(this);
    this.handleHoldChange = this.handleHoldChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  handlePasswordConfirmChange(event) {
    this.setState({passwordConfirm: event.target.value});
  }
  handleMovementsChange(event) {
    this.setState({movements: event.target.value});
  }
  handleWallChange(event) {
    this.setState({wall: event.target.value});
  }
  handleHoldChange(event) {
    this.setState({hold: event.target.value});
  }

  handleSubmit(event) {
    const { password, passwordConfirm, email, name, movements, wall, hold } = this.state;
    if (password !== passwordConfirm) {
      alert("Passwords don't match");
      event.preventDefault();
  } else {
    // alert(email + " " + password + " " + name + " " + movements + " " + wall + " " + hold);
  }
  }

  render() {
    return (
    // <div style={panelStyle}>
      // <panel style={panelStyle}>
        <div className="form">
          <form action="/create" method='POST' onSubmit={this.handleSubmit}>
            <h1 className="title">Rock Rater</h1>
            <div className="subtitle">Let's create your account!</div>
            <div className="input-container ic1">
              <input className="input" type="text" value={this.state.name} onChange={this.handleNameChange} name="name" placeholder="Name"/>
            </div>
            <div className="input-container ic1">
              <input className="input" type="text" value={this.state.email} onChange={this.handleEmailChange} name="email" placeholder="Email Address"/>
            </div>
            <div className="input-container ic2">
              <input className="input" type="password"  value={this.state.password} onChange={this.handlePasswordChange} name="password" placeholder="Password"/>
            </div>
            <div className="input-container ic2">
              <input className="input" type="password"  value={this.state.passwordConfirm} onChange={this.handlePasswordConfirmChange} placeholder="Confirm Password"/>
            </div>
            <div className="input-container ic2">
            <div className="subtitle">Choose your prefered climbing movements:</div>
              <select className="input" formControlName="climbingMovements" name="movements" value={this.state.movements} onChange={this.handleMovementsChange}>
                  <option >Dynamic</option>
                  <option >Flexible</option>
                  <option >Stemmy/Pressy</option>
                  <option >Powerful</option>
                  <option >Don't know</option>
              </select>
            </div>
            <div className="input-container ic2">
            <div className="subtitle">Choose your prefered wall type</div>
              <select className="input" class="custom-select" formControlName="wall" name="wall" value={this.state.wall} onChange={this.handleWallChange}>
                  <option >Slab</option>
                  <option >Flat</option>
                  <option >Overhang</option>
                  <option >Don't know</option>
              </select>
            </div>
            <div className="input-container ic2">
            <div className="subtitle">Choose your prefered climbing hold style</div>
              <select className="input" class="custom-select" formControlName="hold" name="hold" value={this.state.hold} onChange={this.handleHoldChange}>
                  <option >Crimp</option>
                  <option >Sloper</option>
                  <option >Pinch</option>
                  <option >Pocket/Mono</option>
                  <option >Edge</option>
                  <option >Undercling</option>
                  <option >Crack</option>
                  <option >Don't know</option>
              </select>
            </div>
            <input className="submit" type="submit" value="Create Account" />
          </form>
        </div>
      // </panel>
    // {/* </div> */}
    );
  }
}

export default CreateForm;
