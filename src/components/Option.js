import React from "react";

function Option({
  option,
  index,
  setAnswered,
  answered,
  questions,
  handleSetUserPoints,
}) {
  const isCorrect = questions.correctOption === index;

  const handleAnswer = () => {
    // Check if the question has already been answered
    if (answered === null) {
      setAnswered(index);
    }
    if (isCorrect) {
      handleSetUserPoints(questions.points);
    }
  };

  return (
    <>
      <li
        onClick={handleAnswer}
        className={`btn-options cursor-pointer ${
          answered !== null
            ? isCorrect
              ? "bg-green-500 text-slate-800"
              : "bg-orange-500 text-slate-800"
            : ""
        } ${answered === index ? "translate-x-2" : ""}`}
      >
        {option}
      </li>
    </>
  );
}

export default Option;
