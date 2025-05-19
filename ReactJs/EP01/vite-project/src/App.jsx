import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './Test.jsx'
import Demo from './Demo.jsx'
import Layout from './Layout/Layout.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Test/>}/>
            <Route path='/about' element={<Demo/>}/>
          </Route>
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
