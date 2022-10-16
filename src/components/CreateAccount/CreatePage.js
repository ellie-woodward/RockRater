import React, { Component } from 'react';
import CreateForm from './CreateForm';

import './CreatePage.css';

class CreatePage extends Component {
  render() {
    return (
      <div className="CreatePage">
        <CreateForm />
      </div>
    );
  }
}

export default CreatePage;