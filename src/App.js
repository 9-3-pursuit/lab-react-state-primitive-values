import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
  const [score, setScore] = useState(0)
  console.log(setScore, score)

  const handleClick = () => {
    setScore(score + 1)
    console.log(setScore, score)
  }


  const resetScore = () => {
    setScore(0)
    
  }
    return (
      <main>
        <p>React State Lab</p>
        <h1> Current Score: {score}</h1>
        <button onClick={() => handleClick()}> +1 </button>
        <button onClick={() => handleClick()}> Pay 10 points to change from +{score} to +{score + 1} </button>
        <button onClick={() => resetScore()}> Play again </button>
      </main>
    );
}

export default App;
