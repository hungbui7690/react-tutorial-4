import noProjectImage from '../assets/no-projects.png'
import Button from './Button.jsx'

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className='mt-24 w-2/3 text-center'>
      <img
        src={noProjectImage}
        alt='An empty task list'
        className='mx-auto w-16 h-16 object-contain'
      />
      <h2 className='my-4 font-bold text-stone-500 text-xl'>
        No Project Selected
      </h2>
      <p className='mb-4 text-stone-400'>
        Select a project or get started with a new one
      </p>
      <p className='mt-8'>
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  )
}
