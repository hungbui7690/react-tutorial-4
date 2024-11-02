import { useState } from 'react'

import Header from './components/Header.jsx'
import UserInput from './components/UserInput.jsx'
import Results from './components/Results.jsx'

function App() {
  // 1. lifted state since we want to access these info in Results component
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  // 2.
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      }
    })
  }

  return (
    <>
      <Header />
      {/* 3. */}
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results input={userInput} />
    </>
  )
}

export default App
