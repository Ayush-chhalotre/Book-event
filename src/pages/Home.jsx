import React, { useContext, useEffect } from 'react'
import Middlepart from '../Middlepart'
import Eventscard from '../Eventscard'
import eventdata from '../assets/Eventsdata'

export default function Home() {
  const {data,logdata} = useContext(eventdata)
    //  useEffect(()=>{ <Route path='/' element={<Home/>}/>},[logdata])
  return (
    <>
    <Middlepart/>
     <h1 className='pe'>Popular Events</h1>
        <Eventscard data={data}/>
     

    </>
  )
}
