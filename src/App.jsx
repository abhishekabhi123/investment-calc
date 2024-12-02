import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  function handleChange(inputIdentifer, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifer]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      <Results input={userInput} />
    </>
  );
}

export default App;
