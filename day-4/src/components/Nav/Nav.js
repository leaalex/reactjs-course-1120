import React from 'react'
import {NavLink} from "react-router-dom";

const Nav = () => (
    <ul className="nav nav-pills justify-content-center">
        <li className="nav-item">
            <NavLink className="nav-link" activeStyle={{border: '1px solid gray'}} to="/" exact> Домашнаяя страница</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" activeClassName='nv-active' to="/tasklist">Список задач</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/about">О нас</NavLink>
        </li>
    </ul>
)
export default Nav