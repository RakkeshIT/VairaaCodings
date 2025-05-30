import React, { useState } from 'react'

const Render = () => {
    const [value, setalue] = useState(false)
    const Age = 20;
  return (
    <div>
        <h1>Conditional Rendering</h1>
        {/* Syntax */}
        {/* {condition ? true : false} */}
        {Age >= 18 ? <h1>Adult</h1> : <h1>Minor</h1>}
        {value ? <h1>True</h1> : <h1>False</h1> }
    </div>
  )
}

export default Render