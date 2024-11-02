/*
  - not define in a file or in css file 
  - define in a component
  - need to install
  - reusable


------------------------

  - create components/Button + Input
  - use in AuthInputs component


------------------------

  const Button = styled.button`
    &:hover {
      background-color: #f0920e;
    }
  `


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
