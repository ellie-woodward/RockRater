import React, { Component } from 'react';

const curUsers = [];

function handleUserData(data){
  for (let i = 0; i <= 100; i++) {
    if (data[i] != null){
      curUsers.push(data[i].email);
    }
  }
}

function insertUser(body){
  console.log("here");
  console.log(body);
  return fetch("http://127.0.0.1:4999/addUsers",{
    'methods': 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
    }).then(resp => resp.json());
}

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

    const data =  fetch("http://127.0.0.1:4999/getUsers",{
      'methods': 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    },[]);
    const array = data.then(response => response.json());
    array.then(success => handleUserData(success));

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
    const { password, passwordConfirm, email, name, movements, hold, wall,  } = this.state;
    if (password !== passwordConfirm) {
      alert("Passwords don't match");
      event.preventDefault();
    }
    let status = "sucess"
    for (let i=0; i < curUsers.length; i++){
      if(curUsers[i] === email){
        status = "invalid";
      }
    }
    if (status === "invalid"){
      alert("A user with that email already exist.");
      event.preventDefault();
    }
    else{
      const result = insertUser({name, email, password, movements, wall, hold})
      console.log("here");
      console.log(result.then(resp => console.log(resp)));

    }
  }

  render() {
    return (
        <div className="form">
          <form action="/" onSubmit={this.handleSubmit}>
            <h1 className="title">Rock Rater</h1>
            <div className="subtitle">Let's create your account!</div>
            <div className="input-container ic1">
              <input className="input" type="text" value={this.state.name} onChange={this.handleNameChange} name="name" placeholder="Name" required="required"/>
            </div>
            <div className="input-container ic1">
              <input className="input" type="text" value={this.state.email} onChange={this.handleEmailChange} name="email" placeholder="Email Address" required="required"/>
            </div>
            <div className="input-container ic2">
              <input className="input" type="password"  value={this.state.password} onChange={this.handlePasswordChange} name="password" placeholder="Password" required="required"/>
            </div>
            <div className="input-container ic2">
              <input className="input" type="password"  value={this.state.passwordConfirm} onChange={this.handlePasswordConfirmChange} placeholder="Confirm Password" required="required"/>
            </div>
            <div className="input-container ic2">
            <div className="subtitle">Choose your prefered climbing movements:</div>
              <select className="input" name="movements" value={this.state.movements} onChange={this.handleMovementsChange} required="required">
                  <option >Dynamic</option>
                  <option >Flexible</option>
                  <option >Stemmy/Pressy</option>
                  <option >Powerful</option>
                  <option >Don't know</option>
              </select>
            </div>
            <div className="input-container ic2">
            <div className="subtitle">Choose your prefered wall type</div>
              <select className="input" name="wall" value={this.state.wall} onChange={this.handleWallChange} required="required">
                  <option >Slab</option>
                  <option >Flat</option>
                  <option >Overhang</option>
                  <option >Don't know</option>
              </select>
            </div>
            <div className="input-container ic2">
            <div className="subtitle">Choose your prefered climbing hold style</div>
              <select className="input" name="hold" value={this.state.hold} onChange={this.handleHoldChange} required="required">
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
    );
  }
}

export default CreateForm;
