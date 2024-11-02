/*
  - index.html -> add id="modal" above "root"


*/

import { createPortal } from 'react-dom'

const Port = (props) => {
  return <h1>Hi, {props.text}</h1>
}

const Modal = () => {
  // use portal
  return createPortal(
    <Port text='Hello World' />,
    document.getElementById('modal')
  )
}

const App = () => {
  return (
    <>
      <Modal />
    </>
  )
}

export default App
