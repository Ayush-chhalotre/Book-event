import React, { useContext, useEffect } from 'react'
import './Host.css'
import eventdata from '../assets/Eventsdata'
import { BringToFront } from 'lucide-react'
export default function Host() {
  const {data,setdata} = useContext(eventdata)
  useEffect(()=>{console.log(data)},[data])
  function submitform(e){
    e.preventDefault()
    setdata([...data,{id:data.length,title:e.target.title.value,date:e.target.date.value,time:e.target.time.value,location:e.target.location.value,discreption:e.target.disc.value}])
    
  }
  return (
  <>
  <div className="host">

   <form onSubmit={submitform}>
  <h1>Host A New Event</h1>
  <input type="text" name='title' placeholder='Enter title' />
  <input type="date"  name='date'/>
  <input type="time" name='time'/>
  <input type="text" placeholder='location' name='location'/>
  <textarea  placeholder='Enter discreption' name='disc'></textarea>
  <input type="text" placeholder='Enter image url' name='image' />
  <button type='submit' >Create Event</button>
  
    </form></div>
  </>
  )
}
