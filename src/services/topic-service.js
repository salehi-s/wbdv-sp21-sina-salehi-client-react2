const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/salehi.s/lessons"

export const createTopic = (lessonId, topic) => 0

export const findTopicsForLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`)
        .then(response => response.json())

export const findTopic = (topicId) => 0

export const updateTopic = (topicId, topic) => 0

export const deleteTopic = (topicId) => 0