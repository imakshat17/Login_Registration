import React from 'react'
import "./Home.css"
import { Link, useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate()
  return (
    <div className='homepage'>
        <h1>Hello Homepage</h1>
       <button> <Link to="/" className='button'>Logout</Link></button>
    </div>
  )
}




export default Home
