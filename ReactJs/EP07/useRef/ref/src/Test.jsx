import React from 'react'
import { useRef } from 'react'
const Test = () => {

    const inputRef = useRef(null)

    const handleSubmit = () => {
        inputRef.current.focus()
    }

  return (
    <>
        <h1>useRef Hooks</h1>
        <label htmlFor="user">User</label>
        <br />
        <input type="text" id='user'  ref={inputRef}/>
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Test