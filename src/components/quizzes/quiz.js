import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import Question from "./questions/question"

import questionsService from "../../services/questions-service"

const Quiz = () => {

    const {courseId, quizId} = useParams()

    const [questions, setQuestions] = useState([])

    // FROM CLASS DEMONSTRATION.  REPLACED WITH SERVICE FUNCTION BELOW
    /*
    useEffect(() => {
        fetch(`http://localhost:3000/api/quizzes/${quizId}/questions`)
            .then(response => response.json())
            .then((questions) => setQuestions(questions))
    }, [])
    */

    questionsService.findQuestionsForQuiz(quizId)
        .then((questions) => {setQuestions(questions)})

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