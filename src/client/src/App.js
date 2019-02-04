import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarGraph from './graphs/BarGraph'
import LineGraph from './graphs/LineGraph'

class App extends Component {
  state = {
    data: [12, 5, 6, 6, 9, 10],
    svgWidth: 700,
    svgHeight: 300
  }

  render() {
    return (
      <div className="App">
        <BarGraph data={this.state.data} svgWidth={this.state.svgWidth} svgHeight={this.state.svgHeight} />
        <LineGraph></LineGraph>
      </div>
    );
  }
}

export default App;
