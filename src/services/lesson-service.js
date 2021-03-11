const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/salehi.s/modules"

export const createLesson = (moduleId, lesson) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            "content-type": "application-json"
        }
    })
        .then(response => response.json())

export const findLessonsForModule = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`)
        .then(response => response.json())

export const findLesson = (lessonId) => 0

export const updateLesson = (lessonId, lesson) => 0

export const deleteLesson = (lessonId) => 0

const api = {
    createLesson,
    findLessonsForModule,
    findLesson,
    updateLesson,
    deleteLesson
}

export default api