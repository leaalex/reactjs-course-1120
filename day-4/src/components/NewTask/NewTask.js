import React, { useState } from 'react'
import { connect } from 'react-redux'
import { newTask, newTaskList, newTaskListAsync } from '../../redux/actions/actionList'

const NewTask = props => {
  const [input, setInput] = useState('')
  const handlerKeyUp = (event) => {
    if (event.code === 'Enter' && input.length > 3) {
      props.newTask(input)
      setInput('')
    } if (event.code === 'Escape') {
      setInput('')
    }
  }
  const handlerClick = () => {
    if (input.length > 3) {
      props.newTask(input)
      setInput('')
    }
  }

  return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Новая задача"
                onKeyUp={handlerKeyUp}
                value={input}
                onChange={(event) => setInput(event.target.value)}
            />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" onClick={handlerClick}>+ Создать</button>
                <button className="btn btn-outline-secondary" onClick={props.newTaskListAsync}>Добавить списмок</button>
            </div>
        </div>
  )
}
function mapDispatchToProps (dispatch) {
  return {
    newTask: (value) => dispatch(newTask(value)),
    newTaskList: () => dispatch(newTaskList({})),
    newTaskListAsync: () => dispatch(newTaskListAsync())
  }
}

export default connect(null, mapDispatchToProps)(NewTask)
