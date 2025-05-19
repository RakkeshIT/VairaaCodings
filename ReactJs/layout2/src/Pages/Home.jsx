import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
        <div className='Container'>
            <h1>Welcome to My Learning Circle</h1>
            <Link to=''>Learn More</Link>
        </div>
    </>
  )
}

export default Home