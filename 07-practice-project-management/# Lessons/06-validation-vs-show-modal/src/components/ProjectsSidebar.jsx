import Button from './Button.jsx'

export default function ProjectsSidebar({ onStartAddProject, projects }) {
  return (
    <aside className='bg-stone-900 px-8 py-16 rounded-r-xl w-1/3 md:w-72 text-stone-50'>
      <h2 className='mb-8 font-bold text-stone-200 md:text-xl uppercase'>
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className='mt-8'>
        {projects.map((project) => (
          <li key={project.id}>
            <button className='hover:bg-stone-800 my-1 px-2 py-1 rounded-sm w-full text-left text-stone-400 hover:text-stone-200'>
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
