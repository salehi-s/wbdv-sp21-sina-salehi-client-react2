import React from 'react'

// Local Implementation
// const QUIZZES_URL = "http://localhost:3000/api/quizzes"

// Remote Implementation
const QUIZZES_URL = "http://wbdv-sp21-salehi-s-server-node.herokuapp.com"

const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}

const findQuizById = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())
}

const submitQuiz = (quizId, questions) =>
    fetch(`http://localhost:3000/api/quizzes/${quizId}/attempts`, {
        method: "POST",
        body: JSON.stringify(questions),
        headers: {
            "content-type": "application/json"
        }
    }).then((response) => response.json())
        .then((result) => console.log(result))

const api = {
    findAllQuizzes,
    findQuizById,
    submitQuiz
}

export default api