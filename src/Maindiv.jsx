import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import Middlepart from './Middlepart'
import Eventscard from './Eventscard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import Host from './pages/Host'
import Login from './pages/Login'
import eventdata from './assets/Eventsdata'
import Profile from './pages/Profile'
export default function Maindiv() {
  const {islogin,logdata} = useContext(eventdata)
  return (
    <> 
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
        
      
       <Route path='event' element={<Events/>}/>


       <Route path='host' element={islogin?<Host/>:<Login/>}/>
        
      
        <Route path='login' element={<Login/>}/>
        <Route path='profile' element={islogin?<Profile/>:<Home/>}/>

    </Routes>
   </BrowserRouter>
    
    </>
  )
}
