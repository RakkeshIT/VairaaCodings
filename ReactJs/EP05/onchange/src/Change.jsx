import React, { useState } from 'react'

const Change = () => {
    const [data, setData] = useState('');
  return (
    <>
       <input type="text" value={data} onChange={ (e) => setData(e.target.value) }/>
       <p>{data}</p>
    </>
  )
}

export default Change