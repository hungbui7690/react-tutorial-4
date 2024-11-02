/*
  - compare fn
    function compareFn(a, b) {
      if (a is less than b by some ordering criterion) {
        return -1;
      } else if (a is greater than b by the ordering criterion) {
        return 1;
      }
      a must be equal to b
      return 0;
    }
    -> this function return -1, 0 or 1


--------------------------

  - shuffledAnswers.sort(() => Math.random() - 0.5)
    - Math.random() -> 0 to 0.99999
    - -0.5 to 0.5 -> negative, 0 or positive



*/

import Header from './components/Header.jsx'
import Quiz from './components/Quiz.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <Quiz />
      </main>
    </>
  )
}

export default App
