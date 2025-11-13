import React, { useContext, useEffect, useRef, useState } from 'react'
import './login.css'
import eventdata from '../assets/Eventsdata'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  // let ref=useRef()
  let [username, setusername] = useState(false)
  let [userpass, setuserpass] = useState(false)
  let navigate = useNavigate()
  const { logdata, setlogdata, islogin, setislogin } = useContext(eventdata)
  useEffect(() => {
    islogin ? navigate("/") : null
  }, [islogin,navigate])
  useEffect(()=>{console.log(logdata)
   
  },[logdata])
  function savedata() {
    
   if( username && userpass ){ setlogdata([...logdata, { id: username, password: userpass }])
  setislogin(true)
  }
  else{alert("Enter ID and Password")}
  
  }
  return (
    <>
      <div className="log">
        <div className="logcard">

          <h1>User Login</h1>
          <input type="text" placeholder='User name' onChange={e => { setusername(e.target.value) }} />
          <input type="password" placeholder='Enter your password' onChange={e => { setuserpass(e.target.value); }} />
          <button onClick={savedata}  >Login</button>
        </div>
      </div>
    </>
  )
}
