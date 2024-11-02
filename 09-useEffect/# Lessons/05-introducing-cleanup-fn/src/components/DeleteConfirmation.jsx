import { useEffect } from 'react'

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  // @
  useEffect(() => {
    console.log('TIMER SET')
    const timer = setTimeout(() => {
      onConfirm()
    }, 3000)

    // @
    return () => {
      console.log('Cleaning up timer')
      clearTimeout(timer)
    }
  }, [])
  // }, [onConfirm]) // @ because we use onConfirm() in useEffect -> react will suggest us to use it as dependency -> but if we use it here, it will sometimes cause infinite loop
  // @ The issue is that upon each render cycle, onConfirm is redefined. React uses shallow object comparison to determine if a value updated or not. Each render cycle onConfirm has a different reference.

  return (
    <div id='delete-confirmation'>
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id='confirmation-actions'>
        <button onClick={onCancel} className='button-text'>
          No
        </button>
        <button onClick={onConfirm} className='button'>
          Yes
        </button>
      </div>
    </div>
  )
}
