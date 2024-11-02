/*
  - useRef
    + does not need onChange + value
    + does not trigger re-render
    + can access to dom elements directly


*/

import Player from './components/Player.jsx'

function App() {
  return (
    <>
      <Player />
      <div id='challenges'></div>
    </>
  )
}

export default App
