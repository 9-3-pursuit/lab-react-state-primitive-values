import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
  const [count, setCount] = useState(0)
  console.log(setCount, count)

  const handleClick = () => {
    setCount(count + 1)
    console.log(setCount, count)
  }
    return (
      <main>
        <p>React State Lab</p>
        <h1> Current Score: {count}</h1>
        <button onClick={() => handleClick()}> +1 </button>
      </main>
    );
}

export default App;
