import React from "react";

function ProgressBar({
  totalScore,
  userPoints,
  questionNumber,
  totalQuestions,
}) {
  // Calculate the percentage of completion
  const completionPercentage = (questionNumber / totalQuestions) * 100;

  return (
    <div className="flex flex-col mb-4">
      <div className="mb-5 h-2 bg-slate-200">
        <div
          className="h-2 bg-sky-500"
          style={{ width: `${completionPercentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between">
        <p>
          {questionNumber + 1} / {totalQuestions}
        </p>
        <p>
          <strong>{userPoints}</strong> / {totalScore}
        </p>
      </div>
    </div>
  );
}

export default ProgressBar;
