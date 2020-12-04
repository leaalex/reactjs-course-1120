import React from 'react'
import Task from '../Task/Task'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

let TaskAbout = (props) => {
  console.log('TaskAbout', props)
  return <div>Info</div>
}

TaskAbout = withRouter(TaskAbout)

const TaskList = (props) => {
  console.log('TaskList', props)
  const tasklist = props.data
    .filter(task => props.filter.deleted === task.deleted)
    .filter(task => props.filter.checked === task.checked)
    .map(task => (
        <Task
            key={task.id}
            task={task}
        />
    ))
  return (
        <div>
            <h3>Список задач</h3>
            <button
                className='btn btn-primary'
                onClick={() => props.changeFilter({ deleted: !props.filter.deleted })}>
                 { !props.filter.deleted ? 'Показать' : 'Скрыть'} удаленные
            </button>
            <button className='btn btn-primary' onClick={() => props.changeFilter({ checked: !props.filter.checked })}>Показать заверженные</button>
            {tasklist}

            { true && <TaskAbout />}
        </div>
  )
}

function mapStateToProps (state) {
  return { data: state.tasklist.data }
}

export default connect(mapStateToProps)(TaskList)
