import React from "react";

function ProgressBar({
  totalScore,
  userPoints,
  questionNumber,
  totalQuestions,
}) {
  return (
    <div className="flex flex-col mb-4">
      <div class="mb-5 h-2 bg-slate-200">
        <div class="h-2 bg-sky-500 w-3"></div>
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
