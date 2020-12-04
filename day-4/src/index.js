import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// redux
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// route
import { BrowserRouter } from 'react-router-dom'

const log = (store) => (next) => (action) => {
  console.log('MW1', store.getState())
  const result = next(action)
  console.log('MW1', store.getState())
  return result
}

const store = createStore(rootReducer, applyMiddleware(thunk, log))

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
)
