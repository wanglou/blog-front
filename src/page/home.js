import React, { Component } from 'react';
// import Button from 'antd/es/button';
import 'antd/dist/antd.css';
import { Link, Route } from 'react-router-dom'
import article from '../page/article/article'
import about from '../page/about/about'

class home extends Component {
  render() {
    return (
      <div className="home">
        <ul>
          <li><Link to="/home/article">click msg</Link></li>
          <li><Link to="/home/about">cliock abt</Link></li>
        </ul>
        <Route path="/home/article" component={article}></Route>
        <Route path="/home/about" component={about}></Route>
      </div>
    );
  }
}

export default home;
