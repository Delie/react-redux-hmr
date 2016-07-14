import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'

const DevTools = require('./DevTools');

export default class Root extends Component {
  render() {
    const { store } = this.props
    if (process.env.NODE_ENV === 'production')
    {
        return (
          <Provider store={store}>
            <div>
              <ReduxRouter />
            </div>
          </Provider>
        )
    }else{
        return (
          <Provider store={store}>
            <div>
                <ReduxRouter />
                <DevTools />
            </div>
          </Provider>
        )
    }
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
