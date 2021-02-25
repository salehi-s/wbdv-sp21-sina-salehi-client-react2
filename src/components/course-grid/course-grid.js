import React from 'react'
import CourseCard from "./course-card"
import {Link} from 'react-router-dom'
import CourseRow from "../course-table/course-row";

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