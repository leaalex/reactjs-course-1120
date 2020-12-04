import React, { useState } from 'react'

import TaskList from '../components/TaskList/TaskList'
import NewTask from '../components/NewTask/NewTask'

const TaskListPage = () => {
  const [filter, setFilter] = useState({ deleted: false, checked: true })

  const changeFilter = (value) => {
    setFilter({ ...filter, ...value })
  }

  return (
            <React.Fragment>
                <h1>TaskList</h1>
                <NewTask />
                <TaskList
                    filter={filter}
                    changeFilter={changeFilter}
                />
            </React.Fragment>
  )
}

export default TaskListPage
