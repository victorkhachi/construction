import React from 'react'
import Uncompleted from './images/uncompleted.jpg'
import Real from './images/realestate.jpg'
import Road from './images/roadp.jpg'

export default function Services(prop) {
    return (
        <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}}>
           <div className='services'>
             <div className='service-list'>
                <h1>services </h1>
                <ul>
                  <li>building construction</li>
                  <li>Road construction</li>
                  <li>Real Estate developement</li>
                  <li>Building development</li>
                  <li>Construction Consultancy</li>
                </ul>
              </div>
              <div className='service-write'>
                <div >WHAT A GOOD BUILDING CONTRACTOR CAN DO FOR YOU</div>
                   <p>A good building contractor with a great reputation like EULEX CO. will help to provide a flexible and personal approach to projects. We ensure that your needs and wants are at the forefront of everything we do.

                   You deal solely with us. We deal with the other contractors, taking the stress away from trying to manage the project yourself.

                   We are reputable contractors and use other reputable craftsmen from architects and interior designers all the way through to roofers, plumbers and plasterers. This helps ensure your project is carried out to the highest possible standard, to strict timescales, budgets and to your exact requirements.

                   As building contractors, we help you navigate the maze of regulations associated with undertaking a building project and ensure all the correct paperwork is complete before work begins.

                  Once the work is underway, we will always keep you up to date with how it’s going and let you know immediately if there are any unforeseen hitches to overcome.

                  Want to know how we can enhance your next home improvement or building project? Contact us today!
                  </p>
              </div>
           </div>
           <div className='pictures' style={{width:'100%',height:'40%',marginTop:'10%'}}>
              <div><img src={Road}/></div>
                <div><img src={Real} /></div>
                <div><img src={Uncompleted} /></div>

           </div>
        </div>
    )
}
