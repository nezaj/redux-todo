import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { App } from './components'
import { addTodo } from './actions'
import rootReducer from './reducers'

let store = createStore(rootReducer)

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))

let reactApp = (
  <Provider store={store}>
    <App />
  </Provider>
)
let reactRoot = document.getElementById('root')

render(reactApp, reactRoot)
