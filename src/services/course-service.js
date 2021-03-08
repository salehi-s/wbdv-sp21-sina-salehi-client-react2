const COURSES_URL = 'https://wbdv-generic-server.herokuapp.com/api/salehi.s/courses'

{/* The CourseService service interacts with the server to add, retrieve, update, and delete
    courses stored in the server. */}

export const createCourse = (course) =>
    fetch(COURSES_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findAllCourses = () =>
    fetch(COURSES_URL)
        .then(response => response.json())

export const findCourseById = (id) =>
    fetch(`${COURSES_URL}/${id}`)
        .then(response => response.json())

export const updateCourse = (id, course) =>
    fetch(`${COURSES_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteCourse = (id) =>
    fetch(`${COURSES_URL}/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export default {
    createCourse,
    findAllCourses,
    findCourseById,
    updateCourse,
    deleteCourse
}

/*
function CourseService() {
    this.createCourse = createCourse
    this.findAllCourses = findAllCourses
    this.findCourseById = findCourseById
    this.updateCourse = updateCourse
    this.deleteCourse = deleteCourse
    this.url = COURSES_URL // Server URL
    var self = this

    // Send a new course to the server

    function createCourse(course) {
        return fetch(self.url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(course)
        }).then(function (response) {
            return response.json()
        })
    }

    // Find all existing courses in the server

    function findAllCourses() {
        return fetch(self.url).then(function (response) {
            return response.json()
        })
    }

    // Find a specific course according to that course's ID

    function findCourseById(id) {
        return fetch(`${self.url}/${id}`).then(function (response) {
            return response.json()
        })
    }

    // Update the attributes of an existing course in the server

    function updateCourse(id, course) {
        return fetch(`${self.url}/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(course)
        }).then(response => response.json())
    }

    // Remove an existing course from the server

    function deleteCourse(id) {
        return fetch(`${self.url}/${id}`, {method: 'DELETE'})
    }
}
*/