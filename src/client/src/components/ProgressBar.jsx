import React, {Component} from "react"
import '../assets/styles/progressBar.css'

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
		  value: this.props.value,
		  color: '#b53471'
    }
  }

  setColorGradient() {
    var rgb = "#b53471";
    if (this.props.value < 50) {
      //red - yellow
      rgb = 'rgb(255, ' + Math.round(this.props.value*2.54) + ', 0)'
    }
    else {
      //yellow - green
      rgb = 'rgb(' + (255 - Math.round((this.props.value - 50)*2.54)) + ', 255, 0)'
    }
    this.setState(() => {return{color: rgb}})
  }

  render() {
    return (
      <div className="progress-bar">
        {/* <div className="legend"> */}
          {/* <div> */}
            <div className="label">{this.state.name}</div>
          {/* </div> */}
          {/* <div className="value"> */}
            <div className="value" style={{'color': this.state.color}}>
              <span>{Math.round(this.props.value)}%</span>
            </div>
          {/* </div> */}
        {/* </div>      */}
        {/* <div className="scale">
          <div className="graduation" style={{'color': this.state.color, 'width': this.state.value + '%'}}>
            <span>|</span>
          </div>
        </div> */}
        <div className="bar">
          <div style={{'backgroundColor': this.state.color, 'background-image': 'linear-gradient(to right, #F15F79, #B24592)', 'width': this.props.value + '%'}}>
          </div>
          <div style={{'backgroundColor': '#d3d3d3', 'width': (100-this.props.value) + '%'}}>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;