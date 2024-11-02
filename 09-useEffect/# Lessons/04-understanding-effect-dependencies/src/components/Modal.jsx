import { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

// @
function Modal({ open, children, onClose }) {
  const dialog = useRef()

  // @ without useEffect -> if we use showModal() -> don't need the open={open} below
  // but this will show error -> since we call dialog.current at this time is undefined
  // if(open) dialog.current.showModal()
  //   else dialog.current.close()

  // # change to useEffect -> at this time dialog.current the DOM element
  useEffect(() => {
    if (open) {
      dialog.current.showModal()
    } else {
      dialog.current.close()
    }
  }, [open]) // # [open] -> only when open changes

  return createPortal(
    // @ if we use open -> backdrop will disappear
    // <dialog className='modal' ref={dialog} open={open}>

    // #
    <dialog className='modal' ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal')
  )
}

export default Modal
