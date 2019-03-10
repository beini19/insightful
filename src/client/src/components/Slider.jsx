import React, {Component} from "react"
import '../assets/styles/progressBar.css'

class Slider extends Component {
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
            <div className="label">{this.state.name}</div>
          </div>
          <div className="value">
            <div style={{'color': this.state.color}}>
              <div>{this.props.value}%</div>
            </div>
          </div>
        </div>     
        <div className="scale">
          <div className="graduation" style={{'color': '#F15F79', 'width': (this.state.value + 1)*50 + '%'}}>
            <span>|</span>
          </div>
        </div>
        <div className="bar">
          <div style={{'backgroundColor': this.state.color, 'background-image': 'linear-gradient(to right, #F15F79, #B24592)', 'width': this.props.value + '%'}}>
          </div>
          <div style={{'backgroundColor': '#d3d3d3', 'width': (this.state.value + 1)*50 + '%'}}>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;