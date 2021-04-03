import React,{useEffect, useState} from 'react'


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

    return (
        <div>
            <h2>{question.question}</h2>
            {answers.map(a => 
                <div onClick={() => ! selected ? setSelected(a) : null}>
                    <h4 style={{color: selected ? (selected === a ? (a === question.correct_answer ? "green" : "red"): "gray"): "black"}}>
                        {a}
                    </h4>
                </div>)}
        </div>
    )
}

export default Question
