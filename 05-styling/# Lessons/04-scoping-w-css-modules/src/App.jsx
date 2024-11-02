/*
  - prevent css collisions
  - write css with file-specific scoping
  - generate css unique class names 
  - no need to install


------------------------

  - Header.css -> Header.module.css
  - import <classes> from './Header.module.css'; -> can be any variables
  - <p className={classes.paragraph}>


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
