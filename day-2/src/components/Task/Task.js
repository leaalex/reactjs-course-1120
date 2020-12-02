import React from 'react'



const Task = ({task, onClickAction, onDeleteAction}) => {
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
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <div className="input-group-text">
                    <input type="checkbox" defaultChecked={task.checked} />
                </div>
            </div>
            <input type="text" className="form-control" ref={inputText} defaultValue={task.title} disabled={true}/>
            <div className="input-group-append">
                <button onClick={handlerClick} className="btn btn-outline-secondary">Редактировать</button>
                <button className="btn btn-outline-secondary" onClick={onDeleteAction}>Удалить</button>
            </div>
        </div>
    )
}

export default Task