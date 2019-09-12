import React, { Component } from 'react';
import Button from 'antd/es/button';
import 'antd/dist/antd.css';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
  }
  btnFn = () => {
    // this.props.history.push('/home/article')
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }
  render () {
    return (
      <div className="index">
        <Button onClick={this.btnFn}> toggle </Button>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </div>
    );
  }
}

export default index;
