import React, { useState } from 'react'
import './Sidebar.scss'
const Sidebar = ({toggle, setToggle}) => {


    console.log(toggle);
  return (
    <div className={(toggle) ? 'sidebar' : 'sidebar open'}>
        <span className='close-btn' onClick={() => setToggle(!toggle)}>x</span>
        <ul className='sidebar__links'>
            <li>Home</li>
            <li>Services</li>
            <li>News</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Sidebar