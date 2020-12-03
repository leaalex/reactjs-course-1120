import React from 'react'
import {genId} from "../../utils";
import addContainer from "../../hoc/addContainer";



const NewTask = props => {

    const inputText = React.createRef()
    const handlerKeyUp = (event) =>{
        if (event.code === 'Enter' && event.target.value.length > 3){
            props.create(event.target.value)
            event.target.value = ''
        } if (event.code === 'Escape') {
            event.target.value = ''
            event.target.blur()
        }
    }
    const handlerClick = () => {
        if (inputText.current.value.length > 3){
            props.create(inputText.current.value)
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
            </div>
        </div>
    )
}

export default addContainer(NewTask, 'p-3')