import React, { useState } from 'react'

const State = () => {
    const [data, setDate] = useState([ 
        {name:"Rahul", age: 23, Mark:556},
        {name:"Arun", age:24, Mark:256},
        {name:"Raj", age:25, Mark:456},
        {name:"Ravi", age:26, Mark:356},   
    ])
  return (
    <div>
      {
        data.map((items,index)=>(
            <div>
                <h1>{index} : {items.name} :  {items.Mark}</h1>
            </div>
        ))
      }
    </div>
  )
}

export default State