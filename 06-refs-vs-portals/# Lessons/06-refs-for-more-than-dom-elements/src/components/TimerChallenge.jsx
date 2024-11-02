/*
  - useRef works in this case since we don't do any update to the UI 


*/

import { useState, useRef } from 'react'

// let timer; // @ this will stop the setTimeout -> but it cannot control multiple timers

export default function TimerChallenge({ title, targetTime }) {
  // let timer // @ this won't work -> since everytime we re-render the component, this variable will be recreated

  const timer = useRef() // 1.

  const [timerStarted, setTimerStarted] = useState(false)
  const [timerExpired, setTimerExpired] = useState(false)

  function handleStart() {
    // 2. <timer.current>
    timer.current = setTimeout(() => {
      setTimerExpired(true)
    }, targetTime * 1000)

    setTimerStarted(true)
  }

  function handleStop() {
    // 3.
    clearTimeout(timer.current)
  }

  return (
    <section className='challenge'>
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className='challenge-time'>
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  )
}
