import React, { Component } from 'react';
import Button from 'antd/es/button';
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
        {/* <i className="iconfont icon-reqiqiu1"></i> */}
        <Button onClick={this.btnFn}> 开始 </Button>
      </div>
    );
  }
}

export default index;
