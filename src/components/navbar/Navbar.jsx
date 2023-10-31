import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='nav'>
        <div className='nav-header'>
            <p>THE <span>PRODUCT</span> PLATFORM</p>
        </div>
        <div className='nav-right'>
            <div className='nav-options'><p>Learn</p><img src={'/images/arrow.svg'} alt="" /></div>
            <div className='nav-options'><p>Practice</p><img src={'/images/arrow.svg'} alt="" /></div>
            <div className='nav-user'><img src={'/images/user.svg'}/></div>
        </div>
        </div>
    </div>
  )
}

export default Navbar