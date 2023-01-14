import React, {useEffect, useState} from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import Search from "../search/search";
import Logo from "../logo/logo";
import './header.scss'


const Header = ({devices, liquids}) => {

    const [value, setValue] = useState('')

    const location = useLocation()
    useEffect(() => setValue(''),[location])

  return (
    <div className='wrapper--header'>
      <NavLink to='/signet'><Logo/></NavLink>
        <div className='header__search'>
                <input
                    type="text"
                    value={value}
                    onChange={ (e) => setValue(e.target.value)}
                />

            {value.length !== 0
                ? <Search value={value} liquids={liquids} devices={devices}/>
                : <></>
            }
        </div>
    </div>
  )
}

export default Header