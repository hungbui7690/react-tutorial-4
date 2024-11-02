/*
  - modal -> 
    -> forwardRef
    -> useImperativeHandle
    -> createPortal -> modal-root


---------------------

  - validations -> show modal


---------------------

  - backdrop:: 
    -> https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop
    -> https://benjamincrozat.com/dialog-backdrop-styling-tailwind-css


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

  // @ onCancel
  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId,
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      }
    })
  }

  let content

  if (projectsState.selectedProjectId === null) {
    // @ onCancel
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    )
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
