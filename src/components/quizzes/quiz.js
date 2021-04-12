import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import Question from "./questions/question"

const Quiz = () => {

    const {courseId, quizId} = useParams()

    const [questions, setQuestions] = useState([])

    // NOTE: MOVE THIS TO A SERVICE FILE
    useEffect(() => {
        fetch(`http://localhost:3000/api/quizzes/${quizId}/questions`)
            .then(response => response.json())
            .then((questions) => setQuestions(questions))
    }, [])

    return(
        <div className = "container-fluid">
            <h2>Quiz {quizId}</h2>
            <ul className = "list-group">
                {
                    questions.map(question =>
                                      <li className = "list-group-item">
                                          <Question question = {question}/>
                                      </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Quiz