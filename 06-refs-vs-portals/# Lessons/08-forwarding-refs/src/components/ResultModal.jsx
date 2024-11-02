import { forwardRef } from 'react'

// 4. to passing ref -> use forwardRef
const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  return (
    // 5. ref
    <dialog ref={ref} className='result-modal'>
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method='dialog'>
        <button>Close</button>
      </form>
    </dialog>
  )
})

export default ResultModal
