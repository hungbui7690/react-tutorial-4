import { useState } from 'react'
import './index.css'

export default function App() {
  const [timer, setTimer] = useState(0)
  const [timeInterval, setTimeInterval] = useState(null)

  const startTimer = () => {
    // Use setInterval to update the timer every 1000 milliseconds (1 second)
    setTimeInterval(
      setInterval(() => {
        // Update the timer by incrementing the previous value by 1
        setTimer((prev) => prev + 1)
      }, 1000)
    )
  }

  const pauseTimer = () => {
    // Clear the interval to stop the timer from updating
    clearInterval(timeInterval)
  }

  const resetTimer = () => {
    setTimer(0)
    // Clear the interval to stop the timer
    clearInterval(timeInterval)
  }

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
