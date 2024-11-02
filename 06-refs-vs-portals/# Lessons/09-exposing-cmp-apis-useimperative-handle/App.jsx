/*
  - dialog.current.showModal() -> we know how to work with dialog, but other devs maybe does not know how to use it 
  - we need to have a way to tell the other devs about it -> so if they want to customize, they can do it
    -> useImperativeHandle hook


-------------------------

  - The <useImperativeHandle> hook in React allows a child component to expose certain functions or properties to its parent component, giving the parent component more control over the child component
  - use with forwardRef


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
