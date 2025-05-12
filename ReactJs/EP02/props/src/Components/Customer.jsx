import React from 'react'

const Customer = ({List}) => {
  return (
    <>
        <h1>Customer List</h1>
        <ul>
            {List.map((Value) => (
                <li>{Value}</li>
            ))}
        </ul>
    </>
  )
}

export default Customer