import { useState } from 'react'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard) // 1.

  function handleSelectSquare(rowIndex, colIndex) {
    // 2. update the initialGameBoard
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ]
      updatedBoard[rowIndex][colIndex] = 'X'
      return updatedBoard
    })
  }

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                {/* 3. */}
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}
