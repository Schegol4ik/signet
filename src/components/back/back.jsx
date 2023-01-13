import React from 'react';
import {FaArrowLeft} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import './back.scss'

const Back = ({to}) => {
    return (
        <div className='wrapper--back'>
           <NavLink to={to}><FaArrowLeft className='icon'/></NavLink>
        </div>
    );
};

export default Back;