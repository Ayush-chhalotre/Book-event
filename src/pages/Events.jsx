import React, { useContext } from 'react'
import Eventscard from '../Eventscard'
import './events.css'
import Searchbar from '../Searchbar'
import eventdata from '../assets/Eventsdata'
export default function Events() {
  const {setdata,setfiltrd,filterd,data} = useContext(eventdata)
  setdata(filterd)
  console.log("dsjshfbk")
  return (
   <> 
   <section>

   <Searchbar/>
   <Eventscard data={data}/>
   </section>
   </>
  )
}
