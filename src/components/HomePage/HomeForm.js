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


class HomeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: ''
    };
    this.handleRouteChange = this.handleRouteChange.bind(this);
  }

  handleRouteChange(event) {
    this.setState({route: event.target.value});
  }

  handleSubmit(event) {
    // event.preventDefault();
  }
  render() {
    return (
    <div className="homeform">
      <h1 className="title">Home</h1>
      <div className="input-container ic1">
        <form style={buttonStyle} action="/create" onSubmit={this.handleSubmit}>
          <div className="input-container ic1">
            <input className="input" type="text" value={this.state.route} onChange={this.handleRouteChange} placeholder="Route Code"/>
          </div>
        </form>
        <div className="input-container ic2">
          <form style={buttonStyle} action="/create">
            <input className="submit"  type="submit" value="Go to Route Page" />
          </form>
        </div>
      </div>
    </div>
    );
  }
}

export default HomeForm;