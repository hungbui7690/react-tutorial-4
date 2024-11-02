/*
  - Save
    + show the title in the Sidebar


-----------------------

  - NewProject
    -> useRef -> pass to Input
    -> Input -> forwardRef


*/

import { useState } from 'react'

import NewProject from './components/NewProject.jsx'
import NoProjectSelected from './components/NoProjectSelected.jsx'
import ProjectsSidebar from './components/ProjectsSidebar.jsx'

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  })

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  // @ onAdd -> use on save button
  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = new Date().getTime()
      const newProject = {
        ...projectData,
        id: projectId,
      }

      return {
        ...prevState,
        selectedProjectId: undefined, // to show the NoProjectSelected
        projects: [...prevState.projects, newProject],
      }
    })
  }

  let content

  if (projectsState.selectedProjectId === null) {
    // @ onAdd
    content = <NewProject onAdd={handleAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className='flex gap-8 my-8 h-screen'>
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  )
}

export default App
