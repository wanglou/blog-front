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
        <p>
          <span>
            <img onClick={this.btnFn} src={require('../images/meng_4.png')} alt="黄粱一梦"></img>
          </span>
          <span>
            <img onClick={this.btnFn} src={require('../images/meng_3.png')} alt="黄粱一梦"></img>
          </span>
          <span>
            <img onClick={this.btnFn} src={require('../images/meng_2.png')} alt="黄粱一梦"></img>
          </span>
          <span>
            <img onClick={this.btnFn} src={require('../images/meng_1.png')} alt="黄粱一梦"></img>
          </span>
        </p>
      </div>
    );
  }
}

export default index;
