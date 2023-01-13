import React from 'react'
import {NavLink} from 'react-router-dom'
import './main-object.scss'

const MainObject = ({to, title, url}) => {
    return (
        <NavLink to={to}>
            <div className='object--wrapper' style={{backgroundImage: `url(${url})`}}>
                <h3>{title}</h3>
            </div>
        </NavLink>
    )
}

export default MainObject