import { useState } from 'react'

export default function Quiz() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState([]) // userAnswers = ['A', 'B']

  return <p>Currently active Question</p>
}
