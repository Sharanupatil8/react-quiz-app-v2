import React from "react";

function NextButton({ setQuestionNumber, setAnswered }) {
  const handleNextQuestion = () => {
    setQuestionNumber((prev) => prev + 1);
    setAnswered(null);
  };
  return (
    <button onClick={handleNextQuestion} className="btn-slate ">
      Next
    </button>
  );
}

export default NextButton;
