import React, {useState, useEffect} from 'react'

const QuizzesList = () => {

    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/api/quizzes")
            .then(response => response.json())
    }, [])

    return(
        <div>
            <h2>Quizzes</h2>
        </div>
    )
}

export default QuizzesList