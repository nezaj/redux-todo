/* Todos reducer, manages state related w/ todos */
import { ADD_TODO, TOGGLE_TODO } from '../actions'

const initialState = []

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((t) => {
        if (t.id !== action.id) {
          return t
        }

        t.completed = !t.completed
        return t
      })
    default:
      return state
  }
}

export default todos
