import { useState } from "react";
import Header from "./components/Header";
import Questions from "./components/Questions";
import WelcomeScreen from "./components/WelcomeScreen";
import { reactQuizQuestions } from "./reactQuizQuestions";
import Footer from "./components/Footer";
import NextButton from "./components/NextButton";
import EndScreen from "./components/EndScreen";

console.log(reactQuizQuestions);

function App() {
  const [questionsReady, setQuestionsReady] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answered, setAnswered] = useState(null);
  const [userPoints, setUserPoints] = useState(0);
  const [restart, setRestart] = useState(false);

  const handleRestart = () => {
    setQuestionsReady(false);
    setQuestionNumber(0);
    setAnswered(null);
    setUserPoints(0);
  };

  const handleSetUserPoints = (points) => {
    setUserPoints((prev) => prev + points);
  };

  const totalQuestions = reactQuizQuestions.length;

  const totalScore = reactQuizQuestions
    .map((question) => question.points)
    .reduce((cur, points) => points + cur, 0);
  console.log(totalScore);

  return (
    <div className="antialiased px-5 pt-8 md:pt-14 text-slate-600  dark:text-slate-300 bg-white dark:bg-slate-900 h-screen flex flex-col items-center">
      <Header />

      <main className="max-w-5xl">
        {!questionsReady && (
          <WelcomeScreen setQuestionsReady={setQuestionsReady} />
        )}
        {questionsReady && questionNumber <= 14 && (
          <Questions
            questions={reactQuizQuestions[questionNumber]}
            setAnswered={setAnswered}
            answered={answered}
            totalScore={totalScore}
            handleSetUserPoints={handleSetUserPoints}
            userPoints={userPoints}
            questionNumber={questionNumber}
            totalQuestions={totalQuestions}
          />
        )}
        <Footer>
          <>
            {questionsReady && answered !== null && (
              <NextButton
                setQuestionNumber={setQuestionNumber}
                setAnswered={setAnswered}
              />
            )}
          </>
        </Footer>
        {questionNumber === 15 && (
          <EndScreen
            userPoints={userPoints}
            totalScore={totalScore}
            handleRestart={handleRestart}
            setRestart={setRestart}
          />
        )}
      </main>
    </div>
  );
}

export default App;
