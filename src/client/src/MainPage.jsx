import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';

import BarGraph from './components/BarGraph'
import LineGraph from './components/LineGraph'
import ScatterPlot from './components/ScatterPlot'
import ProgressBar from './components/ProgressBar'
import Slider from './components/Slider'
import Jumbotron from './components/Jumbotron'
import './assets/styles/mainPage.css'
import './assets/styles/all.css'
import './assets/styles/style.css'
import './assets/styles/responsive.css'

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

  handleChange = (blob) => {
    this.setState({ reviewText: blob.target.value })
  }

  handleSubmit = (event) => {
    fetch("http://localhost:5000/insights/", {
      method: "POST",
      body: this.state.reviewText
    })
      .then(response => response.json())
      // eventually split data into watson analysis and array of reviews + time object
      .then(data => {
        console.log(data)
        this.setState({
          reviewTrends: data.reviewTrends,
          sentimentData: data.sentimentData,
          documentEmotion: data.sentimentData.emotion.document.emotion,
          sentiment: data.sentimentData.sentiment.document,
          keywords: data.sentimentData.keywords
          // for real data
          // reviewTrends: data.reviewTrends,
          // sentimentData: data,
          // documentEmotion: data.emotion.document.emotion,
          // sentiment: data.sentiment.document,
          // keywords: data.keywords
        })
      })
      .catch(err => console.log(err));
  }

  scaleToOneHundred(num) {
    // num is on a scale from -1 to 1, scale num to a value between 0-100
    return ((num + 1) * 50);
  }

  render() {
    console.log(this.state.documentEmotion.joy*100)
    return (
      <div className="MainPage">
        <section className="section section-top section-full" id="header">
          <div className="bg-cover" style={{"background-color": "grey"}}></div>
          <div className="bg-overlay"></div>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-10 col-lg-7 ">
                <div className="banner-content">
                  <p className="text-white text-uppercase text-center text-xs">
                  </p>
                  <h1 className="text-white text-center mb-4 display-4 font-weight-bold">
                    Welcome to Insightful
                  </h1>
                  <p className="lead text-white text-center mb-5">
                    Insightful is a web application that gives you additional insight on reviews.
                  </p>
                  <p className="text-center mb-0" >
                    <a href="#" target="_blank" className="btn btn-primary ">
                      Get Started
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="instructions">
          <div className="container">
            <div className="row justify-content-center mb-4">
              <div className="col-md-8 col-lg-6 text-center">
                <h2 className="lg-title mb-2">
                  How does it work?
                </h2>
              </div>
            </div>
            <div className="row justy-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="text-center feature-block">
                  <div className="feature-icon-block mb-4">1</div>
                  {/* <h4 className="mb-3 ">Modern Design</h4> */}
                  <p>Open Google Maps and navigate to the reviews page.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="text-center feature-block">
                  <div className="feature-icon-block mb-4">2</div>
                  {/* <h4 className="mb-3">Recognised for excellence</h4> */}
                  <p>Copy the entire review sidebar.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="text-center feature-block">
                  <div className="feature-icon-block mb-4">3</div>
                  {/* <h4 className="mb-3">Delivery On Time </h4> */}
                  <p>Paste into box below and click "Analyze".</p>
                </div>
              </div>
            </div>
          </div>
        </section>  
        <section className="section bg-light" id="submit-review">
          <div className="container">
            <div className="row justify-content-center mb-4">
              <div className="col-md-6 col-lg-8 text-center">
                <form>
                  <div className="form-group">
                    <textarea className="form-control" onChange={this.handleChange} id="reviewText" rows="6" placeholder="Enter review text here..."></textarea>
                  </div>
                </form>
                <Scrollchor to="results" className="nav-link">
                  <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Analyze!</button>
                </Scrollchor>
              </div>
            </div>
          </div>
        </section>
        
        {/* <p> {JSON.stringify(this.state.reviewTrends)} </p> */}
        {/* <p> {JSON.stringify(this.state.sentimentData)} </p> */}
        <div className="container-fluid" id="results">
          <div className="row bar-single">
            <ProgressBar name={"Overall Sentiment"} value={this.state.sentiment.score ? this.state.sentiment.score*100 : 0}/>
          </div>
          <div className="row">
            <div className="col flex-fill bar-group">
              <ProgressBar name={"Joy"} value={this.state.documentEmotion.joy*100}/>
              <ProgressBar name={"Anger"} value={this.state.documentEmotion.anger*100}/>
              <ProgressBar name={"Sadness"} value={this.state.documentEmotion.sadness*100}/>
              <ProgressBar name={"Fear"} value={this.state.documentEmotion.fear*100}/>
              <ProgressBar name={"Disgust"} value={this.state.documentEmotion.disgust*100}/>
            </div>
            <div className="col flex-fill bar-group">
              {this.state.keywords.map((keyword, i) => (
                <div key={i}>
                  <ProgressBar name={keyword.text} value={keyword.sentiment ? this.scaleToOneHundred(keyword.sentiment.score) : 0}/>
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ScatterPlot data={this.state.reviewTrends}></ScatterPlot>
            </div>
          </div>
        </div>
        {/* <BarGraph data={this.state.data} svgWidth={this.state.svgWidth} svgHeight={this.state.svgHeight} /> */}
        {/* <LineGraph data={this.state.reviewTrends}></LineGraph> */}
      </div>
    );
  }
}

export default MainPage;
