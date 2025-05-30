import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [store, setStore] = useState([]);
  const [form, setForm] = useState({
    name: "",
  });

  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response.data);
    setStore(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  // Onchange Events
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previousValue) => ({ ...previousValue, [name]: value }));
  };


  // POST
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      form
    );

    setStore((previousValue) => [...previousValue, response.data]);
  };


  return (
    <>
      <h1>User Names</h1>
      {store.map((items, index) => (
        <ul>
          <li>
          {index} - {items.name}
          </li>
        </ul>
      ))}

      <form onSubmit={handleSubmit}>
        <br />
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Enter Your Name"
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
