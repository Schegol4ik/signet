import React from 'react'
import {NavLink} from 'react-router-dom'
import './main-object.scss'

const MainObject = ({to, title}) => {
    return (
        <NavLink to={to}>
            <div className='object--wrapper'>
                <h3>{title}</h3>
            </div>
        </NavLink>
    )
}

export default MainObject