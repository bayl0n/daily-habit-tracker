import React from 'react';
import '../styles/style.css';

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navlist">
                { props.children }
            </ul>
        </nav>
    );
}

export default Navbar;
