import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10").then(res => res.json()).then(res => setQuestions(res.results))
  }, [])

  return (
    <div>
      {questions.map(q => <h2>{q.question}</h2>)}
    </div>
  );
}

export default App;
