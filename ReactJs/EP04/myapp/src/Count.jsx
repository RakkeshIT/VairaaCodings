import { useState } from "react"

const Count = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Count Project</h1>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}


export default Count