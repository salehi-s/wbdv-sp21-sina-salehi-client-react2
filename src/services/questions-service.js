import React from 'react'

// Local Implementation
// const QUIZZES_URL = "http://localhost:3000/api/quizzes"

// Remote Implementation
const QUIZZES_URL = "http://wbdv-sp21-salehi-s-server-node.herokuapp.com"

const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json())
}

const api = {
    findQuestionsForQuiz
}

export default api