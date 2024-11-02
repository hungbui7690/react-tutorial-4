/*
  - selectedProjectId: undefined
    + undefined -> No project selected
    + null -> New project


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

  // use in Add Project button -> show the Form to add new project
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  // @
  let content
  if (projectsState.selectedProjectId === null) {
    content = <NewProject />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className='flex gap-8 my-8 h-screen'>
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />

      {/* @ */}
      {content}
    </main>
  )
}

export default App
