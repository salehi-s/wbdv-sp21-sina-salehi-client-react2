import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import courseService from "../../services/course-service";

const CourseCard = (
    {
        course,
        deleteCourse,
        updateCourse
    }
) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(course.title)

    const saveTitle = (course) => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <div className="card">
            <div className="card-body">
                <div className = "container-fluid">
                    {
                        !editing &&
                        <h5 className = "card-title">
                            {course.title}
                        </h5>
                    }
                    {
                        editing &&
                        <input onChange = {(event) => setNewTitle(event.target.value)}
                               value = {newTitle}
                               className = "form-control"/>
                    }
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Book.svg"
                     className="card-img-top"
                     alt="Course Card Image"></img>
                <p className="card-text">Owned By: {course.owner}</p>
                <p className="card-text">Date Last Modified: {course.lastModified}</p>
                <p className="card-text">Time Last Modified: {course.time}</p>
                <div className = "container-fluid">
                    <Link to="/courses/editor" className="btn btn-primary">
                        Go to {course.title}
                    </Link>
                </div>
                <span className = "wbdv-buttons-course-card">
                    <i onClick = {() => deleteCourse(course)}
                       className = "fas fa-trash"></i>
                </span>
                <span className = "wbdv-buttons-course-card">
                    {!editing && <i onClick = {() => setEditing(true)}
                                    className = "fas fa-edit fa-lg float-right"></i>}
                    {editing && <i onClick={() => saveTitle(course)}
                                   className="fas fa-check fa-lg float-right"></i>}
                </span>
            </div>
        </div>
    </div>
    )
}

export default CourseCard