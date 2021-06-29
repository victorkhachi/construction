import React from 'react';
import {Link} from 'react-router-dom'

const Nav = (prop) => {
    return (
        <div className='hiddenNav' style={{top:`${prop.top}`}}>
            <Link to='/'>Home</Link>
            <Link to='/services' >Services</Link>
            <Link to='/projects'>projects</Link>

        </div>
    );
}

export default Nav;
