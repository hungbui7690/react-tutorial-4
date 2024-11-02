/*
  Clever Structuring
  - ConfigureCounter
    -> move the state to child component
  

------------------------

  useCallback
  - $
  - fn in js is just a value -> everytime render -> create a new ref of that fn -> different value
  - we will apply this to the dec/inc functions


------------------------

  useMemo
  - @
  - Counter -> isPrime()


*/

import { useState } from 'react'

import Counter from './components/Counter/Counter.jsx'
import Header from './components/Header.jsx'
import { log } from './log.js'
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx'

function App() {
  log('<App /> rendered')

  const [chosenCount, setChosenCount] = useState(0)

  function handleSetCount(newCount) {
    setChosenCount(newCount)
  }

  return (
    <>
      <Header />
      <main>
        {/* @  */}
        <ConfigureCounter onSet={handleSetCount} />
        <Counter initialCount={chosenCount} />
      </main>
    </>
  )
}

export default App
