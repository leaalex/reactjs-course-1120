import React from 'react'
import {connect} from 'react-redux'
import {newTask, newTaskList, newTaskListAsync} from "../../redux/actions/actionList";
import {genId} from "../../utils";



   const dataTask =  [
        {id: genId(), title: 'Купить хлеба 1', checked: true, deleted: false},
        {id: genId(), title: 'Помыть машину 1', checked: false, deleted: false},
        {id: genId(), title: 'Изучить ReactJS 1', checked: true, deleted: false},
        {id: genId(), title: 'Хорошо поспать 1', checked: false, deleted: false},
    ]



const NewTask = props => {

    const inputText = React.createRef()
    const handlerKeyUp = (event) =>{
        if (event.code === 'Enter' && event.target.value.length > 3){
            props.newTask(event.target.value)
            event.target.value = ''
        } if (event.code === 'Escape') {
            event.target.value = ''
            event.target.blur()
        }
    }
    const handlerClick = () => {
        if (inputText.current.value.length > 3){
            props.newTask(inputText.current.value)
            inputText.current.value = ''
        }
    }

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Новая задача"
                onKeyUp={handlerKeyUp}
                ref={inputText}
            />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" onClick={handlerClick}>+ Создать</button>
                <button className="btn btn-outline-secondary" onClick={props.newTaskListAsync}>Добавить списмок</button>
            </div>
        </div>
    )
}
function mapDispatchToProps(dispatch){
    return {
        newTask: (value) => dispatch(newTask(value)),
        newTaskList: () => dispatch(newTaskList(dataTask)),
        newTaskListAsync: () => dispatch(newTaskListAsync())
    }
}


export default connect(null, mapDispatchToProps)(NewTask)