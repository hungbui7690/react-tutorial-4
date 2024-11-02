/*
  - components/Section.jsx
  - apply in components/CoreConcepts.jsx, components/Examples.jsx

  🌲 <section {...props}>
    -> if we inspect -> we don't see these props


*/

import Header from './components/Header/Header.jsx'
import CoreConcepts from './components/CoreConcepts.jsx'
import Examples from './components/Examples.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  )
}

export default App
