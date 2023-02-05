import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
  const [score, setScore] = useState(0)
  const [game, setGame] = useState(1)
  const [show, setShow] = useState(true)
  
  const handleClick = () => {
    setScore(score + game)
    if (score >= 100){
      setShow(false)
    }
  }

  const upgradeScore = () => {
    if (score >= 10){
      setScore(score - 10)
      setGame(game + 1)
    } else {
      alert("You can't afford that!")
    }
  }

  const resetScore = () => {
    setScore(0)
    setGame(0)
    setShow(true)
  }
    return (
      <main>
        <h1>React State Lab</h1>
        <h1> Current Score: {score}</h1>
        <button onClick={() => handleClick()}> +{game} </button> <br></br>
        <button onClick={() => upgradeScore()}> Pay 10 points to change from +{game} to +{game + 1} </button>
        <h1> {show} </h1>
        <button onClick={() => resetScore()}> Play again </button>
      </main>
    );
}

export default App;
