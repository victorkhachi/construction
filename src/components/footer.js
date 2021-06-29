import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        
        <div className='footer'>
          <div className='foot-content'>
            <div className='nav'>
                    <Link to='/'><div style={{ color: 'white' }}>home</div></Link>
                <Link to='/services'><div style={{color:'white'}}>services</div></Link>
                    <Link to='/projects'><div style={{ color: 'white' }}>projects</div></Link>
                
            </div>
            <div className='address'>
               <h3 style={{textDecoration:'underline',marginBottom:'0%'}}>Head office</h3>
               
               <p>behind fed, housing estate,isheri odofin,
                   New London baruwa, Lagos state
               </p>
                <h3 style={{ textDecoration: 'underline', marginBottom: '0%',marginTop:'5%' }}>E-mail</h3>
                <p>eulexconstcoynigltd@gmail.com </p>
            </div>
            </div>

                <p style={{textAlign:'center',width:'100%',fontSize:'0.5em',marginTop:'5%'}}>website designed by @scarr_achi</p>

        </div>
        
    )
}
