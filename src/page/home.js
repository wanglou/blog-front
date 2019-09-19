import React, { Component } from 'react';
// import Button from 'antd/es/button';
import './home.scss'
import { Route } from 'react-router-dom'
import article from '../page/article/article'
import readArticle from '../page/article/readArticle'
import about from '../page/about/about'
import wall from '../page/wall/wall'

// 顶部导航
const navList= [
  { name: '文章', path: '/home/article' },
  { name: '关于我', path: '/home/about' },
  { name: '留言墙', path: '/home/wall' }
]
class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navActive: 0
    };}
  navRoute (item, index) {
    this.props.history.push(item.path)
    this.setState({
      navActive: index
    })
  }
  componentDidMount() {
    const start = window.location.href.indexOf('#/')
    const url = window.location.href.slice(start + 1)
    navList.forEach((item, index) => {
      if (item.path === url) {
       this.setState({
         navActive: index
       })
     }
    })
    // 监听路由
    this.props.history.listen((route) => {
      navList.forEach((item, index) => {
          if (item.path === route.pathname) {
          this.setState({
            navActive: index
          })
        }
      })
    })
  }
  render() {
    return (
      <div className="home">
        <header>
          <ul>
            { navList.map((item, index) => {
              return <li className={this.state.navActive === index ? 'active' : ''} onClick={this.navRoute.bind(this, item, index)} key={index}>
                <span>{item.name}</span>
              </li>
            }) }
          </ul>
        </header>
        <main>
          <Route path="/home/article" component={article}></Route>
          <Route path="/home/readArticle/:id" component={readArticle}></Route>
          <Route path="/home/about" component={about}></Route>
          <Route path="/home/wall" component={wall}></Route>
        </main>
        <footer>
          created by wanglou
        </footer>
      </div>
    );
  }
}

export default home;
