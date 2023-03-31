import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
  const [num, setNum] = useState(0)
  function addOne(){
    const selectIndex = num +1
    setNum(selectIndex)
    if(num >= 10){
      const addTen = num + 10
      setNum(addTen)
    }
  }
    return (
      <main>
        <p>Current Score:{num}</p>
        <button onClick={addOne}>+1</button>
      </main>
    );
}

export default App;
