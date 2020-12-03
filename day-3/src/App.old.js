import React, {Component} from "react";
import './App.css';

// Components
import Task from "./components/Task/Task";
import TaskList from "./components/TaskList/TaskList";
import NewTask from "./components/NewTask/NewTask";

//utils
import { genId } from './utils/index'



export const DataContext = React.createContext('')




class AppOld extends Component {
    state = {
        data: [
            {id: genId(), title: 'Купить хлеба', checked: true, deleted: false},
            {id: genId(), title: 'Помыть машину', checked: false, deleted: false},
            {id: genId(), title: 'Изучить ReactJS', checked: true, deleted: false},
            {id: genId(), title: 'Хорошо поспать', checked: false, deleted: false},
        ],
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
        console.log('render', genId())
    const tasklist = this.state.data.filter(task => !task.deleted).map(task => (
        <Task
            key={task.id}
            task={task}
            onClickAction={this.handlerClickAction(task.id)}
            onDeleteAction={this.handlerDeleteAction(task.id)}
        />
        ))

    return (
        <React.Fragment>
            <NewTask
                create={this.newTask}
            />
            <DataContext.Provider value={{data: this.state.data}}>
            <TaskList
                data={this.state.data}
                filter={this.state.filter}
                delete={this.handlerDeleteAction}
                change={this.handlerClickAction}
                changeFilter={this.changeFilter}
            />
            </DataContext.Provider>
        </React.Fragment>
    );
  }
}

export default AppOld;

