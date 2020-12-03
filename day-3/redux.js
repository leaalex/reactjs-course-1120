const redux = require('redux')
const initialState = {
    counter: 0
}

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD':
            return { counter: state.counter + 1 }
            break
        case 'ADD_NUMBER':
            return { counter: state.counter + action.value }
            break
    }
    return state
}

// Store
const store = redux.createStore(reducer)

// Action
const addCounter = {type: 'ADD'}

store.subscribe(()=> {
    console.log('subscribe', store.getState())
})

console.log('1', store.getState())

store.dispatch(addCounter)
console.log('2', store.getState())

store.dispatch({type: 'ADD_NUMBER', value: 10})

console.log('3', store.getState())