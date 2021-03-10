const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/salehi.s/courses"

export const createModule = (courseId, module) => 0

export const findModulesForCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}/modules`)
        .then(response => response.json())

export const findModule = (moduleId) => 0

export const updateModule = (moduleId, module) => 0

export const deleteModule = (moduleId) => 0