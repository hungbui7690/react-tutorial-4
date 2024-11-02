/*
  - index.html -> add id="modal" above "root"


*/

function App() {
  return (
    // 1. Error
    // <div>
    //   <h1>Hello there</h1>
    //   <p>Thank you for Reading</p>
    // </div>
    // <div>
    //   <h1>Hello there</h1>
    //   <p>Thank you for Reading</p>
    // </div>

    // 2. Can nest in div or fragment -> return unnecessary div -> create div soups
    // <div>
    //   <div>
    //     <div>
    //       <h1>Hello there</h1>
    //       <p>Thank you for Reading</p>
    //     </div>
    //     <div>
    //       <h1>Hello there</h1>
    //       <p>Thank you for Reading</p>
    //     </div>
    //   </div>
    // </div>

    // 3. use fragment instead
    <>
      <div>
        <div>
          <h1>Hello there</h1>
          <p>Thank you for Reading</p>
        </div>
        <div>
          <h1>Hello there</h1>
          <p>Thank you for Reading</p>
        </div>
      </div>
    </>
  )
}

export default App
