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
      reviewTrends: [],
      sentimentData: {},
      documentEmotion: {
        joy: 0,
        anger: 0,
        sadness: 0,
        fear: 0,
        disgust: 0
      },
      sentiment: {},
      keywords: [],
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
    fetch("http://localhost:5000/insights/", {
      method: "POST",
      body: this.state.reviewText
    })
      .then(response => response.json())
      // eventually split data into watson analysis and array of reviews + time object
      .then(data => 
        {
          console.log(data)
          this.setState({
          reviewTrends: data.reviewTrends,
          sentimentData: data.sentimentData,
          documentEmotion: data.sentimentData.emotion.document.emotion,
          sentiment: data.sentimentData.sentiment.document,
          keywords: data.sentimentData.keywords

          // for real data (so far)
          // reviewTrends: data.reviewTrends,
          // sentimentData: data,
          // documentEmotion: data.emotion.document.emotion,
          // sentiment: data.sentiment.document,
          // keywords: data.keywords
        })}
        )
      .catch(err => console.log(err));
  }

  scaleToOneHundred(num) {
    // assume num is on a scale from -1 to 1
    return ((num + 1) * 50);
  }

  render() {
    console.log(this.state.documentEmotion.joy*100)
    return (
      <div className="MainPage">
        {/* <div className="container-fluid "> */}
          <div className="jumbotron"></div>
          <form>
            <div className="form-group">
              <textarea className="form-control" onChange={this.handleChange} id="reviewText" rows="6" placeholder="Enter review text here..."></textarea>
            </div>
          </form>
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Analyze!</button>

          <p> {JSON.stringify(this.state.reviewTrends)} </p>
          <p> {JSON.stringify(this.state.sentimentData)} </p>
          <p> {this.state.sentiment.score} &nbsp; {this.state.sentiment.label} </p>

          <div className="container-fluid">
            <div className="row">
              <ScatterPlot data={this.state.reviewTrends}></ScatterPlot>
            </div>
            <div className="row">
              <div className="col flex-fill" style={divStyle}>
                <ProgressBar name={"Joy"} value={this.state.documentEmotion.joy*100}/>
                <ProgressBar name={"Anger"} value={this.state.documentEmotion.anger*100}/>
                <ProgressBar name={"Sadness"} value={this.state.documentEmotion.sadness*100}/>
                <ProgressBar name={"Fear"} value={this.state.documentEmotion.fear*100}/>
                <ProgressBar name={"Disgust"} value={this.state.documentEmotion.disgust*100}/>
              </div>
              <div className="col flex-fill" style={divStyle}>
                {this.state.keywords.map((keyword, i) => (
                  <div key={i}>
                    <ProgressBar name={keyword.text} value={this.scaleToOneHundred(keyword.sentiment.score)}/>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <BarGraph data={this.state.data} svgWidth={this.state.svgWidth} svgHeight={this.state.svgHeight} /> */}
          {/* <LineGraph data={this.state.reviewTrends}></LineGraph> */}
        </div>
      // </div>
    );
  }
}

export default MainPage;
