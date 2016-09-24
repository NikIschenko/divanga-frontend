import React, { Component, PropTypes } from 'react';

export default class PercentCircle extends Component {

  setHighlight(deg, colors) {
    if(deg <= 180) {
      return 'linear-gradient(' + (90+deg) + 'deg, transparent 50%,' + colors.remaining + ' 50%),linear-gradient(90deg,' + colors.remaining + ' 50%, transparent 50%), linear-gradient(90deg, #FFF 51%, transparent 50%), linear-gradient(' + (88.8+deg) + 'deg, transparent 50%, #FFF 50%)';
    } else {
      return 'linear-gradient(' + (deg-90) + 'deg, transparent 50%,' + colors.highlight + ' 50%),linear-gradient('+((deg==360)?90:(deg-268.8))+'deg, #FFF 50%, transparent 50%),linear-gradient(90deg,' + colors.remaining + ' 50%, transparent 50%), linear-gradient(90deg, #FFF '+((deg==360)?50:51)+'%, transparent 50%)';
    }
  }

  getDegrees(percent) {
    return (percent / 100) * 360;
  }

  render() {

    const { percent, children } = this.props;
    const style = {
      backgroundImage: this.setHighlight(this.getDegrees(percent), { remaining: '#333', highlight: '#4A90E2' }),
    }

    return (
      <div className="chart" style={style}>
        {children}
      </div>
    );
  }
}

