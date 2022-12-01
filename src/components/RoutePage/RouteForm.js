import React, { Component } from 'react';

const buttonStyle = {
  marginBottom: 5,
  marginTop: 2
};

let routeName = "";

const Comments = [];
function handleData(data){
  for (let i = 0; i <= 100; i++) {
    if (data[i] != null && data[i].routeName.toLowerCase() === routeName){
      Comments.push([data[i].userName, data[i].review]);
    }
  }
  console.log(Comments);
}

function myFunction(name) {
  alert(name);
}

function CommentsList(props) {
  return (
      <div>
           {Comments.map(comment => {
            return(
              <div>
                  <p className='subtitle'>{comment[0]} : {comment[1]}</p>
              </div>
            )
           })}
      </div>
  )
}


class RouteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };


    const windowName = window.location.pathname
    const removedRoute = windowName.slice(7, windowName.length);
    if (removedRoute.includes("%20")){
      routeName = removedRoute.replace("%20", " ");
    }
    else{
      routeName = removedRoute;
    }

    const data =  fetch("http://127.0.0.1:4999/getComments",{
      'methods': 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    },[]);
    const array = data.then(response => response.json());
    array.then(success => handleData(success));

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
      <h1 className='subtitle'>The route you are reviewing is {routeName}!</h1>
      <h3 className="titleTwo">Reviews</h3>
      <CommentsList/>
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
