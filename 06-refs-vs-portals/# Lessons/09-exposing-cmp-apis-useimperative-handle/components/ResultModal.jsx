import { forwardRef, useImperativeHandle, useRef } from 'react'

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  const dialog = useRef() // 1.

  // 3.
  useImperativeHandle(ref, () => {
    return {
      // expose the open method
      open() {
        dialog.current.showModal()
      },
    }
  })

  return (
    // 2. with this setup -> other devs can change the <dialog> element to <div> as long as they change the step 3. to make the <div> work as the <dialog>
    <dialog ref={dialog} className='result-modal'>
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
