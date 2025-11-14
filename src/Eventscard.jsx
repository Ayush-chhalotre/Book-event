import React, { useContext } from 'react'
import eventdata from './assets/Eventsdata'
import './Eventscard.css'
import Eventc from './Eventc'
export default function Eventscard(props) {
  // let {data} = useContext(eventdata)
  // console.log(data)
  return (
    <>
   
    <div className="cards">
     {props.data && props.data.map((event)=>(
      <Eventc e={event} />
     ))}
    </div>
    </>
  )
}
