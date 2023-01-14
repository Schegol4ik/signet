import React from 'react';
import {NavLink} from "react-router-dom";
import './producer-object.scss'

const ProducerObject = ({to, url, title}) => {
    return (
            <NavLink to={to}>
                <div className='wrapper--producer' style={{backgroundImage: `url(${url})`}}>
                    <h2>{title}</h2>
                </div>
            </NavLink>
    );
};

export default ProducerObject;