import React from 'react'
import { BsMoon, BsMoonFill } from 'react-icons/bs'


export default function Navbar({theme, themeToggle}) {

  return (
    <div className='nav-inner container'>
      <div className='row py-4 d-flex align-items-center'>
        <div className='logo col-md-9'>
          <h4>Where in the world?</h4>
        </div>
        <div className='dm-toggle col-md-3 text-end' onClick={themeToggle}>
          {theme === "dark" ? <BsMoonFill  /> : <BsMoon />}&nbsp;&nbsp;&nbsp;
          <span>Dark Mode</span>
        </div>
      </div>
    </div>
  )
}
