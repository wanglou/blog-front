import React, { Component } from 'react';
import './index.scss';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
  }
  componentDidMount() {
    console.log(1)
  }
  btnFn = () => {
    this.props.history.push('/home/article')
    // this.setState(state => ({
    //   isToggleOn: !state.isToggleOn
    // }))
  }
  render () {
    return (
      <div className="index">
        <i className="qiqiu1 iconfont icon-reqiqiu" onClick={this.btnFn}></i>
        <i className="qiqiu2 iconfont icon-reqiqiu" onClick={this.btnFn}></i>
        <i className="qiqiu3 iconfont icon-reqiqiu" onClick={this.btnFn}></i>
      </div>
    );
  }
}

export default index;
