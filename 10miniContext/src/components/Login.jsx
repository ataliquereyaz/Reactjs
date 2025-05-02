import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'


function Login() {
     const [username,setUsername] = useState("")
     const [password, setPassword]= useState("")

     const {setUser}=useContext(UserContext)

     const handleChange=(e)=> {
           e.preventDefault()
           setUser({username,password})
     }

  return (
    <div className="text-center text-blue-500 p-4 m-2" >
      <h2>Login</h2>
       <input className='text-center'
       type='text'
       value={username}
       onChange={(e)=>{setUsername(e.target.value)}}
       placeholder='username'/>
       <input type='text'
       value={password}
       onChange={(e)=>{setPassword(e.target.value)}}
       placeholder='password'/>
       <button
       className='bg-gray-500 rounded-xl'
        onClick={handleChange}>Submit</button>
    </div>
  )
}

export default Login
