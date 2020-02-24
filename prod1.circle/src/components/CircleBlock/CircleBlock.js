import React from 'react';
import './circle.css';

class CircleBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      starting: true
    }
  }

  render() {
    if(this.state.starting) {
      return(
        <div className="circle">
          <h1>React based Circle</h1>
        </div>
      );
    }
  }
}

export default CircleBlock;
