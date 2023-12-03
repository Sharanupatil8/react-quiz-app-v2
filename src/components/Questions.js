import React from "react";
import Options from "./Options";
import ProgressBar from "./ProgressBar";

function Questions({
  questions,
  setAnswered,
  answered,
  totalScore,
  handleSetUserPoints,
  userPoints,
  questionNumber,
  totalQuestions,
}) {
  return (
    <div className="mt-12 md:mt-8">
      <ProgressBar
        totalScore={totalScore}
        userPoints={userPoints}
        questionNumber={questionNumber}
        totalQuestions={totalQuestions}
      />
      <h2 className="text-2xl ">{questions.question}</h2>
      <Options
        options={questions.options}
        questions={questions}
        setAnswered={setAnswered}
        answered={answered}
        handleSetUserPoints={handleSetUserPoints}
      />
    </div>
  );
}

export default Questions;
