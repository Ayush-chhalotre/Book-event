import React, { useState } from 'react'
import eventdata from './Eventsdata'
export default function Dataprovider({children}) {
  
let [cityname, setcityname] = useState("")
let [filterd,setfilterd]= useState([{
    "id": 1,
    "title": "Neon Night Market",
    "date": "2025-12-05",
    "location": "Japan",
    "image": {
      "url": "https://via.placeholder.com/800x450.png?text=Neon+Night+Market",
      "alt": "Neon Night Market — bustling evening street market with colorful neon signs"
    }
  },
  {
    "id": 2,
    "title": "Solar Symphony Festival",
    "date": "2026-04-18",
    "location": "Chile",
    "image": {
      "url": "https://via.placeholder.com/800x450.png?text=Solar+Symphony+Festival",
      "alt": "Solar Symphony Festival — outdoor orchestra under sunset skies"
    }
  },
  {
    "id": 3,
    "title": "Rainforest Lantern Walk",
    "date": "2025-11-21",
    "location": "Brazil",
    "image": {
      "url": "https://via.placeholder.com/800x450.png?text=Rainforest+Lantern+Walk",
      "alt": "Rainforest Lantern Walk — lit lanterns winding through lush jungle paths"
    }
  },
  {
    "id": 4,
    "title": "AeroTech Expo",
    "date": "2026-06-02",
    "location": "Germany",
    "image": {
      "url": "https://via.placeholder.com/800x450.png?text=AeroTech+Expo",
      "alt": "AeroTech Expo — exhibition hall with drones and aviation tech displays"
    }
  },])
    const [data, setdata] = useState(filterd)
let [logdata,setlogdata]=useState([])
let [islogin,setislogin]=useState(false)
let [myevent,setmyevents]=useState([])
  return (
    <eventdata.Provider value={{data,setdata,cityname,setcityname,filterd,setfilterd,logdata,setlogdata,islogin,setislogin,myevent,setmyevents}}>
       {children}
    </eventdata.Provider>
  )
}
