import React from "react";
import Cover from './Components/Cover'
import './index.css'
import Quiz from './Components/mainQuiz'


function App () {
 const [isStarted, setIsStarted] = React.useState(false)
  function startQuiz (){
    setIsStarted(true)
  }

  const [newSet, fetchNewSet] = React.useState(false)
  function fetchNew () {
    fetchNewSet(oldSet => !oldSet)
  }
  React.useEffect(function (){
    fetch('https://opentdb.com/api.php?amount=5')
        .then(res => res.json())
        .then(data => setAllQuestions(data.results))
},[newSet])


  const [isSubmitted, submit] = React.useState(false)
  const [answersCheck, checkAnswer] = React.useState(false)
  function check () {
    checkAnswer(oldCheck => !oldCheck)
  }
  function submitQuiz () {
    submit(prevSubmit => !prevSubmit)
  }
  const [allQuestions, setAllQuestions] = React.useState([])
  const dataElements = allQuestions.map(function(question){
    return <Quiz 
    key = {question.question}
    {...question}
    isSubmitted = {isSubmitted}
    answersCheck = {answersCheck}/>
  })

  return(
    <main>
      {isStarted
      ?
      <div>
      {dataElements}
      <button className="submit" onClick={submitQuiz}>Submit</button>
      <button className="submit2"onClick={() => window.location.reload()}>Restart Quiz</button>
      {isSubmitted &&
      <div>
      <button className="submit" onClick={check}>Check Answers</button>
      </div>}
      </div>
      : 
      <Cover startQuiz = {startQuiz}/>
      }  

    </main>
  )
}
export default App; 