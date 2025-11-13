import React, { useContext } from 'react'
import eventdata from './assets/Eventsdata'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Eventc(props) {
  let navigate=useNavigate()
  const {islogin} = useContext(eventdata)
  return (
    <div className="card" key={props.e.id}>
            <img src= 'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2'/>
           <div className="cardtext">
             <h2>{props.e.title}</h2>
            <p>{props.e.date}</p>
            <p>{props.e.location}</p>
            <button className="book" onClick={()=>{
              islogin?null:navigate('login')
            }}>Book now</button>
            </div>
          </div>
  )
}
