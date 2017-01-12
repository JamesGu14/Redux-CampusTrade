import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import combinedReducers from './reducers'
import App from './components/App'

// Import Body Page
import Home from './components/pages/Home'
import Users from './components/pages/Users'

import 'antd/dist/antd.less'

const store = createStore(combinedReducers)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />

        <Route path="/users" component={Users} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
