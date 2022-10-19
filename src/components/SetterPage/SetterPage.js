import React, { Component } from 'react';
import SetterForm from './SetterForm';

import './SetterPage.css';

class SetterPage extends Component {
  render() {
    return (
      <div className="SetterPage">
        <SetterForm />
      </div>
    );
  }
}

export default SetterPage;