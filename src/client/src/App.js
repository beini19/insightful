import React, { Component } from 'react';
import './App.css';
import BarGraph from './graphs/BarGraph'
import LineGraph from './graphs/LineGraph'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [12, 5, 6, 6, 9, 10],
      svgWidth: 700,
      svgHeight: 300,
      reviewData: {}
    }

    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this);
  }
  sample_text = "Handpulled noodles are pretty good. Broth is tasty, chili is not that hot, but flavourful."
  "You can order tendon during the weekend. Portions are an insane size, even if you get the smallest one."
  "Great value for students, and this is evident from the amount of traffic this place gets."
  "Expect to wait 15-30 minutes during peak times.";

  handleSubmit = (event) => {
    console.log('The button was clicked.');
    fetch("http://localhost:5000/get_insights/", {
      method: "POST",
      body: this.sample_text
    })
      .then(response => response.json())
      .then(data => 
        {this.setState({reviewData: data})}
        )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
      <div className="container">
          <form>
          <div className="form-group">
            {/* <textarea className="form-control" type="text" value={this.state.value} id="reviewText" rows="6" placeholder="Enter review text here..."></textarea> */}
          </div>
          </form>
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Analyze!</button>
        <BarGraph data={this.state.data} svgWidth={this.state.svgWidth} svgHeight={this.state.svgHeight} />
        <LineGraph></LineGraph>
        </div>
      </div>
    );
  }
}

export default App;
