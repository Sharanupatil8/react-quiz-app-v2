import React, { useState } from "react";
import Timer from "./Timer";

const GameComponent = () => {
  const [userScore, setUserScore] = useState(0);

  const handleTimeout = () => {
    // You can add logic to display the final score or perform other actions when the timer reaches zero
    restartGame();
  };



  return (
    <div>
      <h1>Your Game</h1>
      <Timer duration={300000} onTimeout={handleTimeout} />{" "}
      {/* 300000 milliseconds = 5 minutes */}
      {/* Rest of your game content */}
    </div>
  );
};

export default GameComponent;
