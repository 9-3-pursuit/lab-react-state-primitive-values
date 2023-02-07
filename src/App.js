import React, {useState} from "react";
import "./App.css";

function App () {
  let [counter, setCounter] = useState(1);
  let [score, setScore] = useState(0);
  let changeCounter = () => {

    if(score <10 ){
      alert("You can't afford that!")
    } else {
      setScore((score-=10))
      setCounter(counter+1)
    }
  }

  let changeScore = () => {
    setScore((score+= counter))
  }

  if (score >= 100) {
    const refresh = () => {
      setScore(0)
      setCounter(1)
    }
    return(
      <main>
        <div>
          <h2>You Win!</h2>
          <button type="submit" onClick ={refresh}>Play again?</button>
        </div>
      </main>
    )

  } else {
    return (
      <main>
        <h1>Current Score: {score}</h1>
        <div className="holdsButtons">
          <button style={{display: "visible"}} onClick={changeScore}>
            {" "} + {counter}
            <br></br>
          </button>
          <button style ={{display:"visible"}} onClick={changeCounter}>
            Pay 10 points to change from +{counter} to +{counter +1}
          </button>
        </div>
      </main>
    );
}
}

export default App;
