import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Home Page</h1>
        <br />
        <Link to='/about'>About Page</Link>
    </div>
  )
}

export default Home