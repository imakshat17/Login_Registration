import React, { useState } from 'react'
import "./Login.css"
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"
// import { useNavigate } from 'react-router-dom'
const Login = () => {

   
    const [user,SetUser]=useState({
        // name:"",
        email:"",
        password:"",
        // reEnterPassword:""
    })
    const navigate=useNavigate()
    const handleChange= e=>{
        
          const {name,value}=e.target
          SetUser({
            ...user,
            [name]:value
          })
    }
    const login=()=>{
        axios.post("http://localhost:5000/login", user)
  .then(res => alert(res.data.message))
  navigate("/home")
  .catch(error => console.error("Error during login:", error));

    }
  return (
    <div className='login'>
       <h1>Login</h1>
       <input type="email" value={user.email}
       name="email" onChange={handleChange} placeholder='Enter Your Emal' />
       <input type="password" value={user.password} onChange={handleChange}name="password"placeholder='Enter Your Passwprd' />
       <div className='button' onClick={login}>Login</div>
       <div>or</div>
      <button class="regis"> <Link to="/register"className='Link'>Register</Link></button>
    </div>
  )
}

export default Login
