const initialState = {
    counter: 100
}

// Reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD':
            return { counter: state.counter + 1 }
            break
        case 'SUB':
            return { counter: state.counter - 1 }
            break
    }
    return state
}


export default rootReducer