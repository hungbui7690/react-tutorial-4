/*
  - React Dev Tools -> Profiler


------------------------

  - top part
    - Header -> Counter 
      -> if we update the same value -> still re-render
      -> use memo()


------------------------

  - <memo> is used to optimize the rendering of the component itself
    -> React <memo> should be used in cases where the component is re-render too often even though its props are unchanged.
  - <useMemo> is used to optimize the computationally expensive operations that run inside the component
    -> If your code runs fine without using useMemo then leave it as is. It is not a good idea to be premature optimizations.
    -> But if you notice hangs or lags in your application. If you notice the UI becomes unresponsive then you can investigate the computationally expensive methods in your application, and optimize them using useMemo.



*/

import { useState } from 'react'

import Counter from './components/Counter/Counter.jsx'
import Header from './components/Header.jsx'
import { log } from './log.js'

function App() {
  log('<App /> rendered')

  const [enteredNumber, setEnteredNumber] = useState(0)
  const [chosenCount, setChosenCount] = useState(0)

  function handleChange(event) {
    setEnteredNumber(+event.target.value)
  }

  function handleSetClick() {
    setChosenCount(enteredNumber)
    setEnteredNumber(0)
  }

  return (
    <>
      <Header />
      <main>
        {/* @ */}
        <section id='configure-counter'>
          <h2>Set Counter</h2>
          <input type='number' onChange={handleChange} value={enteredNumber} />
          <button onClick={handleSetClick}>Set</button>
        </section>
        {/* @ */}
        <Counter initialCount={chosenCount} />
      </main>
    </>
  )
}

export default App
