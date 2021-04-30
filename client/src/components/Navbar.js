import React from 'react';
import '../styles/style.css';

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                { props.children }
            </ul>
        </nav>
    );
}

export default Navbar;
