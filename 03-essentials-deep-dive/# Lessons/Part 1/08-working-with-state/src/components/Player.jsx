import { useState } from 'react'

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false) // 1.

  function handleEditClick() {
    setIsEditing(true) // 2.
  }

  let playerName = <span className='player-name'>{name}</span>

  if (isEditing) {
    playerName = <input type='text' required />
  }

  return (
    <li>
      <span className='player'>
        {playerName}
        <span className='player-symbol'>{symbol}</span>
      </span>

      {/* 3. */}
      <button onClick={handleEditClick}>Edit</button>
    </li>
  )
}
