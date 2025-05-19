import React from 'react'
import './Styles/About.css'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className='About_Container'>
        <h1>About Page</h1>
        <Link to='/'>Home Page</Link>
    </div>
  )
}

export default About