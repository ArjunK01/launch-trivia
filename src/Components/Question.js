import React,{useEffect, useState} from 'react'
import Answer from './Answer'
import "./Question.css"


const Question = ({ question }) => {
    
    let [answers, setAnswers] = useState([])

    let [selected, setSelected] = useState(null)

    useEffect(() => {
        if(selected){
            if(selected === question.correct_answer){
                console.log("CORRECT")
            } else {
                console.log("WRONG")
            }
        }
    }
    ,[selected])

    useEffect(() => {
        let ans = [...question.incorrect_answers, question.correct_answer]
        const randIndex = parseInt(Math.random() * 3)
        setAnswers(ans.sort( () => .5 - Math.random() ))
    }, [])

    const changeSelected = a => {
        setSelected(a)
    }
    var decodeHTML = function (html) {
        var txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };
    return (
        <div className="question" >
            <h2>{atob(question.question)}</h2>
            {
                answers.map(a => <Answer ans={a} setSelected={changeSelected} selected={selected} correct_answer={a === question.correct_answer}/>)
            }
        </div>
    )
}

export default Question
