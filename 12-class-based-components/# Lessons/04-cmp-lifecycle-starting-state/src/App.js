/*
  - side effect -> useEffect() -> but in class based comp, we cant use hooks 
    -> use lifecycle methods


------------------------

  3 most important ones: 
  - componentDidMount() -> useEffect(), []
  - componentDidUpdate() -> useEffect(), [someValue]
  - componentWillUnmount() -> useEffect( return () => {}), [] -> clean up


------------------------

  - UserFinder
    -> work with functional component first



*/

import UserFinder from './components/UserFinder'

function App() {
  return (
    <div>
      {/* @ UserFinder instead of Users */}
      <UserFinder />
    </div>
  )
}

export default App
