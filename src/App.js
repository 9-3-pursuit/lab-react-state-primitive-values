import React from "react";
import "./App.css";

// importing da style
import "./index.css";

// importing state
import { useState } from "react";

// remember state is immutable
// Mise en place
const [score, setScore] = useState(0);
const [point, setPoint] = useState(1);

const App = () => {
  return (
    <main>
      {/* This `div` will hold the main components of the game */}
      <div className="main-game-container"></div>

      {/* This `div` will hold the components after the game is won */}
      <div className="game-won-container"></div>
    </main>
  );
};

export default App;
