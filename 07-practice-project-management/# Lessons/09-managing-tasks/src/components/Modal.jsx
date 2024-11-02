import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

import Button from './Button.jsx'

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef()

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      },
    }
  })

  return createPortal(
    <dialog
      ref={dialog}
      className='backdrop:bg-stone-900/90 shadow-md p-4 rounded-md'
    >
      {children}
      <form method='dialog' className='text-right mt-4'>
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  )
})

export default Modal
