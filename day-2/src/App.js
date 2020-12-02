import React, {Component} from "react";
import './App.css';

// Components
import Task from "./components/Task/Task";
import TaskList from "./components/TaskList/TaskList";
import NewTask, {inputText} from "./components/NewTask/NewTask";

//utils
import { genId } from './utils/index'






class App extends Component {
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
        <div className="container p-3">
            <NewTask create={this.newTask}/>
            <TaskList data={this.state.data}
                      filter={this.state.filter}
                      delete={this.handlerDeleteAction}
                      change={this.handlerClickAction}
                      changeFilter={this.changeFilter}
            />
        </div>

    );
  }
}

export default App;

