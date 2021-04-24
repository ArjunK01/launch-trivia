import React from 'react'
import './Answer.css'

const Answer = ({ ans, correct_answer, setSelected, selected }) => {
    return (
        <div className="ans" onClick={() => !selected ? setSelected(ans) : null} style={{borderColor: selected ? (selected === ans ? (correct_answer ? "#5DBD5E":"#FF6B61"): ("white")) : "#e3e3e3", backgroundColor: selected ? (selected === ans ? (correct_answer ? "#5DBD5E" : "#FF6B61") : "#ededed") : "white" }}>
            <h4 style={{ color: selected ? (selected === ans ? (correct_answer ? "white" : "white") : (correct_answer?"#5DBD5E":"black")) : "black" }}>
                {atob(ans)}
            </h4>
        </div>
    )
}

export default Answer
