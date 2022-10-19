import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import CreatePage from './components/CreateAccount/CreatePage';
import SetterPage from './components/SetterPage/SetterPage';
import './App.css';

const Home = () => (
  <HomePage />
);

const Login = () => (
  <LoginPage />
);

const Create = () => (
  <CreatePage />
);

const Setter = () => (
  <SetterPage />
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create}/>
          <Route path="/setter" component={Setter}/>
        </div>
      </Router>
    );
  }
}

export default App;
