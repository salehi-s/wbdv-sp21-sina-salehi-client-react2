import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'

import quizzesService from "../../services/quizzes-service"

const QuizzesList = () => {

    const {courseId} = useParams()

    const [quizzes, setQuizzes] = useState([])

    // FROM CLASS DEMONSTRATION.  REPLACED WITH SERVICE FUNCTION BELOW. KEPT FOR FUTURE REFERENCE
    /*
    useEffect(() => {
        fetch("http://localhost:3000/api/quizzes")
            .then(response => response.json())
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])
    */

    useEffect(() => {
        quizzesService.findAllQuizzes()
            .then((quizzes) => {setQuizzes(quizzes)})
    }, [])

    return(
        <div className = "container-fluid">
            <Link to = {`/courses`}>
                <i className = "fas fa-arrow-left fa-2x float-left wbdv-editable-item-action-icon"/>
            </Link>
            <h2>Quizzes</h2>
            <div className = "list-group">
                {
                    quizzes.map((quiz) => {
                        return(
                            <Link to = {`/courses/${courseId}/quizzes/${quiz._id}`}
                                  className = "list-group-item">
                                {quiz.title}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuizzesList