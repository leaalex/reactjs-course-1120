import { ADD, SUB, DELETE_TASK, NEW_TASK, NEW_TASK_LIST } from './actionTypes'
import { genId } from '../../utils'

export const add = () => ({ type: ADD })
export const sub = () => ({ type: SUB })
export const del = (id) => ({ type: DELETE_TASK, value: id })
export const newTask = (value) => ({ type: NEW_TASK, value })
export const newTaskList = (value) => ({ type: NEW_TASK_LIST, value })

// async
export const delAsync = id => dispatch => setTimeout(() => dispatch(del(id)), 1300)
export const newTaskListAsync = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(data => data.json())
    .then(json => dispatch(newTaskList(json.map(task => ({
      id: genId(),
      title: task.title,
      checked: task.completed,
      deleted: false
    }))
    )))
}
