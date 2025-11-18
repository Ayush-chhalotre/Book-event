import React, { useContext, useEffect } from 'react'
import Eventscard from '../Eventscard'
import './events.css'
import Searchbar from '../Searchbar'
import eventdata from '../assets/Eventsdata'
export default function Events() {
  const {setdata,data} = useContext(eventdata)
  
  // useEffect(setdata(filterd),[filterd])
  // console.log("dsjshfbk")
  return (
   <> 
   <section className='eclas'>

   <Searchbar/>
   <Eventscard data={data}/>
   </section>
   </>
  )
}
