/*
  - modal does not show
    -> <dialog className='result-modal'>
  - to open the modal -> add "open" attribute (this attribute belongs to the dialog element) -> not React, but HTML
    -> <dialog className='result-modal' open> 

  
----------------------

  - to close the dialog -> add this form

      <form method="dialog">
          <button>OK</button>
      </form>


*/

import Player from './components/Player.jsx'
import TimerChallenge from './components/TimerChallenge.jsx'

function App() {
  return (
    <>
      <Player />
      <div id='challenges'>
        <TimerChallenge title='Easy' targetTime={1} />
        <TimerChallenge title='Not easy' targetTime={5} />
        <TimerChallenge title='Getting tough' targetTime={10} />
        <TimerChallenge title='Pros only' targetTime={15} />
      </div>
    </>
  )
}

export default App
