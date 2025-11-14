import React, { useContext, useEffect, useRef } from 'react'
import './Navbar.css'
import { NavLink, useHref, useNavigate } from 'react-router-dom'
import eventdata from './assets/Eventsdata'
export default function Navbar() {
  
  const {islogin} = useContext(eventdata)
 
  

  return (
    <>
    <div className="navbar">
      <h1>BookMyEvent</h1>
      <div className="pages" >
       
          <NavLink to="/" className="page">Home</NavLink>
<NavLink to="/event" className="page">Events</NavLink>
<NavLink to="/host" className="page">Host</NavLink>

{!islogin ? (
  <NavLink to="/login" className="page">Login</NavLink>
) : (
  <NavLink to="/profile" className="page">Profile</NavLink>
)}

      </div>
    </div>
    </>
  )
}
