import React, { Component } from 'react'
import Scrollchor from 'react-scrollchor'
import ReactTooltip from 'react-tooltip'

import Welcome from './components/Welcome'
import Instructions from './components/Instructions'
import Footer from './components/Footer'

import BarGraph from './components/BarGraph'
import LineGraph from './components/LineGraph'
import ScatterPlot from './components/ScatterPlot'
import ProgressBar from './components/ProgressBar'
import Slider from './components/Slider'

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
      keywords: [{},{},{},{},{}],
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

  handleContactUsSubmit = (event) => {
    console.log(event)
  }

  scaleToOneHundred(num) {
    // num is on a scale from -1 to 1, scale num to a value between 0-100
    return ((num + 1) * 50);
  }

  render() {
    console.log(this.state.documentEmotion.joy*100)
    return (
      <div className="MainPage">
        <Welcome/>
        <Instructions/> 
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
              <div className="bar-group-header">
                Overall Emotions
                <a data-tip="" data-for="emotions"> <i className="far fa-question-circle"/> </a>
                <ReactTooltip id="emotions" place="top" type="dark" effect="solid" offset={{right: 5}}>
                  Displays the emotions shown in all the <br/>
                  reviews. 0% indicates all negative <br/>
                  reviews, and 100% indicates all positive.
                </ReactTooltip>
              </div>
              <ProgressBar name={"Joy"} value={this.state.documentEmotion.joy*100}/>
              <ProgressBar name={"Anger"} value={this.state.documentEmotion.anger*100}/>
              <ProgressBar name={"Sadness"} value={this.state.documentEmotion.sadness*100}/>
              <ProgressBar name={"Fear"} value={this.state.documentEmotion.fear*100}/>
              <ProgressBar name={"Disgust"} value={this.state.documentEmotion.disgust*100}/>
            </div>
            <div className="col flex-fill bar-group">
              <div className="bar-group-header">
                Keywords
                <a data-tip="" data-for="keywords"> <i className="fas fa-question-circle"/> </a>
                  <ReactTooltip id="keywords" data-place="top" type="dark" effect="solid" offset={{right: 5}}>
                    Displays the 5 top keywords in the reviews <br/>
                    and the sentiment towards them. <br/>
                    0% indicates negative sentiment, <br/>
                    and 100% indicates positive.
                  </ReactTooltip>
              </div>
              {this.state.keywords.map((keyword, i) => (
                <div key={i}>
                  <ProgressBar name={keyword.text ? keyword.text : "Keyword"} value={keyword.sentiment ? this.scaleToOneHundred(keyword.sentiment.score) : 0}/>
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col">
              {/* <ScatterPlot data={this.state.reviewTrends}></ScatterPlot> */}
            </div>
          </div>
        </div>
        {/* <BarGraph data={this.state.data} svgWidth={this.state.svgWidth} svgHeight={this.state.svgHeight} /> */}
        {/* <LineGraph data={this.state.reviewTrends}></LineGraph> */}
        <Footer/>
      </div>
    );
  }
}

export default MainPage;
