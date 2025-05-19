import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count, setCount] = useState(0)

    {/*
        // Without Array

        useEffevt(() => {
                //code
        })

        // Empty Array -> Once Run

        useEffevt(() => {
                //code
        }, [])

        // With dependencies

        useEffevt(() => {
                //code
        }, [dependencies])
        
    */}

    // Without Array - run every render
    // useEffect(() => {
    //     console.log("Without Array");
    // })


    // Emty Array - runc once
    // useEffect(() => {
    //     console.log("Without Array");
    // },[])

    // With dependencies
      useEffect(() => {
        console.log("Without Array");
    },[count])

    function Icrement() {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={Icrement}>+</button>
        </div>
    )
}

export default Effect