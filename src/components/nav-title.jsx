import React from 'react';
import {NavLink} from "react-router-dom";

const NavTitle = ({title, slug}) => {
    return (
        <NavLink to={slug}>
            <h4>{title}</h4>
        </NavLink>
    );
};

export default NavTitle;