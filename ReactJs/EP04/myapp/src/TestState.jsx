import { useState } from "react"

const TestState = () => {

    const [name, setName] = useState("John");
    const [number, setNumber] = useState(100);
    const [brande, setBrand] = useState("BMW")
    return (
        <div>
            <h1>My Name is " {name} " </h1>
            <button onClick={() => setName("Alex")}>Change Name</button>

            <h2>{number}</h2>
            <button onClick={() => setNumber(0)}>Reset</button>

            <h3>{brande}</h3>
            <button onClick={() => setBrand("Adi")}>Change</button>
        </div>
    )
}

export default TestState