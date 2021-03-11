const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/salehi.s/courses"

export const createModule = (courseId, module) =>
    fetch(`${COURSES_URL}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            "content-type": "application-json"
        }
    })
        .then(response => response.json())

export const findModulesForCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}/modules`)
        .then(response => response.json())

export const findModule = (moduleId) => 0

export const updateModule = (moduleId, module) => 0

export const deleteModule = (moduleId) => 0

const api = {
    createModule,
    findModulesForCourse,
    findModule,
    updateModule,
    deleteModule
}

export default api