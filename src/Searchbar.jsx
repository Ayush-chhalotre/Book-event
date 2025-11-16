
import React, { useContext } from 'react'
import './Searchbar.css'
import eventdata from './assets/Eventsdata'
export default function Searchbar() {
  let {cityname,setcityname,data,setfilterd,setdata} = useContext(eventdata)
  let sf=()=>
{

        setdata(data.filter(event=>event.location.toLowerCase().includes(cityname.toLowerCase())))
} 
 return (
    <>
    <div className="searchbar">
        <input onKeyDown={(e)=>{e.key==="Enter"?sf():null}} type="text" placeholder='Enter your city' onChange={(e)=>{setcityname(e.target.value);}} />
        {/* {console.log(cityname)} */}
        <button  onClick={sf()}>search</button>
    </div>
    </>
  )
}
