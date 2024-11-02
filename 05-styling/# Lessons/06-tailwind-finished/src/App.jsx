/*
  - check index.css 
  - extends fontFamily -> tailwind.config.js



*/

import AuthInputs from './components/AuthInputs.jsx'
import Header from './components/Header.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>
    </>
  )
}
