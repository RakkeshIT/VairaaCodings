import { useState } from 'react'

import './App.css'
import State from './State'
import Change from './Change'
import Login from './Login'
import Example from './Example'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <State/> */}
      {/* <Change/> */}
      {/* <Login/> */}
      <Example/>
    </>
  )
}

export default App
