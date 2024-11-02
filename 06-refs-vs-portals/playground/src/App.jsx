// Import the useState hook from React for managing state
import { useState } from 'react'

// Import the CSS file for styling
import './index.css'

// Define the main App component
export default function App() {
  // Initialize state variables for timer and timeInterval
  const [timer, setTimer] = useState(0)
  const [timeInterval, setTimeInterval] = useState(null)

  // Function to start the timer
  const startTimer = () => {
    // Use setInterval to update the timer every 1000 milliseconds (1 second)
    setTimeInterval(
      setInterval(() => {
        // Update the timer by incrementing the previous value by 1
        setTimer((prev) => prev + 1)
      }, 1000)
    )
  }

  // Function to pause the timer
  const pauseTimer = () => {
    // Clear the interval to stop the timer from updating
    clearInterval(timeInterval)
  }

  // Function to reset the timer
  const resetTimer = () => {
    // Reset the timer value to 0
    setTimer(0)
    // Clear the interval to stop the timer
    clearInterval(timeInterval)
  }

  // Render the timer and buttons in the component
  return (
    <div className='App'>
      <h3>Timer: {timer}</h3>
      <div className='btn-wrapper'>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  )
}
