import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'

// SCSS
import './sass/Site.scss'

const store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('root')
)
