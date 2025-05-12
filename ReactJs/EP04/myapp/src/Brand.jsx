import React, { useState } from 'react'

const Brand = () => {
    const [details, setDetails] = useState(
        {
            brand : "BMW",
            model : "X5",
            price : "300000",
        }
    )
  return (
    <div>
        <h1>My Car Brand Details</h1>
        <ul>
            <li>{details.brand}</li>
            <li>{details.model}</li>
            <li>{details.price}</li>
        </ul>
        <button>Chnage price</button>
    </div>
  )
}

export default Brand