import React, { Component } from 'react';
// import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
// import styles from '../../App.css';
// import routeMock from "../../mockData.js"

// const divStyle = {
//   display: 'flex',
//   alignItems: 'center',
//   marginTop: -100
// };

// const panelStyle = {
//   backgroundColor: 'rgba(255,255,255,0.5)',
//   border: 0,
//   paddingLeft: 20,
//   paddingRight: 20,
//   width: 500,
// };

const buttonStyle = {
  marginBottom: 5,
  marginTop: 2
};

const curRoutes = [];

function handleData(data){
  for (let i = 0; i <= 100; i++) {
    if (data[i] != null){
      curRoutes.push(data[i].routeName);
    }
  }
}

class HomeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: '',
      httpRoute: "/route"
    };

    const data =  fetch("http://127.0.0.1:4999/getRoutes",{
      'methods': 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    },[]);
    const array = data.then(response => response.json());
    array.then(success => handleData(success));

    this.handleRouteChange = this.handleRouteChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRouteChange(event) {
    this.setState({route: event.target.value});
  }

  handleSubmit(event) {
    const {route, httpRoute} = this.state;
    let status = "invalid";
    for (let i = 0; i < curRoutes.length; i++) {
      if (curRoutes[i].toLowerCase() === route.toLowerCase()){
        status = "sucess";
        break;
      }
      else{
        console.log( curRoutes[i]);
      }
    }
    if (status === "invalid"){
      alert("A route by that name does not exist. Please try again!");
      this.setState({httpRoute: "/home"});
      event.preventDefault();
    }
    else{
      this.setState({httpRoute: `/route/${route}`});
    }
  }
  render() {
    return (
    <div className="homeform">
      <h1 className="title">Home</h1>
      <div className="input-container ic1">
        <form style={buttonStyle}>
          <div className="input-container ic1">
            <input className="input" type="text" value={this.state.route} onChange={this.handleRouteChange} placeholder="Route Name"/>
          </div>
        </form>
        <div className="input-container ic2">
          <form style={buttonStyle} action={this.state.httpRoute} onSubmit={this.handleSubmit}>
            <input className="submit"  type="submit" value="Go to Route Page" />
          </form>
        </div>
      </div>
    </div>
    );
  }
}

export default HomeForm;