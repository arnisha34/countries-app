import React from 'react'
import { BsMoon, BsMoonFill } from 'react-icons/bs'


export default function Navbar() {
  return (
    <div className='navbar container'>
      <div className='row'>
        <div className='logo col-md-9'>
          <h4>Where in the world?</h4>
        </div>
        <div className='dm-toggle col-md-3'>
          <BsMoon  /> <h6>Dark Mode</h6>
        </div>
      </div>
    </div>
  )
}
