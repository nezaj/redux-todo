import React, { Component, PropTypes } from 'react'

import Todo from './Todo'

class TodoList extends Component {
  getTodos () {
    return this.props.todos.map((t) => <Todo key={t.id} {...t} />)
  }

  render () {
    return <ul>{this.getTodos()}</ul>
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default TodoList
