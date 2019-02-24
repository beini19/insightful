import React, { Component } from 'react';
import '../assets/styles/jumbotron.css';

class Jumbotron extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="jumbotron jumbotron-fluid">
        <div className="row">
          <div className="col">
            <h1 className="text display-1">Welcome to Insightful</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;