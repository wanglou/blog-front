import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// 引入组件
import index from '../page/index'

export default class RouteMap extends React.Component {
  render () {
    return (
      <Router>
        <Route path="/" component={index}></Route>
      </Router>
    )
  }
}