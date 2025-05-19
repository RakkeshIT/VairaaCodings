import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './Test'
import Render from './Render'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Test /> */}

      <Render/>
    </>
  )
}

export default App
