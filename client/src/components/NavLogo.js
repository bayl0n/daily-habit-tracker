import React from 'react'
import { ReactComponent as LogoIcon } from '../icons/logo.svg';

function NavLogo(props) {
    return (
        <div>
            <a href={props.href}>
                <LogoIcon className="logo" />
            </a>
        </div>
    )
}

export default NavLogo
