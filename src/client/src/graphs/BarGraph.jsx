/*
Specifiable properties:
svgWidth - SVG width
svgHeight - SVG height
data - array of integers

*/

import React, {Component} from 'react';
import * as d3 from "d3";

class BarGraph extends Component {
  drawChart() {
    const svgWidth = this.props.svgWidth;
    const svgHeight = this.props.svgHeight;

    const data = this.props.data;     
    const svg = d3.select("body")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .style("margin-left", 100);

    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      // rectangle width (bar + spacing)
      // callback function to handle each element in data array
      // d = data
      // i = index
      .attr("x", (d, i) => i * 30)
      .attr("y", (d, i) => svgHeight - 10 * d)
      // bar width
      .attr("width", 25)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "skyblue");

    // select all text elements
    svg.selectAll("text")
      // pass data to each element
      .data(data)
      // creates nodes that are missing and attaches data to them
      .enter()
      .append("text")
      .text((d) => d)
      // pass attributes to each element
      .attr("x", (d, i) => i * 30)
      .attr("y", (d, i) => svgHeight - (10 * d) - 3)
  }

  componentDidMount() {
    this.drawChart();
  }

  render(){
    return <div id={"#" + this.props.id}></div>
  }
}

export default BarGraph;