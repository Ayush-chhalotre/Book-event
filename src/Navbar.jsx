import React, { useContext, useRef } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import eventdata from './assets/Eventsdata'
export default function Navbar() {
  const {islogin} = useContext(eventdata)
  return (
    <>
    <div className="navbar">
      <h1>BookMyEvent</h1>
      <div className="pages" >
        <Link to={"/"} className="page" >Home</Link>
        <Link to={"event"} className='page' >Events</Link>
        <Link to={"Host"} className='page'>Host</Link>
        
          
            <Link to={"login"} className='page'>Login</Link>
          

      </div>
    </div>
    </>
  )
}
