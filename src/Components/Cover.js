import React from "react"
import '../index.css'

export default function Cover (props) {
    return(
        <div className="cover">
            <div className="blob1"></div>
            <div className="details">
                <h3>Quizzical</h3>
                <p className="description"> Test your quiz skills!</p>
                <button className="start" onClick={props.startQuiz}>Start Quiz</button>
            </div>
            <div className="blob2"></div>
        </div>
    )
}