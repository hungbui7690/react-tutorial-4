/*
  Virtual DOM
  - compare the old virtual DOM snapshot with the new one
    ❌ not compare with the real DOM

  - if there is a difference, apply the changes to the real DOM


---------------------------

  Key
  - ComponentHistory
    -> use key to map the states to that component


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
        <ConfigureCounter onSet={handleSetCount} />

        {/* state is scoped to the component */}
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter initialCount={0} />
      </main>
    </>
  )
}

export default App
