import React from 'react'
import style from './App.module.css'

// Components
import Nav from './components/Nav/Nav'

// route
import { Route, Switch } from 'react-router-dom'

// page
import HomePage from './pages/HomePage'
import TaskListPage from './pages/TaskListPage'
import AboutPage from './pages/About'

console.log('style', style)
const App = () => (
            <>
                <Nav />
                <div className={style.mainblock}>
                <div className="container">
                    <Switch>
                        <Route path='/' exact render={() => <HomePage leng='en' />}/>
                        <Route path='/tasklist' component={TaskListPage}/>
                        <Route path='/about' component={AboutPage}/>
                        <Route render={() => <h1>404</h1>}/>
                    </Switch>
                </div>
                </div>
            </>
)

export default App
