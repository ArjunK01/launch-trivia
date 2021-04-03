import './App.css';
import {useState, useEffect} from 'react'
import Question from './Components/Question';

function App() {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10").then(res => res.json()).then(res => setQuestions(res.results))
  }, [])

  return (
    <div>
      {questions.map(q => <Question question={q} />)}
    </div>
  );
}

export default App;
