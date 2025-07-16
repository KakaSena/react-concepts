import { useState } from "react";

import QUESTIONS from "../questions";

export default function Quiz() {
  const [userAnwsers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnwsers.length;

  function handleSelectedAnsnwer(selectedAnswer) {
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });
  }

  return (
    <div id="quiz">
      <div id="question">
        <p>{QUESTIONS[activeQuestionIndex].text}</p>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectedAnsnwer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
