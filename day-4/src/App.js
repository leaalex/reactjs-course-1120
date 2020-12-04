import React from "react";
import './App.css';

// Components
import Nav from "./components/Nav/Nav";


// route
import  {Route, Switch} from 'react-router-dom'

// page
import HomePage from "./pages/HomePage";
import TaskListPage from "./pages/TaskListPage";
import AboutPage from "./pages/About";

const  App = ()  =>  (
            <>
                <Nav />
                <div className="container">
                    <Switch>
                        <Route path='/' exact render={() => <HomePage leng='en' />}/>
                        <Route path='/tasklist' component={TaskListPage}/>
                        <Route path='/about' component={AboutPage}/>
                        <Route render={()=> <h1>404</h1>}/>
                    </Switch>
                </div>
            </>
        )

export default App

