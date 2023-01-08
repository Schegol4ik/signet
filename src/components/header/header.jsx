import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Search from "../search/search";
import Logo from "../logo/logo";
import { AiOutlineEnter } from "react-icons/ai";
import './header.scss'


const Header = ({devices, liquids}) => {

    const [value, setValue] = useState('')

  return (
    <div className='wrapper--header'>
      <NavLink to='/'><Logo/></NavLink>
        <div className='header__search'>
                <input
                    type="text"
                    value={value}
                    onChange={ (e) => setValue(e.target.value)}
                />
                <AiOutlineEnter className='search__logo'/>
            {value.length !== 0
                ? <Search value={value} liquids={liquids} devices={devices}/>
                : <></>
            }
        </div>
    </div>
  )
}

export default Header