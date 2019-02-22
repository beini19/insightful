import React, {Component} from "react"
import '../styles/progressBar.css'

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
		  value: this.props.value,
		  color: '#b53471'
    }
  }

  render() {
    return (
      <div className="progress-bar">
        <div className="legend">
          <div>
            <span className="label">{this.state.name}</span>
          </div>
          <div className="value">
            <div style={{'color': this.state.color}}>
              <span>{this.state.value}%</span>
            </div>
          </div>
        </div>     
        {/* <div className="scale">
          <div className="graduation" style={{'color': this.state.color, 'width': this.state.value + '%'}}>
            <span>|</span>
          </div>
        </div> */}
        <div className="bar">
          <div style={{'backgroundColor': this.state.color, 'width': this.state.value + '%'}}>
          </div>
          <div style={{'backgroundColor': '#d3d3d3', 'width': (100-this.state.value) + '%'}}>
          </div>
        </div>
      </div>
    );
  }
}

export default LineGraph;