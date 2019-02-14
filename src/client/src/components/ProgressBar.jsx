import React, {Component} from "react"
import '../styles/progressBar.css'

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Apples',
		  value: 25,
		  color: '#b53471'
    }
  }

  render() {
    return (
      // <div className="progress-barasdf">
      <div>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{'width': '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>
        {/* <div className="value">
         <div style={{'color': this.state.color, 'width': this.state.value + '%'}}>
           <span>{this.state.value}%</span>
         </div>
        </div>
        <div className="scale">
         <div className="graduation" style={{'color': this.state.color, 'width': this.state.value + '%'}}>
           <span>|</span>
         </div>
        </div>
        <div className="bar">
         <div style={{'backgroundColor': this.state.color, 'width': this.state.value + '%'}}>
         </div>
         <div style={{'backgroundColor': '#d3d3d3', 'width': (100-this.state.value) + '%'}}>
         </div>
        </div>  */}
      </div>
    );
  }
}


let reading = {
		name: 'Apples',
		value: 25,
		color: '#b53471'
};


export default LineGraph;