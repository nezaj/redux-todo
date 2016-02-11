import React, { Component } from 'react'

import { TodoListContainer } from '../containers'

class App extends Component {
  render () {
    return (
      <div>
        <h1>Hello world!!</h1>
        <TodoListContainer />
      </div>
    )
  }
}

export default App
