import React, {Component} from "react";
import './App.css';



class App extends Component {
    state = {
        data: [
            {id: 1, title: 'Купить хлеба', checked: true},
            {id: 2, title: 'Помыть машину', checked: false},
            {id: 3, title: 'Изучить ReactJS', checked: true},
            {id: 4, title: 'Хорошо поспать', checked: false},
        ]
    }
  handlerClick = (event) => {
        console.log(event)
  }

  handlerKeyUp = (event) => {
        if (event.code === 'Enter'){
            const newTask = {id: 5, title: event.target.value, checked: false}
            this.setState({data: [...this.state.data, newTask]})
        }
  }

  render() {
    const tasklist = this.state.data.map(task => (
        <div key={task.id} className="input-group mb-3">
            <div className="input-group-prepend">
                <div className="input-group-text">
                    <input type="checkbox" defaultChecked={task.checked} />
                </div>
            </div>
            <input type="text" className="form-control" defaultValue={task.title}/>
        </div>
        ))


    return (
        <div className="container p-3">
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Новая задача"
                    onKeyUp={this.handlerKeyUp}
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
