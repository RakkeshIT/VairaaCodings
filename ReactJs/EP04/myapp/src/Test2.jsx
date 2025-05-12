import React, { useState } from 'react'

const Test2 = () => {
    const [value, setValue] = useState("Arun")

    // function ChangeName() {
    //     setValue("Akalya")
    // }


    const ChangeName = () => {
        setValue("Akalya")
    }
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={ChangeName}>Change Name</button>
    </div>
  )
}

export default Test2