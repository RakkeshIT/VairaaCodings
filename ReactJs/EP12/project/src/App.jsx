import { useState } from "react";
import "./App.css";

function App() {
  const [store, setStore] = useState([])
  const [name, setName] = useState('')

  const addTodo = (event) => {
    event.preventDefault()
    setStore([...store, name])
    console.log(store);
  }
  return (
    <>
      <h1 className="text-3xl mb-12">Student List</h1>
      <div className="bg-indigo-600 px-20 py-8 rounded-2xl">
        <form onSubmit={addTodo}>
          <div className="flex gap-5">
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="name"
              value={name}
              onChange={
                (event) => setName(event.target.value)
              }
              placeholder="John"
              required
            />
            <button className="bg-indigo-500 py-1 px-8 rounded-lg cursor-pointer">Add</button>
          </div>
        </form>

        <div className="List bg-indigo-400 mt-10">
          {
            store.map((items) => (
              <p>{items}</p>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default App;
