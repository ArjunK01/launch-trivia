import './App.css';
import { useState, useEffect } from 'react'
import Question from './Components/Question';
import Select from 'react-select'

function App() {
  const [amountQuestions, setAmountQuestions] = useState(10)
  const [category, setCategory] = useState('0')
  const [questions, setQuestions] = useState([])

  const options = [
    { value: '0', label: 'Any Category' },
    { value: '9', label: 'General Knowledge' },
    { value: '10', label: 'Entertainment: Books' },
    { value: '11', label: 'Entertainment: Film' },
    { value: '12', label: 'Entertainment: Music' },
    { value: '13', label: 'Entertainment: Musicals & Theatres' },
    { value: '14', label: 'Entertainment: Television' },
    { value: '15', label: 'Entertainment: Video Games' },
    { value: '16', label: 'Entertainment: Board Games' },
    { value: '17', label: 'Science: Nature' },
    { value: '18', label: 'Science: Computers' },
    { value: '19', label: 'Science: Mathematics' },
    { value: '20', label: 'Mythology' },
    { value: '21', label: 'Sports' },
    { value: '22', label: 'Geography' },
    { value: '23', label: 'History' },
    { value: '24', label: 'Politics' },
    { value: '25', label: 'Art' },
    { value: '26', label: 'Celebrities' },
    { value: '27', label: 'Animals' },
    { value: '28', label: 'Vehicles' },
    { value: '29', label: 'Entertainment: Comics' },
    { value: '30', label: 'Science: Gadgets' },
    { value: '31', label: 'Entertainment: Japanese Anime & Manga' },
    { value: '32', label: 'Entertainment: Cartoon & Animations' },

  ]

  const changeQuestions = () => {

    fetch("https://opentdb.com/api.php?amount=" + amountQuestions + "&category=" + category.value+"&encode=base64").then(res => res.json()).then(res => setQuestions(res.results))
  }

  useEffect(() => {
    changeQuestions()
  }, [category])
  return (
    <div className="container">
      {
        questions.length > 0 ? null :
          <form>
            <div class="numQ">
              <p>Number of Questions: </p>
              <input value={amountQuestions} onChange={e => setAmountQuestions(e.target.value)} />
            </div>
            <Select options={options} defaultMenuIsOpen={true} placeholder="Select Category" onChange={value => setCategory(value)} />

          </form>}
      {

          questions.map(q => <Question question={q} />)

      }



    </div>
  );
}

export default App;
