import { useState } from 'react'

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false)

  function handleEditClick() {
    // setIsEditing(!editing) // schedules a state update to true
    // setIsEditing(!editing) // still use the initial state

    // 1. using previous state
    setIsEditing((editing) => !editing)
  }

  let playerName = <span className='player-name'>{name}</span>
  // let btnCaption = 'Edit';

  if (isEditing) {
    playerName = <input type='text' required value={name} />
    // btnCaption = 'Save';
  }

  return (
    <li>
      <span className='player'>
        {playerName}
        <span className='player-symbol'>{symbol}</span>
      </span>

      {/* 2. Save / Edit */}
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}
