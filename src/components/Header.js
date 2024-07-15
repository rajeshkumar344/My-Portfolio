import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header flex justify-around align-middle pt-4'>
        <div className='flex gap-4'>
        <Link to="/"> <img className='myphoto'
          src='./images/profile pic.jpg'alt='Profile pic'/></Link>
          <Link to="/">  <h1 className='main text-blue-200'>Rajesh Kumar</h1></Link>
        </div>
        <div className=' flex justify-between gap-4 font-normal  text-blue-200 text-xl'>
           <Link to="/about"> <span>About</span></Link>
           <Link to="/contact"> <span> Contact</span></Link>
            <Link to="/projects">  <span>Projects</span></Link>
        </div>
    </div>
  )
}
