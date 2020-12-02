import React, {Component} from "react";
import './App.css';

// Components
import Task from "./components/Task/Task";

//utils
import { genId } from './utils/index'


const inputText = React.createRef()

class App extends Component {
    state = {
        data: [
            {id: genId(), title: 'Купить хлеба', checked: true, deleted: false},
            {id: genId(), title: 'Помыть машину', checked: false, deleted: false},
            {id: genId(), title: 'Изучить ReactJS', checked: true, deleted: false},
            {id: genId(), title: 'Хорошо поспать', checked: false, deleted: false},
        ],
    }

  handlerClick = (event) => {
      const newTask = {id: genId(), title: inputText.current.value, checked: false,  deleted: false}
      this.setState({data: [...this.state.data, newTask]})
          inputText.current.value = ''
  }

  handlerKeyUp = (event) => {
        if (event.code === 'Enter'){
            const newTask = {id: genId(), title: event.target.value, checked: false, deleted: false}
            this.setState({data: [...this.state.data, newTask]})
            event.target.value = ''
        } if (event.code === 'Escape') {
          event.target.value = ''
          event.target.blur()
      }
  }
  handlerClickAction = (id) => (title) => {
        const element = this.state.data.find(el => el.id === id)
        element.title = title
        this.setState({data: [...this.state.data]})
  }


  render() {
        console.log('render', genId())
    const tasklist = this.state.data.map(task => (
        <Task
            key={task.id}
            task={task}
            onClickAction={this.handlerClickAction(task.id)}
        />
        ))


    return (
        <div className="container p-3">
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Новая задача"
                    onKeyUp={this.handlerKeyUp}
                    ref={inputText}
                        />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={this.handlerClick}>+ Создать</button>
                </div>
            </div>
            { tasklist }
        </div>

    );
  }
}

export default App;

