/*
  - Header.css
    -> cut the Header css code from index.css to here



*/

import AuthInputs from './components/AuthInputs.jsx'
import Header from './components/Header.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main styles={{ textTransform: 'uppercase' }}>
        <AuthInputs />
      </main>
    </>
  )
}
