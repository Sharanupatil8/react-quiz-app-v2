import React from "react";

function EndScreen({ userPoints, totalScore, handleRestart, setRestart }) {
  const handleRestartFunction = () => {
    handleRestart();
    setRestart(false); // Ensure restart state is set to false
  };

  let message;

  if (userPoints >= 250) {
    message = "🎉 Congratulations! You did Fantastic! 🌟";
  } else if (userPoints >= 200) {
    message = "Great job! Keep it up! 🚀";
  } else if (userPoints >= 100) {
    message = "Good effort! Keep practicing! 💪";
  } else {
    message = "🔄 Try again, You can improve! 📚";
  }

  return (
    <div className="text-center mt-6 md:mt-10">
      <h2 className="text-2xl md:text-3xl font-bold">
        You Completed the quiz 🎉🥳
      </h2>
      <p className="text-lg bg-slate-600 px-8 py-3 mt-4 md:mt-8 rounded">
        Your Score&nbsp; : &nbsp;<strong>{userPoints}</strong> / {totalScore}
      </p>
      <p className="mt-4 text-lg mb-8">{message}</p>
      <button
        onClick={handleRestartFunction}
        className="btn-slate cursor-pointer"
      >
        Try Again!
      </button>
    </div>
  );
}

export default EndScreen;
