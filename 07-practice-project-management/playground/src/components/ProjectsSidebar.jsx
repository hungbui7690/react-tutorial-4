import Button from './Button.jsx'

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className='bg-stone-900 px-8 py-16 rounded-r-xl w-1/3 md:w-72 text-stone-50'>
      <h2 className='mb-8 font-bold text-stone-200 md:text-xl uppercase'>
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className='mt-8'>
        {projects.map((project) => {
          let cssClasses =
            'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800'

          if (project.id === selectedProjectId) {
            cssClasses += ' bg-stone-800 text-stone-200'
          } else {
            cssClasses += ' text-stone-400'
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
