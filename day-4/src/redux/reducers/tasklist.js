import { genId } from '../../utils'
import { DELETE_TASK, NEW_TASK, NEW_TASK_LIST } from '../actions/actionTypes'

const initialState = {
  data: [
    { id: genId(), title: 'Купить хлеба', checked: true, deleted: false },
    { id: genId(), title: 'Помыть машину', checked: false, deleted: false },
    { id: genId(), title: 'Изучить ReactJS', checked: true, deleted: false },
    { id: genId(), title: 'Хорошо поспать', checked: false, deleted: false }
  ]
}

// Reducer
const tasklist = (state = initialState, action) => {
  let task = null
  let data = null
  switch (action.type) {
    case DELETE_TASK:
      console.log(action, state)
      task = state.data.find(el => el.id === action.value)
      task.deleted = !task.deleted
      data = [...state.data]
      return { ...state, data }

    case NEW_TASK:
      task = { id: genId(), title: action.value, checked: false, deleted: false }
      return { data: [...state.data, task] }

    case NEW_TASK_LIST:
      return { data: [...state.data, ...action.value] }
  }
  return state
}

export default tasklist
