import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'

import Question from "./questions/question"

import quizzesService from "../../services/quizzes-service"
import questionsService from "../../services/questions-service"

const Quiz = () => {

    const {courseId, quizId} = useParams()

    const [questions, setQuestions] = useState([])
    const [quizTitle, setQuizTitle] = useState("")

    // FROM CLASS DEMONSTRATION.  REPLACED WITH SERVICE FUNCTION BELOW.  KEPT FOR FUTURE REFERENCE
    /*
    useEffect(() => {
        fetch(`http://localhost:3000/api/quizzes/${quizId}/questions`)
            .then(response => response.json())
            .then((questions) => setQuestions(questions))
    }, [])
    */

    useEffect(() => {
        quizzesService.findQuizById(quizId)
            .then((quiz) => {setQuizTitle(quiz.title)})
    }, [])
    useEffect(() => {
        questionsService.findQuestionsForQuiz(quizId)
            .then((questions) => {setQuestions(questions)})
    }, [])

    return(
        <div className = "container-fluid">
            <Link to = {`/courses/${courseId}/quizzes`}>
                <i className = "fas fa-arrow-left fa-2x float-left wbdv-editable-item-action-icon"/>
            </Link>
            <h2>{quizTitle}</h2>
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