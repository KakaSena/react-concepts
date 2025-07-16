import { useState, useCallback } from "react";

import QUESTIONS from "../questions";
import QuestionTimer from "./QuestionTimer";
import summary from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnwsers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnwsers.length;
  const isQuizCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleSelectedAnswer = useCallback(function handleSelectedAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  );

  if (isQuizCompleted) {
    return (
      <div id="summary">
        <img src={summary} alt="summary" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />

        <p>{QUESTIONS[activeQuestionIndex].text}</p>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectedAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
