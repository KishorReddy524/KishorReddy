 import React, { useState } from 'react'
 import "./Button.css"
import Issue from '../cards/Issue';
import Sugest from '../cards/Sugest';
import Contact from '../cards/Contact';



 export default function Button() {
    const [fab,setfab]=useState('/images/Fab.svg');
    const [opts,setOpts]=useState(false);
    const [list,setList]=useState(true);
    const [row,setRow]=useState(true);
    const [card,setCard]=useState("")
    const handelClick=()=>{
        setOpts(!opts)
        setRow(true)

    if(fab==='/images/Fab.svg'){
    setfab('/images/close.svg')
     setList(true)
     setOpts(true)

    }else{
         setfab('/images/Fab.svg')
 
    }}
    const handelClick1=()=>{
         
        setList(!list)
        setRow(!row)
        setCard("issues")
    }
    const handelClick2=()=>{
        setList(!list)
        setRow(!row)
        setCard("sugest")
    }
    const handelClick3=()=>{
        setList(!list)
        setRow(!row)
        
    }
    const handelClick4=()=>{
        setList(!list)
        setRow(!row)
        setCard('contact')
     }
   return (
     <div> 
        <div className='cards'>
            <Issue classname={card==="issues"?"dummy":"original"}/>
            <Sugest classname={card==="sugest"?"dummy":"original"}/>
            <Contact classname={card==="contact"?"dummy":"original"}/>
 


        </div>
        <div className={row?'btn-box':'btn-col'}>
        <div className={opts?row?'btn-opts':'btn-row':'btn_false'}>
            <div className='btn-list'><button className='btn-fab' onClick={handelClick1}><img src={'/images/Fab1.svg'} alt="" /></button ><p className={list?"btn":"btn-nolist"}>Report an Issue</p></div>
            <div className='btn-list'><button className='btn-fab' onClick={handelClick2}><img src={'/images/Fab2.svg'} alt="" /></button><p className={list?"btn":"btn-nolist"}>Share Feedback</p></div>
            <div className='btn-list'><button className='btn-fab' onClick={handelClick3}><img src={'/images/Fab3.svg'} alt="" /></button><p className={list?"btn":"btn-nolist"}>Give Suggestion</p></div>
            <div className='btn-list'><button className='btn-fab' onClick={handelClick4}><img src={'/images/Fab4.svg'} alt="" /></button><p className={list?"btn":"btn-nolist"}>Contact Us</p></div>

            </div>    
       <div className='btn-fab1'> <button className='btn-fab' onClick={handelClick}><img src={fab} alt="" /></button>
       </div>
        </div>
     </div>
   )
 }
 
 

  
 