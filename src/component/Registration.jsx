import React from 'react'
import { useState } from 'react'
import "./Registration.css"
import axios from "axios"
import { Link, redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
    const [user,SetUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })
    const navigate = useNavigate();
    const handleChange= e=>{
        
          const {name,value}=e.target
          SetUser({
            ...user,
            [name]:value
          })
    }
    const register = () => {
        const { name, email, password, reEnterPassword } = user;
      
        if (name && email && password && password === reEnterPassword) {
          const headers = {
            'Content-Type': 'application/json',
          };
      
          axios.post("http://localhost:5000/register", user, { headers })
            .then(response => {
              console.log(response.data);
              alert("Registration Completed")
              navigate("/")
            })
            .catch(error => {
              console.error("Error during registration:", error.message);
              // Add more specific error handling based on the error type
            });
        } else {
          alert("Invalid input. Please check your details.");
        }
      };
    
      
  return (
    <div className='register'>
         
       <h1>Register</h1>
       <input type="text"name="name" value={user.name}  onChange={handleChange}placeholder='Enter Your Name' />
       <input type="email" value={user.email}
       name="email" onChange={handleChange}placeholder='Enter Your Email' />
       <input type="password" value={user.password}name="password" onChange={handleChange}placeholder='Enter Your Password' />
       <input type="password" value={user.reEnterPassword}name="reEnterPassword" onChange={handleChange}placeholder='Re-enter Your Password' />
       <div className='button' onClick={register}>Register</div>
       <div>or</div>
      <button class="login"> <Link to="/" className='button'>Login</Link></button>
       
    </div>
  )
}

export default Registration
