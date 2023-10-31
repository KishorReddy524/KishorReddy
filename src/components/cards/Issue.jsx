import React, { useState } from 'react';
import './issue.css'

export default function Issue (props={classname:""}) {
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
console.log("classnamess",props,classname)
  return (
    <div className={classname}>
    <div className={tks?'issue-off':'issue'}>
        <div className='isu-header'>
            <p>Let us know about the Issue you are facing right now!</p>
        </div>
        <div className='isu-dvd'><img src='/images/Divider.svg' alt=''/></div>
        <div>
            <label>Choose a section</label>
         </div>
        <div className='isu-drop'>
        <select name="" id="">
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
         <div className='isu-text'>
            <textarea placeholder='Write here...' rows="6" cols="48"></textarea>
         </div>
         <div className='isu-attach'><img src='/images/Attach.svg' alt=''/></div>
         <div className='isu-btn'>
            <button onClick={handelSubmit}>Submit</button>
         </div>
    </div>
    <div >
    <div className={tks1?'isu-msg':'isu-off'}>
        <p>Thanks for bringing the issue to our attention. We'll review it shortly and provide an update soon!</p>
    </div>
    <div className={tks1?'isu-tgl':'isu-off'} ></div>
    </div>
    </div>
  )
}
