import React, {Component} from "react";
import './App.css';

// Components
import Task from "./components/Task/Task";
import TaskList from "./components/TaskList/TaskList";
import NewTask from "./components/NewTask/NewTask";

//utils
import { genId } from './utils/index'



export const DataContext = React.createContext('')




class App extends Component {
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
            <NewTask
                create={this.newTask}
            />
            <DataContext.Provider value={{data: this.state.data}}>
            <TaskList
                filter={this.state.filter}
                changeFilter={this.changeFilter}
            />
            </DataContext.Provider>
        </React.Fragment>
    );
  }
}

export default App;

