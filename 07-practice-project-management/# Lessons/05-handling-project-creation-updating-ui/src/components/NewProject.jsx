import { useRef } from 'react'

import Input from './Input.jsx'

export default function NewProject({ onAdd }) {
  // 1.
  const title = useRef()
  const description = useRef()
  const dueDate = useRef()

  // 3a.
  function handleSave() {
    const enteredTitle = title.current.value
    const enteredDescription = description.current.value
    const enteredDueDate = dueDate.current.value

    // validation ...

    // 3b.
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    })
  }

  return (
    <div className='mt-16 w-[35rem]'>
      <menu className='flex justify-end items-center gap-4 my-4'>
        <li>
          <button className='text-stone-800 hover:text-stone-950'>
            Cancel
          </button>
        </li>
        <li>
          {/* 4. */}
          <button
            className='bg-stone-800 hover:bg-stone-950 px-6 py-2 rounded-md text-stone-50'
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        {/* 2. */}
        <Input type='text' ref={title} label='Title' />
        <Input ref={description} label='Description' textarea />
        <Input type='date' ref={dueDate} label='Due Date' />
      </div>
    </div>
  )
}
