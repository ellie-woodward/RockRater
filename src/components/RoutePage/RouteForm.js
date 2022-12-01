import React, { Component } from 'react';

const buttonStyle = {
  marginBottom: 5,
  marginTop: 2
};


class RouteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleCommentChange(event) {
    this.setState({comment: event.target.value});
  }

  handleSubmit(event) {
  }

  render() {
    return (
      <div className='routeform' id="respond"> 
      <h3 className="title">Grade this Route</h3>
      <h1 className='subtitle'>Route Name</h1>
        <h2 className='subtitle'>Comments go here</h2>
        <form style={buttonStyle} onSubmit={this.handleSubmit}>
          <div className="input-container ic2">
            <textarea name="comment" id="comment" value={this.state.comment} onChange={this.handleCommentChange} rows="3" tabIndex="4" required="required" placeholder="Write your Comment" ></textarea>
          </div>
          <input className="submit" type="submit" value="Post Review" />         
        </form>
      </div>
    )
  }
}

export default RouteForm;
