import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
function App() {

  const [data, setData] = useState("React")
  const [value, setValue] = useState("Rajesh")
  return (
    <>
      <h1>Hello Student, I am {data}</h1>
      <h2>Welcom {data}, I am {value}</h2>
    </>
  )
}

export default App
