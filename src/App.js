import React from "react";
import "./App.css";
import { useState } from 'react';


  function App() {
  let [count, setCount] = useState(0);
  let [clicker, setTicker] = useState(+1);

  let addCount = () => {
    setCount((count += clicker));
  };

  let updateCount = () => {
    if (count < 10) {
      alert(`You can't afford that!`);
    } else {
      setCount(count - 10);
      setTicker(clicker + 1);
    }
  };
  const WannaPlay = () => {
    setCount(0);
    setTicker(1);
  };
  
  if (count >= 100) {
    return (
      <div>
        <h2>You Win!</h2>
        <button onClick={WannaPlay}>Play again?</button>
      </div>
    );
  }
  return (
    <div>
      <main>
       
        <div>
          <h1>Current Score: {count}</h1>
        </div>
        <div>
          <button onClick={addCount}>+{clicker}</button>
        </div>

        <div>
          <button onClick={updateCount}>
            Pay 10 points to change from +{clicker} to +{clicker + 1}
          </button>
        </div>
      </main>
    
    </div>
  );
}

export default App;