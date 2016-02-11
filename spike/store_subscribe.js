import { createStore } from 'redux'

import { addTodo } from '../src/actions'
import rootReducer from '../src/reducers'

let store = createStore(rootReducer)

// See intial state
console.log(store.getState())

// Every time the state changes, log it
// Note: subscribe() returns a function that will unregister the listener
// for convention we save it to a variable called unsubscribe
let unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))

// Stop listening to changes
unsubscribe()

// Won't be logged now
store.dispatch(addTodo('I won\'t be logged!'))
