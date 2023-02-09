import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
const [score, setScore] = useState(0)
const [game, setGame] = useState(1)
const [show, setShow] = useState(false)

const handleClick = () => {
  setScore(score + game)
  if ((score + game) >= 100){
    setShow(true)
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
  setGame(1)
  setShow(false)
}

  return (
    <main>
      <h1 className={show ? "hidden" : ""}> Current Score: {score}</h1>
      <button className={show ? "hidden" : ""} onClick={() => handleClick()}> +{game} </button> <br></br>
      <button className={show ? "hidden" : ""} onClick={() => upgradeScore()}> Pay 10 points to change from +{game} to +{game + 1} </button>
      <h1 className={show ? "" : "hidden"}> You Win! </h1>
      <button className={show ? "" : "hidden"} onClick={() => resetScore()}> Play again? </button>
    </main>
  );
}

export default App;