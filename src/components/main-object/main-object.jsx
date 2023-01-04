import React from 'react'
import { NavLink } from 'react-router-dom'
import './main-object.scss'

const MainObject = ({to, title}) => {
  return (
    <div className='object--wrapper'>
        <NavLink to={to} >
          <h3>{title}</h3>
        </NavLink>
        </div>
  )
}

export default MainObject