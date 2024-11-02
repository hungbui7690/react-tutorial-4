import { useRef } from 'react'

import Input from './Input.jsx'
import Modal from './Modal.jsx'

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef()

  const title = useRef()
  const description = useRef()
  const dueDate = useRef()

  function handleSave() {
    const enteredTitle = title.current.value
    const enteredDescription = description.current.value
    const enteredDueDate = dueDate.current.value

    // ! modal
    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modal.current.open()
      return
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    })
  }

  return (
    <>
      {/* ! modal */}
      <Modal ref={modal} buttonCaption='Okay'>
        <h2 className='my-4 font-bold text-stone-700 text-xl'>Invalid Input</h2>
        <p className='mb-4 text-stone-600'>
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className='mb-4 text-stone-600'>
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className='mt-16 w-[35rem]'>
        <menu className='flex justify-end items-center gap-4 my-4'>
          <li>
            {/* @ onCancel */}
            <button
              className='text-stone-800 hover:text-stone-950'
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className='bg-stone-800 hover:bg-stone-950 px-6 py-2 rounded-md text-stone-50'
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type='text' ref={title} label='Title' />
          <Input ref={description} label='Description' textarea />
          <Input type='date' ref={dueDate} label='Due Date' />
        </div>
      </div>
    </>
  )
}
