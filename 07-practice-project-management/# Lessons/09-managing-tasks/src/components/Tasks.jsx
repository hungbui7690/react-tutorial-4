import NewTask from './NewTask.jsx'

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className='mb-4 font-bold text-2xl text-stone-700'>Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className='my-4 text-stone-800'>
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className='bg-stone-100 mt-8 p-4 rounded-md'>
          {tasks.map((task) => (
            <li key={task.id} className='flex justify-between my-4'>
              <span>{task.text}</span>
              <button
                className='text-stone-700 hover:text-red-500'
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
