import React, { Component } from 'react';
import Button from 'antd/es/button';
import 'antd/dist/antd.css';
import './article.scss';

class article extends Component {
  render() {
    return (
      <div className="article">
        <Button type="primary">Button</Button>
        article
      </div>
    );
  }
}

export default article;
