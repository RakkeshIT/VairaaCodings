import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Layout.css'
const Layout = () => {
  return (
   <>
     <nav className='N_Container'>
        <div className='N_Title'>
            <h1>Vairaa</h1>
        </div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="">Contact</Link></li>
            <li><Link to="">Helo</Link></li>
        </ul>
    </nav>

    <main>
        <Outlet/>
    </main>
   </>
  )
}

export default Layout