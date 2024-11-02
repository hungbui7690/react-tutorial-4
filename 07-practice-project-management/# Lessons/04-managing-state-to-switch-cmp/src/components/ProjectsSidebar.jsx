import Button from './Button.jsx'

export default function ProjectsSidebar({ onStartAddProject }) {
  return (
    <aside className='bg-stone-900 px-8 py-16 rounded-r-xl w-1/3 md:w-72 text-stone-50'>
      <h2 className='mb-8 font-bold text-stone-200 md:text-xl uppercase'>
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul></ul>
    </aside>
  )
}
