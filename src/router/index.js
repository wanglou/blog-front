import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

// 引入组件
import index from '../page/index'
import home from '../page/home'

export default class RootMap extends React.Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route path="/index" component={index}></Route>
          <Route path="/home" component={home}></Route>
        </Switch>
      </HashRouter>
    )
  }
}