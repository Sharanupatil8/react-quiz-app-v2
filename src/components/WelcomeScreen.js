import React from "react";

function WelcomeScreen({ setQuestionsReady }) {
  return (
    <div className="text-center mt-12 md:mt-10">
      <h2 className="text-2xl md:text-4xl  font-bold">
        Welcome to The React Quiz!
      </h2>
      <p className="text-xl mb-5 mt-4">15 questions to test your React Skill</p>
      <button
        onClick={() => setQuestionsReady(true)}
        className="rounded transition duration-150 ease-linear hover:bg-slate-800 py-3 px-8 mt-4 text-lg bg-slate-300 text-slate-800 hover:text-slate-400 font-bold"
      >
        Start Now
      </button>
    </div>
  );
}

export default WelcomeScreen;
