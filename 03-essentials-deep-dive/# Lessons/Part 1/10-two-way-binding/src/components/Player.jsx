import { useState } from 'react'

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName) // 1.
  const [isEditing, setIsEditing] = useState(false)

  function handleEditClick() {
    setIsEditing((editing) => !editing)
  }

  // 2.
  function handleChange(event) {
    setPlayerName(event.target.value)
  }

  // 3.
  let editablePlayerName = <span className='player-name'>{playerName}</span>

  if (isEditing) {
    // 4.
    editablePlayerName = (
      <input type='text' required value={playerName} onChange={handleChange} />
    )
  }

  return (
    <li>
      {/* 5. */}
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}
