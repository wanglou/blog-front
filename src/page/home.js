import React, { Component } from 'react';
// import Button from 'antd/es/button';
import './home.scss'
import { Route } from 'react-router-dom'
import article from '../page/article/article'
import about from '../page/about/about'
import wall from '../page/wall/wall'

// 顶部导航
const navList= [
  { name: '文章', path: '/home/article' },
  { name: '关于我', path: '/home/about' },
  { name: '留言墙', path: '/home/wall' }
]
class home extends Component {
  navRoute (item) {
    this.props.history.push(item.path)
  }
  render() {
    return (
      <div className="home">
        <header>
          <ul>
            { navList.map((item, index) => {
              return <li onClick={this.navRoute.bind(this, item)} key={index}>
                <span>{item.name}</span>
              </li>
            }) }
          </ul>
        </header>
        <Route path="/home/article" component={article}></Route>
        <Route path="/home/about" component={about}></Route>
        <Route path="/home/wall" component={wall}></Route>
      </div>
    );
  }
}

export default home;
