import React from 'react';
import '../styles/style.css';

function NavItem(props) {
    return (
        <li className="navitem">
            <a className="navlink" href={props.href}>
                {props.children}
            </a>
        </li>
    )
}

export default NavItem
