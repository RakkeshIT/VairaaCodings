import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const [store, setStore] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();

                setStore(data);
            } catch (error) {
                console.log("Data Not Fetched", error);
            }
        }

        fetchData()
    },[])
  return (
    <div>
        {
            store.map((items) => (
                <ul>
                    <li>{items.name}</li>
                    <li>{items.email}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default Fetch