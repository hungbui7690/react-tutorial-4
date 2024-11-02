import { useState, useRef } from 'react'

export default function Player() {
  const playerName = useRef() // 1.

  const [enteredPlayerName, setEnteredPlayerName] = useState(null)

  // 3.
  function handleClick() {
    setEnteredPlayerName(playerName.current.value) // # need to comment this line to test the below *
  }

  return (
    <section id='player'>
      {/* * DONT DO THIS -> playerName.current is undefined -> at initial render it is undefined  */}
      {/* <h2>Welcome {playerName.current.value ?? 'unknown entity'}</h2> */}

      {/* * THIS DOES NOT CAUSE ERROR -> BUT STILL NOT WORK */}
      {/* <h2>
        Welcome{' '}
        {playerName.current ? playerName.current.value : 'unknown entity'}
      </h2> */}

      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        {/* 2. add ref -> does not need onChange + value */}
        <input ref={playerName} type='text' />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  )
}
