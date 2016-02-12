import React, { Component, PropTypes } from 'react'

const Todo = ({completed, text}) => (
  <li style={{ color: completed ? 'green' : 'black' }}>
    {text}
  </li>
)

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
