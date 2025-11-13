
import React, { useContext } from 'react'
import './Searchbar.css'
import eventdata from './assets/Eventsdata'
export default function Searchbar() {
  let {cityname,setcityname,data,setfilterd,setdata} = useContext(eventdata)
  return (
    <>
    <div className="searchbar">
        <input type="text" placeholder='Enter your city' onChange={(e)=>{setcityname(e.target.value);}} />
        {/* {console.log(cityname)} */}
        <button onClick={()=>{
        setdata(data.filter(event=>event.location.toLowerCase().includes(cityname.toLowerCase())))}}>search</button>
    </div>
    </>
  )
}
