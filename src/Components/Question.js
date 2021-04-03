import React,{useEffect, useState} from 'react'

const Question = ({ question }) => {
    let [answers, setAnswers] = useState([])
    useEffect(() => {
        let ans = [...question.incorrect_answers, question.correct_answer]
        const randIndex = parseInt(Math.random() * 3)
        setAnswers(ans.sort( () => .5 - Math.random() ))
    }, [])

    return (
        <div>
            <h2>{question.question}</h2>
            {answers}
        </div>
    )
}

export default Question
