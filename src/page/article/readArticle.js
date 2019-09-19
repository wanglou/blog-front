import React, { Component } from 'react';
import './readArticle.scss'

class readArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {
      }
    }
  }
  getDetail () {
  }
  componentDidMount () {
    console.log(this.props.match.params.id)
  }
  render() {
    return (
      <div className="read-article">
        <h2>详情</h2>
      </div>
    );
  }
}

export default readArticle;
