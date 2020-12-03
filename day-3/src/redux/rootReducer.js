import {genId} from "../utils";

const initialState = {
    counter: 100,
    data: [
        {id: genId(), title: 'Купить хлеба', checked: true, deleted: false},
        {id: genId(), title: 'Помыть машину', checked: false, deleted: false},
        {id: genId(), title: 'Изучить ReactJS', checked: true, deleted: false},
        {id: genId(), title: 'Хорошо поспать', checked: false, deleted: false},
    ],
}

// Reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD':
            return {...state, counter: state.counter + 1 }
            break
        case 'SUB':
            return {...state, counter: state.counter - 1 }
            break
        case 'DELETE_TASK':
            console.log(action, state)
            const task = state.data.find(el => el.id === action.value)
            task.deleted = !task.deleted
            const data = [...state.data]
            return {...state, data}
            break
    }
    return state
}


export default rootReducer