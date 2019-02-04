import React, {Component} from 'react';
import * as d3 from "d3";

class LineGraph extends Component {
  drawChart() {
    const data = [12, 5, 6, 6, 9, 10];  
    const xdata = [1, 2, 3, 4, 5, 6];   
    var svgWidth = 500, svgHeight = 300;
    var margin = { top: 20, right: 20, bottom: 30, left: 50 };
    var width = svgWidth - margin.left - margin.right;
    var height = svgHeight - margin.top - margin.bottom;

    var svg = d3.select("body")
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight);

    // render a group element and reposition it with margins
    var g = svg.append("g")
      .attr("transform", 
         "translate(" + margin.left + "," + margin.top + ")"
      );

    // add scales for x and y axis
    var x = d3.scaleLinear().rangeRound([0, width]);
    var y = d3.scaleLinear().rangeRound([height, 0]);

    var line = d3.line()
      .x(function(xd) { return x(xd)})
      .y(function(d) { return y(d)})
      x.domain(d3.extent(xdata, function(xd) { return xd }));
      y.domain(d3.extent(data, function(d) { return d }));

    // add x-axis to graph using scale for x-axis defined above
    g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .select(".domain")
      .remove();

    g.append("g")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Frequency");
    
    g.append("path")
      .datum(xdata, data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line);
  }

  componentDidMount() {
    this.drawChart();
  }

  render(){
    return <div></div>
  }
}

export default LineGraph;