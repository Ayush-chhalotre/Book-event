import React, { useContext, useEffect } from 'react'
import './profile.css'
import eventdata from '../assets/Eventsdata'
import Eventc from '../Eventc'
import Eventscard from '../Eventscard'
import { useNavigate } from 'react-router-dom'
export default function Profile() {
    const {myevent,setmyevents,logdata,setlogdata} = useContext(eventdata)
      const {islogin} = useContext(eventdata)
     
  return (
    <>
    <div className="profilediv">
        <h3>User name : {logdata?.[0]?.id}</h3>
        
          <h3> hosted show</h3>
          <button>update detail</button>
          <button onClick={()=>{
          let oldpass=  prompt("Enter old password")
          if(oldpass===logdata[0].password){let newpass= prompt("Enter new password")
            setlogdata([{...logdata[0],password:newpass}])
            alert('successfully changed')
          }
          else{alert("wrong password")}

          }}>change password</button>
          <h3>booked show</h3>
             <Eventscard data={myevent}/>


    </div>
     
    </>
  )
}
