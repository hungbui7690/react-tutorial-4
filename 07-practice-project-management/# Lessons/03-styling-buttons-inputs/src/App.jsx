/*
  - export default function Input({ label, textarea, ...props }) {}
    -> ...props 


*/

import NewProject from './components/NewProject.jsx'
import ProjectsSidebar from './components/ProjectsSidebar.jsx'

function App() {
  return (
    <main className='flex gap-8 my-8 h-screen'>
      <ProjectsSidebar />
      <NewProject />
    </main>
  )
}

export default App
