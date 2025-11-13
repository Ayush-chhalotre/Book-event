import React from 'react'
import Maindiv from './Maindiv'
import eventdata from './assets/Eventsdata'
import Dataprovider from './assets/Dataprovider'
import { BrowserRouter } from 'react-router-dom'
 
export default function Appp() {
  return (
    <>
    
    <Dataprovider>
    <Maindiv/>
    </Dataprovider>
   
    
    </>
  )
}
