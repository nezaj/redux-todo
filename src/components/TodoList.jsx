import React, { Component, PropTypes } from 'react'

import Todo from './Todo'

const TodoList = ({todos}) => {
  let renderedTodos = todos.map(todo => <Todo key={todo.id} {...todo} />)
  return <ul>{renderedTodos}</ul>
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default TodoList
