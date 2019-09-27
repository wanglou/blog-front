import React, { Component } from 'react';
import { Input, Button } from 'antd';
import './wall.scss';

class wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentValue: '',
      nameValue: '',
      addShow: true
    };
  }
  addShow () {
    this.setState({
      addShow: !this.state.addShow
    })
  }
  contentChange = ({target: {value}}) => {
    this.setState({
      contentValue: value
    })
  }
  nameChange = ({target: {value}}) => {
    this.setState({
      nameValue: value
    })
  }
  render () {
    return (
      <div className="wall">
        <div className="header">
          <p onClick={this.addShow.bind(this)}>
            click me
          </p>
          <div className={this.state.addShow ? 'show' : ''}>
            <p>
              <Input.TextArea maxLength={200} onChange={this.contentChange} autosize={{ minRows: 6, maxRows: 7 }} value={this.state.contentValue} placeholder="请输入内容 必填"/>
            </p>
            <p>
              <Input maxLength={20} onChange={this.nameChange} value={this.state.nameValue} placeholder="请输入名称 非必填"/>
            </p>
            <Button> 提 交 </Button>
            <Button> 关 闭 </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default wall;
