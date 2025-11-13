import React, { useContext } from 'react'
import eventdata from './assets/Eventsdata'
import './Eventscard.css'
import Eventc from './Eventc'
export default function Eventscard() {
  let {data} = useContext(eventdata)
  // console.log(data)
  return (
    <>
   
    <div className="cards">
     {data && data.map((event)=>(
      <Eventc e={event} />
     ))}
    </div>
    </>
  )
}
