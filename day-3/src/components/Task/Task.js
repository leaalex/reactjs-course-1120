import React from 'react'
import {DataContext} from "../../App";
import {connect} from "react-redux";


const Task = ({task, onClickAction, deleteTask, checkTask}) => {
    const inputText = React.createRef()

    const handlerClick = (event) => {
        if (inputText.current.disabled === false){
            event.target.innerText = 'Редактировать'
            onClickAction(inputText.current.value)
        } else {
            event.target.innerText = 'Сохранить'
        }
        inputText.current.disabled = !inputText.current.disabled

    }

    return (
            <div className={task.deleted?'input-group mb-3 ml-4': 'input-group mb-3'}>
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" defaultChecked={task.checked}  onChange={() => checkTask(task.id)}/>
                    </div>
                </div>
            <input type="text" className="form-control" ref={inputText} defaultValue={task.title} disabled={true}/>
            <div className="input-group-append">
                <button onClick={handlerClick} className="btn btn-outline-secondary">Редактировать</button>
                <button className="btn btn-outline-secondary" onClick={() => deleteTask(task.id)}>Удалить</button>
            </div>
            </div>
    )
}





function mapDispatchToProps(dispatch){
    return {
        deleteTask: (id) => dispatch({type: "DELETE_TASK", value:id}),
        checkTask: (id) => dispatch({type: "CHECK_TASK", value:id}),
    }
}

export default connect(null, mapDispatchToProps)(Task);

