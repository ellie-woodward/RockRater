import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import CreatePage from './components/CreateAccount/CreatePage';
import SetterPage from './components/SetterPage/SetterPage';
import RoutePage from './components/RoutePage/RoutePage';
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

const Routes = () => (
  <RoutePage />
);

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/create" component={Create}/>
          <Route path="/setter" component={Setter}/>
          <Route path="/route" component={Routes}/>
        </div>
      </Router>
    );
  }
}

export default App;
