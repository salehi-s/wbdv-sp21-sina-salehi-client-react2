import React from 'react'
import CourseCard from "./course-card"
import {Link} from 'react-router-dom'

{/* The CourseGrid component displays all of the courses currently stored in the server
    as a grid of cards in which each card lists the details of a single course.  Courses may be
    removed from the server or edited with the icons located in the lower-left corner of each
    card and the lower-right corner of each card, respectively. */}

const CourseGrid = ({deleteCourse, updateCourse, courses}) =>
    <div>
        <Link to = "/courses/table">
            <i className = "fas fa-2x fa-list float-right"></i>
        </Link>
        <h2>Course Grid</h2>
        <div className = "row">
        {
            courses.map(course =>
                <CourseCard
                    deleteCourse = {deleteCourse}
                    updateCourse = {updateCourse}
                    course = {course}
                    title = {course.title}
                    owner = {course.owner}
                    lastModified = {course.lastModified}
                    time = {course.time}
                />
            )
        }
        </div>
    </div>

export default CourseGrid