import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Effect from './Effect'
import Ref from './Ref'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Effect/> */}
      <Ref/>
    </>
  )
}

export default App
