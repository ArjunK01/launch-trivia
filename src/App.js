import './App.css';
import {useState, useEffect} from 'react'
import Question from './Components/Question';
import UserInput from './Components/UserInput';

function App() {

  const [amountQuestions, setAmountQuestions] = useState(0)

  const [questions, setQuestions] = useState([])

  const setAmountQ = (num) => {
    setAmountQuestions(num)
  }

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=" + amountQuestions).then(res => res.json()).then(res => setQuestions(res.results))
  }, [amountQuestions])

  return (
    <div>
      {amountQuestions > 0 ? null : <UserInput setAmountQ={setAmountQ}/>}
      {questions.map(q => <Question question={q} />)}
    </div>
  );
}

export default App;
