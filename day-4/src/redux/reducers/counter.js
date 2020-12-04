import { ADD, SUB } from '../actions/actionTypes'

const initialState = {
  counter: 100
}

// Reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, counter: state.counter + 1 }

    case SUB:
      return { ...state, counter: state.counter - 1 }
  }
  return state
}

export default counter
