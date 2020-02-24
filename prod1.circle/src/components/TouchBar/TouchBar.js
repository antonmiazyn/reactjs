import React from 'react';
import CircleBlock from '../CircleBlock/CircleBlock';
import './touchbar.css';

const ICON_ADRESS = 'https://img.icons8.com/cute-clipart/64/000000/hand-cursor.png';

class TouchBar extends React.Component {
  constructor(props) {
    super(props);
    this.lable = <div className="touchbar__content-lable">click to start</div>;
    this.hiddingTouchBar = this.hideTouchBar.bind(this);
    this.state = {
      visible: true
    }
  }

  hideTouchBar() {
    this.setState({visible: false});
  }

  render() {
    if(this.state.visible) {
      return(
        <div className="touchbar__wrapper">
          <div className="touchbar__content">
            <img src={ICON_ADRESS} onClick={this.hiddingTouchBar.bind(this)} />
            {this.lable}
          </div>
        </div>
      );
    } else {
      return(
        <CircleBlock />
      );
    }
  }
}

export default TouchBar;
