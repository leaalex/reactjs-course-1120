import React from 'react'
import {genId} from "../utils";

import TaskList from "../components/TaskList/TaskList";
import NewTask from "../components/NewTask/NewTask";

class TaskListPage extends React.Component {
    state = {
        filter: {deleted: false, checked: true}
    }

    newTask = (value) => {
        const newTask = {id: genId(), title: value, checked: false,  deleted: false}
        this.setState({data: [...this.state.data, newTask]})
    }

    changeFilter = (value) => {
        this.setState({filter: {...this.state.filter, ...value}})
    }


    handlerClickAction = (id) => (title) => {
        const element = this.state.data.find(el => el.id === id)
        element.title = title
        this.setState({data: [...this.state.data]})
    }
    handlerDeleteAction = (id) => () => {
        const element = this.state.data.find(el => el.id === id)
        element.deleted = !element.deleted
        this.setState({data: [...this.state.data]})
    }
    componentDidMount() {
        console.log('componentDidMount', document.querySelector('.container'))
    }




    render() {

        return (
            <React.Fragment>
                <h1>TaskList</h1>
                <NewTask />
                <TaskList
                    filter={this.state.filter}
                    changeFilter={this.changeFilter}
                    {...this.props}
                />
            </React.Fragment>
        );
    }
}

export default TaskListPage
