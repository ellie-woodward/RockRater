import React, { Component } from 'react';
import RouteForm from './RouteForm';

import './RoutePage.css';

class RoutePage extends Component {
  render() {
    return (
      <div className="RoutePage">
        <RouteForm />
      </div>
    );
  }
}

export default RoutePage;