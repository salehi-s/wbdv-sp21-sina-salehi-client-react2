import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'

const QuizzesList = () => {

    const {courseId} = useParams()

    const [quizzes, setQuizzes] = useState([])

    // NOTE: IMPLEMENT THIS IN A SEPARATE SERVICE FILE
    useEffect(() => {
        fetch("http://localhost:3000/api/quizzes")
            .then(response => response.json())
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])

    return(
        <div className = "container-fluid">
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