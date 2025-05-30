import { useEffect, useMemo, useState } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const DoubletheNumber = useMemo(() => {
    console.log("Use Memo is Executed");
    return count * 2;
  }, [count]);

  useEffect(() => {
    console.log("Use Effect Executed");
  }, [count]);

  return (
    <>
      <h1>Use Memo Hook</h1>
      <h1>Number : {count}</h1>
      <h2>DoubletheNumber : {DoubletheNumber}</h2>

      <h3
        style={{
          color: "yellowgreen",
        }}
      >
        Number: {number}
      </h3>
      <button onClick={() => setNumber(number + 1)}>Change No</button>
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>Double</button>
    </>
  );
};

export default Memo;
