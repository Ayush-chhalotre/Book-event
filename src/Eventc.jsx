import React, { useContext } from 'react'
import eventdata from './assets/Eventsdata'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Eventc(props) {
  let navigate=useNavigate()
  const {islogin,myevent,setmyevents} = useContext(eventdata)
  return (
    <div className="card" key={props.e.id}>
            <img src= "https://media.istockphoto.com/id/501387734/photo/dancing-friends.jpg?s=612x612&w=0&k=20&c=SoTKXXMiJYnc4luzJz3gIdfup3MI8ZlROFNXRBruc10="/>
           <div className="cardtext">
             <h2>{props.e.title}</h2>
            <p>{props.e.date}</p>
            <p>{props.e.location}</p>
            <button className="book" onClick={()=>{
              islogin?
              setmyevents([props.e,...myevent])
              :navigate('login')
            }}>Book now</button>
            </div>
          </div>
  )
}
