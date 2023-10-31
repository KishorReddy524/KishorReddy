import React, { useState } from 'react';
import './sugest.css'

export default function Sugest (props={classname:""}) {
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
        <div className='sug-header'>
            <p>Share your Suggestions with us for a chance to earn rewards!</p>
        </div>
        <div className='sug-dvd'><img src='/images/Divider.svg' alt=''/></div>
        <div>
            <label>Choose a section</label>
         </div>
        <div className='sug-drop'>
        <select name="" id="">
    <option value="Select">Select</option>
     <option value="Interview Questions">Interview Questions</option>
     <option value="Concept cards">Concept cards</option>
    <option value="Practice Questions">Practice Questions</option>
    <option value="Quizzes">Quizzes</option>
    <option value="Other">Other</option>

  </select>
        </div>
        <div>
            <label>Describe the issue in detail *</label>
         </div>
         <div className='sug-text'>
            <textarea placeholder='Write here...' rows="6" cols="48"></textarea>
         </div>
         <div className='sug-attach'><img src='/images/Attach.svg' alt=''/></div>
         <div className='sug-btn'>
            <button onClick={handelSubmit}>Submit</button>
         </div>
    </div>
    <div >
    <div className={tks1?'sug-msg':'sug-off'}>
        <p>Thanks for your valuable Suggestion!</p>
    </div>
    <div className={tks1?'sug-tgl':'sug-off'} ></div>
    </div>
    </div>
  )
}
