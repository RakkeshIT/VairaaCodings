import React, { useState } from 'react'

const Example = () => {
    const [items, setItems] = useState({
        name:'', age:''
    })
  return (
    <>
        <label htmlFor="">Name </label>
        <br />
        <input type="text" name='name'/>
        <br />
        <br />
        <label htmlFor="">Age</label>
        <br />
        <input type="text" name='age'/>
    </>
  )
}

export default Example