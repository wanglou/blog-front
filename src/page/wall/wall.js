import React, { Component } from 'react';
import { Input, Button, Form } from 'antd';
import './wall.scss';

class wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addShow: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
      }
    })
  }

  addShow () {
    this.setState({
      addShow: !this.state.addShow
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="wall">
        <div className="header">
          <p onClick={this.addShow.bind(this)}>
            click me
          </p>
          <div className={this.state.addShow ? 'show' : ''}>

            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item label="内容">
                {getFieldDecorator('contentValue', {
                  rules: [{ required: true, message: '请输入内容' }],
                })(
                  <Input.TextArea
                    maxLength={200}
                    rows={4}
                    placeholder="请输入内容"
                  />,
                )}
              </Form.Item>
              <Form.Item label="姓名">
                {getFieldDecorator('nameValue')(
                  <Input
                    maxLength={20}
                    placeholder="请输入姓名(非必填)"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  提 交
                </Button>
                <Button onClick={this.addShow.bind(this)}> 关闭 </Button>
              </Form.Item>
            </Form>
          </div>
        </div>

        <div className="main">
        </div>
      </div>
    );
  }
}

export default Form.create()(wall);
