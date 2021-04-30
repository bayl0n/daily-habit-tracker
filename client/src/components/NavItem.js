import React from 'react';
import '../styles/style.css';

function NavItem(props) {
    return (
        <li>
            <a href={props.href}>
                {props.children}
            </a>
        </li>
    )
}

export default NavItem
