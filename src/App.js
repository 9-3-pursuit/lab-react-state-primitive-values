import React from "react";
import "./App.css";
import {useState} from 'react';

function App () {
  const[sum, setSum] = useState(0);
  const[increment, setIncrement] = useState(1)
  
    

  function handleSumClick(){
    setSum(sum + increment)
// console.log(handleSumClick)
  }

  function resetGame(){
    setSum(0);
    setIncrement(1);
     console.log(resetGame);

  }

  function handleIncrementClick(){
    if(sum >= 10){
      setIncrement(increment + 1);
    setSum(sum -10)
  }else{
    alert("You can't afford that!")
  }
  }
    return(
      <main>
        {sum >= 100? (
          <div>
            <p>You Win!</p>
            <button onClick={resetGame}>Play again?</button>

          </div>
        ) : (
          <div>
            <section className="Current">Current Score: {sum}</section>
            <br></br>
            <br></br>
            
            <button  onClick={handleSumClick}>+{increment}</button>
            <br></br>
            <br></br>
            
            <button onClick={handleIncrementClick}>Pay 10 points to change from +{increment} to +{increment +1}</button>
          </div>
        )}
      </main>
    );


  
    // return (
    //   <main>
    //     <p>React State Lab</p>
    //   </main>
    // );
}

export default App;
