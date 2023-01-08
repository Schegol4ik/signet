import React from 'react';
import {NavLink} from "react-router-dom";

const NavTitle = ({title, slug}) => {
    return (
        <NavLink to={slug}>
            <h3>{title}</h3>
        </NavLink>
    );
};

export default NavTitle;