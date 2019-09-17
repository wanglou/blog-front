import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

// 引入组件
import index from '../page/index'
import home from '../page/home'
import noFind from '../page/noFind'

export default class RootMap extends React.Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route path="/index" component={index}></Route>
          <Route path="/home" component={home}></Route>
          <Redirect exact path="/" to="/index"/>
          <Route path="*" component={noFind}/>
        </Switch>
      </HashRouter>
    )
  }
}