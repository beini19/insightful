import React, { Component } from 'react';
import BarGraph from './components/BarGraph'
import LineGraph from './components/LineGraph'
import ScatterPlot from './components/ScatterPlot'
import ProgressBar from './components/ProgressBar'

const divStyle = {
  height: "100px",
  width: "100px"
};

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [12, 5, 6, 6, 9, 10],
      scatterData: [[0, 3],[5, 13],[10, 22],[15, 36],[20, 48],[25, 59],[30, 77],[35, 85]],
      svgWidth: 700,
      svgHeight: 300,
      reviewText: "",
      reviewData: {}
    }
  }

  sampleText = "Handpulled noodles are pretty good. Broth is tasty, chili is not that hot, but flavourful."
  "You can order tendon during the weekend. Portions are an insane size, even if you get the smallest one."
  "Great value for students, and this is evident from the amount of traffic this place gets."
  "Expect to wait 15-30 minutes during peak times.";

  parseData = () => {

  }

  handleChange = (blob) => {
    this.setState({ reviewText: blob.target.value })
  }

  handleSubmit = (event) => {
    console.log('The button was clicked.');
    console.log(this.state.reviewText)
    fetch("http://localhost:5000/get_insights/", {
      method: "POST",
      body: this.state.reviewText
    })
      .then(response => response.json())
      // eventually split data into watson analysis and array of reviews + time object
      .then(data => 
        {this.setState({reviewData: data})}
        )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="MainPage">
        <div className="container-fluid ">
        <div className="jumbotron"></div>
          <form>
            <div className="form-group">
              <textarea className="form-control" onChange={this.handleChange} id="reviewText" rows="6" placeholder="Enter review text here..."></textarea>
            </div>
          </form>
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Analyze!</button>
          <p>{JSON.stringify(this.state.reviewData)}</p>
          {/* <div class="d-flex p-2 bg-light justify-content-center"> */}
            <ProgressBar></ProgressBar>
          {/* </div> */}
          <div class="d-flex p-2 justify-content-center">
            <ScatterPlot data={this.state.scatterData}></ScatterPlot>
          </div>
          <div class="d-flex p-2 justify-content-center">
            <ScatterPlot data={this.state.scatterData}></ScatterPlot>
          </div>
          <div class="d-flex p-2">
            <div className="row">
              <div className="col flex-fill" style={divStyle}></div>
              <div className="col flex-fill" style={divStyle}></div>
            </div>
          </div>
          <BarGraph data={this.state.data} svgWidth={this.state.svgWidth} svgHeight={this.state.svgHeight} />
          <LineGraph data={this.state.scatterData}></LineGraph>
        </div>
      </div>
    );
  }
}

export default MainPage;
