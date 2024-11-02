import { useState } from 'react'

import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'

function App() {
  // 1. switch to useState
  const [activePlayer, setActivePlayer] = useState('X')

  // 2.
  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'))
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player
            initialName='Player 1'
            symbol='X'
            isActive={activePlayer === 'X'}
          />
          <Player
            initialName='Player 2'
            symbol='O'
            isActive={activePlayer === 'O'}
          />
        </ol>
        {/* 3. */}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      LOG
    </main>
  )
}

export default App
