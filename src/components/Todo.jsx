import React, { Component, PropTypes } from 'react'

class Todo extends Component {
  render () {
    return (
      <li style={{ color: this.props.completed ? 'green' : 'black' }}>
        {this.props.text}
      </li>
    )
  }
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
