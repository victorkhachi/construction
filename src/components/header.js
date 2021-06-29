import React from 'react';
import {Link} from 'react-router-dom'

const Header = (props) => {
    return (
        <div className='header'>
            <h2 className='flex column' style={{alignContent:'center',marginLeft:'5%',height:'100%'}}>
                <p style={{display:'flex',justifyContent:'center',alignContent:'center',flexDirection:'column'}}>EULEX <div className='co'>construction company</div></p>
            </h2>
            <nav className='flex top-nav' style={{width:'50%',justifyContent:'space-around',alignItems:'center'}}>
               <Link to='/'>Home</Link>
               <Link to='/services'>services</Link>
               <Link to='/projects'>projects</Link>
               
            </nav>
            <div onClick={props.click} className="menu ">
                <div></div>
                <div></div>
                <div></div>

            </div>
        </div>
    );
}

export default Header;
