import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = userInput.duration >= 1;

  function handleChange(event) {
    const { id, value } = event.target;
    setUserInput((prevInput) => ({
      ...prevInput,
      [id]: parseFloat(value),
    }));
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!isInputValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {isInputValid && <Results input={userInput} />}
    </>
  );
}

export default App;
