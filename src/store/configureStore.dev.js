import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import createHistory from 'history/lib/createBrowserHistory'
import routes from '../routes'
import rootReducer from '../reducers/reducers'

import DevTools from '../containers/DevTools'

import thunk from 'redux-thunk'
//import createLogger from 'redux-logger'

const finalCreateStore = compose(
  reduxReactRouter({ routes, createHistory }),
 // applyMiddleware(createLogger()),
  DevTools.instrument()
)(createStore)

export default function configureStore(initialState) {
	const store = finalCreateStore(rootReducer, initialState)

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers/reducers', () => {
			const nextRootReducer = require('../reducers/reducers')
			store.replaceReducer(nextRootReducer)
		})
	}

	return store
}
