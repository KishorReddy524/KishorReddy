import React, { useState } from 'react';
import './contact.css'

export default function Contact (props={classname:""}) {
    const [tks,setTks]=useState(false)
    const [tks1,setTks1]=useState(false)
    const myTimeout = setTimeout(myGreeting, 2000);

function myGreeting() {
   setTks1(false)
}

function myStopFunction() {
  clearTimeout(myTimeout);
}
    const handelSubmit=()=>{
        setTks(true)
        setTks1(true)
        myStopFunction()

    }
    

    const {classname}=props;
  return (
    <div className={classname}>
    <div className={tks?'issue-off':'issue'}>
        <div className='cont-header'>
            <p>Get in Contact with us for your queries!</p>
        </div>
        <div className='cont-dvd'><img src='/images/Divider.svg' alt=''/></div>
        <div>
            <label>Your Name</label>
         </div>
         <div className='cont-name'>
            <input placeholder='Enter your Name'/>
         </div>
        {/* <div className='cont-drop'>
        <select name="" id="">
    <option value="Select">Select</option>
     <option value="Interview Questions">Interview Questions</option>
     <option value="Concept cards">Concept cards</option>
    <option value="Practice Questions">Practice Questions</option>
    <option value="Quizzes">Quizzes</option>
    <option value="Other">Other</option>

  </select>
        </div> */}
        <div>
            <label>What would you like to ask? *</label>
         </div>
         <div className='cont-text'>
            <textarea placeholder='Write here...' rows="5" cols="48"></textarea>
         </div>
         {/* <div className='cont-attach'><img src='/images/Attach.svg' alt=''/></div> */}
         <div className='cont-btn'>
            <button onClick={handelSubmit}>Submit</button>
         </div>
    </div>
    <div >
    <div className={tks1?'cont-msg':'cont-off'}>
        <p>Thanks for reaching out to us! We will get back to you as soon as possible</p>
    </div>
    <div className={tks1?'cont-tgl':'cont-off'} ></div>
    </div>
    </div>
  )
}
