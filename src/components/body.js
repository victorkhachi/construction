import React from 'react'
import Header from './header'
import Footer from './footer'
import Nav from './nav'
export default function Body(props) {
    const [top,setTop]= React.useState('-50%')
      const click=(e)=>{
         setTop('0%')
         }
     const close=()=>{
         setTop('-50%')
     }
    return (
        <div  style={{width:'100%',height:'100%'}}>
            <Header menu='menu'   click={click} />
            <Nav onClick={close} top={top}/>
            <div onClick={close} className='body'>
                <div className='home-pic' style={{backgroundImage:`url(${props.img}`}}>
                <div >
                    {props.heading}
                </div>
            </div>
            <div className='content'>
                {props.content}
            </div>
            </div>
            <Footer />
        
        </div>
    )
}
