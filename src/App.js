import React from "react";
import "./App.css";
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <main>
      <h2>Current Score</h2>
      <button>+1</button>
      <button>Pay 10 points to change from +1 to +2</button>
    </main>
  );
}

export default App;
