import React from 'react'
import { Route } from 'react-router'

import Layout from './views/shared/Layout'
import Home from './views/Home/Home'
import About from './views/Home/About'
import Login from './views/Home/Login'
import Contact from './views/Home/Contact'

export default (
  <Route component={Layout}>
      <Route path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/contact" component={Contact}></Route>
  </Route>
)
