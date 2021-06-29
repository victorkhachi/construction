import React from 'react'
import Road from './images/road.jpg'

export default function Home() {
    return (
        <div style={{height:'100%',width:'100%'}}>
            <div className='about-us'>
              
               <div className='write-up'>
                  <h1>ABOUT US</h1>
                  <p>Eulex Construction Company Limited is a  Building and Civil Engineering
                      construction company capable of handling every conceivable design in building and related services, Core competencies cover all project phases, including  planning, design, engineering, construction, maintenance and operation for building, infrastructure and industry projects.
                  </p>
               </div>
                
            </div>
            <div className='pic'>
                <div>
                   <img src={Road}></img>
                </div>
                <div className='write-up' >
                  <h1>SINCE 1993</h1>
                  <p>We came into Nigeria in February 1993 .it is a Nigerian construction company,
                       headquartered in Lagos state with additional permanent locations in Asaba delta state.
                        The company is represented across Nigeria in structural engineering and infrastructure works, 
                        and in Southern Nigeria through domestic and international Industry projects
                  </p>
                </div>
            </div>
        </div>
    )
}
