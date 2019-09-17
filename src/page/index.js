import React, { Component } from 'react';
// import Button from 'antd/es/button';
import 'antd/dist/antd.css';
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
    // this.props.history.push('/home/article')
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }
  render () {
    return (
      <div className="index">
        <i className="iconfont icon-qiqiu"></i>
      </div>
    );
  }
}

export default index;
